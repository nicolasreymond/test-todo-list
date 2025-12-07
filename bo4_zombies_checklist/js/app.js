const DEFAULT_SYMBOLS = [
  { symbol: "☀️ Soleil", meaning: "Rayon lumineux / feu ou énergie" },
  { symbol: "🌙 Lune", meaning: "Phase nocturne, énigmes d'obscurité" },
  { symbol: "🜂 Triangle", meaning: "Éléments à aligner dans l'ordre" },
  { symbol: "蛇 Serpent", meaning: "Poison / venin ou rituel des ombres" },
  { symbol: "🔱 Trident", meaning: "Eau / portail ou point de contrôle" },
  { symbol: "☄️ Comète", meaning: "Séquence chronométrée ou tir chargé" }
];

class ChecklistApp {
  constructor() {
    this.STORAGE_KEY = "bo4_zombies_checklist_v2";
    this.state = this.loadState();
    this.currentMap = null;
    this.init();
  }

  loadState() {
    try {
      let raw = localStorage.getItem(this.STORAGE_KEY);
      // Compat: fallback to previous key if present
      if (!raw) raw = localStorage.getItem("bo4_zombies_checklist_v1");
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      console.error("Erreur lecture localStorage:", e);
      return {};
    }
  }

  saveState() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.error("Erreur écriture localStorage:", e);
    }
  }

  getMapState(mapName) {
    if (!this.state[mapName]) {
      this.state[mapName] = { tasks: {}, collapsedSections: {} };
    }
    return this.state[mapName];
  }

  ensureJournalDefaults(mapState, mapConfig) {
    const fallback = mapConfig.symbolsLegend || DEFAULT_SYMBOLS;
    if (!mapState.symbolJournal) {
      mapState.symbolJournal = { notes: "", cheatsheet: [...fallback] };
    }

    if (!Array.isArray(mapState.symbolJournal.cheatsheet) || !mapState.symbolJournal.cheatsheet.length) {
      mapState.symbolJournal.cheatsheet = [...fallback];
    }

    if (typeof mapState.symbolJournal.notes !== "string") {
      mapState.symbolJournal.notes = "";
    }
  }

  init() {
    this.setupEventListeners();
    this.populateMapSelect();
    this.loadLastMap();
    this.render();
  }

  setupEventListeners() {
    document.getElementById("mapSelect").addEventListener("change", (e) => {
      this.currentMap = e.target.value;
      this.state._lastMap = this.currentMap;
      this.saveState();
      this.render();
    });

    document.getElementById("resetMapBtn").addEventListener("click", () => {
      if (confirm("Réinitialiser la checklist de cette map ?")) {
        delete this.state[this.currentMap];
        this.saveState();
        this.render();
      }
    });

    document.getElementById("resetAllBtn").addEventListener("click", () => {
      if (confirm("Réinitialiser TOUTES les maps et données ?")) {
        this.state = { _lastMap: this.state._lastMap };
        this.saveState();
        this.render();
      }
    });

    const exportBtn = document.getElementById("exportBtn");
    const importBtn = document.getElementById("importBtn");
    const importFile = document.getElementById("importFile");
    if (exportBtn) exportBtn.addEventListener("click", () => this.exportData());
    if (importBtn) importBtn.addEventListener("click", () => importFile && importFile.click());
    if (importFile) importFile.addEventListener("change", (e) => this.importData(e));
  }

  populateMapSelect() {
    const select = document.getElementById("mapSelect");
    select.innerHTML = "";
    Object.keys(MAPS).forEach((mapName) => {
      const option = document.createElement("option");
      option.value = mapName;
      option.textContent = mapName;
      select.appendChild(option);
    });
  }

  loadLastMap() {
    const lastMap = this.state._lastMap;
    if (lastMap && MAPS[lastMap]) {
      document.getElementById("mapSelect").value = lastMap;
      this.currentMap = lastMap;
    } else {
      this.currentMap = Object.keys(MAPS)[0];
    }
  }

  render() {
    if (!this.currentMap || !MAPS[this.currentMap]) return;

    const mapConfig = MAPS[this.currentMap];
    const mapState = this.getMapState(this.currentMap);
    this.ensureJournalDefaults(mapState, mapConfig);
    const { done, total, percent } = this.computeMapProgress(mapState, mapConfig);

    document.getElementById("currentMapTitle").innerHTML = `
      <div class="map-header">
        <div>
          <h2>${this.currentMap}</h2>
          <p class="map-description">${mapConfig.description || ""}</p>
        </div>
        <div class="map-progress" aria-label="Progression globale de la map">
          <div class="progress-label">
            <span>Progression</span>
            <strong>${done}/${total}</strong>
          </div>
          <div class="progress-bar" role="progressbar" aria-valuenow="${percent}" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-fill" style="width:${percent}%"></div>
          </div>
          <div class="progress-percent">${percent}% complété</div>
        </div>
      </div>
    `;

    const toolsContainer = document.getElementById("mapTools");
    toolsContainer.innerHTML = "";
    toolsContainer.appendChild(this.createSymbolCard(mapState));

    const container = document.getElementById("sectionsContainer");
    container.innerHTML = "";

    for (const [sectionName, tasks] of Object.entries(mapConfig.sections)) {
      const card = this.createSectionCard(sectionName, tasks, mapState);
      container.appendChild(card);
    }
  }

  computeMapProgress(mapState, mapConfig) {
    let done = 0;
    let total = 0;

    for (const [sectionName, tasks] of Object.entries(mapConfig.sections)) {
      tasks.forEach((_, index) => {
        const taskId = `${this.currentMap}::${sectionName}::${index}`;
        if (mapState.tasks[taskId]) done++;
        total++;
      });
    }

    const percent = total ? Math.round((done / total) * 100) : 0;
    return { done, total, percent };
  }

  createSectionCard(sectionName, tasks, mapState) {
    const card = document.createElement("div");
    card.className = "section-card";

    const header = document.createElement("div");
    header.className = "section-header";

    const titleEl = document.createElement("button");
    titleEl.className = "section-title-btn";
    titleEl.innerHTML = `
      <span class="section-icon"></span>
      <span class="section-name">${sectionName}</span>
    `;
    titleEl.setAttribute("aria-label", `Afficher ou masquer la section ${sectionName}`);

    const iconEl = titleEl.querySelector(".section-icon");
    iconEl.textContent = "▼";

    const progressEl = document.createElement("div");
    progressEl.className = "section-progress";

    header.appendChild(titleEl);
    header.appendChild(progressEl);
    card.appendChild(header);

    const content = document.createElement("div");
    content.className = "section-content";

    const isCollapsed = mapState.collapsedSections[sectionName];

    let doneCount = 0;
    tasks.forEach((taskLabel, index) => {
      const taskId = `${this.currentMap}::${sectionName}::${index}`;

      const taskDiv = document.createElement("div");
      taskDiv.className = "task";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = taskId;
      checkbox.checked = !!mapState.tasks[taskId];

      if (checkbox.checked) doneCount++;

      const label = document.createElement("label");
      label.setAttribute("for", taskId);
      label.className = "task-label";
      label.textContent = taskLabel;

      checkbox.addEventListener("change", () => {
        this.toggleTask(taskId, checkbox.checked);
      });

      taskDiv.appendChild(checkbox);
      taskDiv.appendChild(label);
      content.appendChild(taskDiv);
    });

    const percent = tasks.length ? Math.round((doneCount / tasks.length) * 100) : 0;

    const sectionMeta = document.createElement("div");
    sectionMeta.className = "section-meta";
    sectionMeta.innerHTML = `
      <span class="section-counter" aria-label="${doneCount} tâches complétées sur ${tasks.length}">${doneCount}/${tasks.length}</span>
      <span class="section-percent">${percent}%</span>
    `;

    const progressBar = document.createElement("div");
    progressBar.className = "section-progress-bar";
    progressBar.innerHTML = `<span style="width:${percent}%"></span>`;

    progressEl.appendChild(sectionMeta);
    progressEl.appendChild(progressBar);

    const completeBtn = document.createElement("button");
    completeBtn.className = "complete-section-btn";
    const allCompleted = doneCount === tasks.length && tasks.length > 0;
    completeBtn.textContent = allCompleted ? " Section terminée!" : "Marquer comme fait";
    if (allCompleted) completeBtn.classList.add("completed");

    completeBtn.addEventListener("click", () => {
      this.toggleSectionComplete(sectionName, tasks);
    });

    content.appendChild(completeBtn);

    if (isCollapsed) {
      content.style.display = "none";
      titleEl.querySelector(".section-icon").textContent = "▶";
      titleEl.setAttribute("aria-expanded", "false");
    }

    if (!isCollapsed) {
      titleEl.querySelector(".section-icon").textContent = "▼";
      titleEl.setAttribute("aria-expanded", "true");
    }

    titleEl.addEventListener("click", () => {
      this.toggleSectionCollapse(sectionName);
    });

    card.appendChild(content);

    return card;
  }

  createSymbolCard(mapState) {
    const journal = mapState.symbolJournal;
    const card = document.createElement("div");
    card.className = "tools-card";

    const header = document.createElement("div");
    header.className = "tools-header";
    header.innerHTML = `
      <div>
        <p class="tools-eyebrow">Notes rapides</p>
        <h3>Carnet des symboles & codes</h3>
        <p class="tools-subtitle">Note le symbole observé ou ajoute une référence rapide pour t'y retrouver pendant l'EE.</p>
      </div>
    `;

    const notebook = document.createElement("div");
    notebook.className = "symbol-notebook";
    const noteLabel = document.createElement("label");
    noteLabel.textContent = "Symbole ou code observé";
    noteLabel.setAttribute("for", "symbolNotes" + this.currentMap);

    const textarea = document.createElement("textarea");
    textarea.id = "symbolNotes" + this.currentMap;
    textarea.placeholder = "Ex : cercle – flèche – loup (ordre à retenir)";
    textarea.value = journal.notes;
    textarea.addEventListener("input", () => {
      journal.notes = textarea.value;
      this.saveState();
    });

    notebook.appendChild(noteLabel);
    notebook.appendChild(textarea);

    const cheatsheet = document.createElement("div");
    cheatsheet.className = "symbol-cheatsheet";
    const legendTitle = document.createElement("div");
    legendTitle.className = "cheatsheet-title";
    legendTitle.textContent = "Cheatsheet des symboles";
    cheatsheet.appendChild(legendTitle);

    const list = document.createElement("ul");
    list.className = "cheatsheet-list";
    journal.cheatsheet.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="cheatsheet-symbol">${item.symbol}</span>
        <span class="cheatsheet-meaning">${item.meaning}</span>
        <button class="cheatsheet-remove" aria-label="Supprimer ce symbole">✕</button>
      `;

      li.querySelector(".cheatsheet-remove").addEventListener("click", () => {
        journal.cheatsheet.splice(index, 1);
        this.saveState();
        this.render();
      });

      list.appendChild(li);
    });
    cheatsheet.appendChild(list);

    const addForm = document.createElement("form");
    addForm.className = "cheatsheet-add";
    addForm.innerHTML = `
      <input type="text" name="symbol" placeholder="Symbole (ex : ⚡, Feuille)" aria-label="Symbole" required />
      <input type="text" name="meaning" placeholder="Signification" aria-label="Signification du symbole" required />
      <button type="submit">Ajouter</button>
    `;

    addForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const symbol = addForm.symbol.value.trim();
      const meaning = addForm.meaning.value.trim();
      if (!symbol || !meaning) return;
      journal.cheatsheet.push({ symbol, meaning });
      addForm.reset();
      this.saveState();
      this.render();
    });

    cheatsheet.appendChild(addForm);

    card.appendChild(header);
    card.appendChild(notebook);
    card.appendChild(cheatsheet);

    return card;
  }

  toggleTask(taskId, isChecked) {
    const mapState = this.getMapState(this.currentMap);
    if (isChecked) {
      mapState.tasks[taskId] = true;
    } else {
      delete mapState.tasks[taskId];
    }
    this.saveState();
    this.render();
  }

  toggleSectionCollapse(sectionName) {
    const mapState = this.getMapState(this.currentMap);
    mapState.collapsedSections[sectionName] = !mapState.collapsedSections[sectionName];
    this.saveState();
    this.render();
  }

  toggleSectionComplete(sectionName, tasks) {
    const mapState = this.getMapState(this.currentMap);
    const allCompleted = tasks.every((_, index) => {
      const taskId = `${this.currentMap}::${sectionName}::${index}`;
      return !!mapState.tasks[taskId];
    });

    if (!allCompleted) {
      tasks.forEach((_, index) => {
        const taskId = `${this.currentMap}::${sectionName}::${index}`;
        mapState.tasks[taskId] = true;
      });
    } else {
      tasks.forEach((_, index) => {
        const taskId = `${this.currentMap}::${sectionName}::${index}`;
        delete mapState.tasks[taskId];
      });
    }
    this.saveState();
    this.render();
  }

  exportData() {
    const dataStr = JSON.stringify(this.state, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `bo4-checklist-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    alert(" Données exportées!");
  }

  importData(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result || "{}");
        this.state = { ...this.state, ...imported };
        this.saveState();
        alert(" Données importées avec succès!");
        this.render();
      } catch (err) {
        alert(" Erreur : fichier JSON invalide");
        console.error(err);
      }
    };
    reader.readAsText(file);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.app = new ChecklistApp();
});
