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

    document.getElementById("currentMapTitle").innerHTML = `
      <div class="map-header">
        <h2>${this.currentMap}</h2>
        <p class="map-description">${mapConfig.description || ""}</p>
      </div>
    `;

    const container = document.getElementById("sectionsContainer");
    container.innerHTML = "";

    for (const [sectionName, tasks] of Object.entries(mapConfig.sections)) {
      const card = this.createSectionCard(sectionName, tasks, mapState);
      container.appendChild(card);
    }
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
      titleEl.querySelector(".section-icon").textContent = "";
    }

    titleEl.addEventListener("click", () => {
      this.toggleSectionCollapse(sectionName);
    });

    card.appendChild(content);

    progressEl.textContent = `${doneCount}/${tasks.length}`;

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
