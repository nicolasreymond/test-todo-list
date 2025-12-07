/**
 * Configuration complète des 8 maps BO4 Zombies avec tous les objectifs
 * Structure : chaque map contient des sections claires d'objectifs
 */
const MAPS = {
  "IX": {
    description: "Un arène romaine antique",
    sections: {
      "🎯 Easter Egg Principal": [
        "Activer le Pack-a-Punch",
        "Trouver les 3 œufs du Chaudron",
        "Chaudron – Étape 1 (Champion)",
        "Chaudron – Étape 2 (Anciens)",
        "Chaudron – Étape 3 (Roi)",
        "Réciter l'incantation 4 fois",
        "Obtenir la clé du Warden",
        "Combattre le Warden (Boss final)"
      ],
      "⚙️ Setup Essentiel": [
        "Pack-a-Punch activé",
        "Arme spéciale niveau 3 obtenue",
        "Bouclier construit",
        "Tous les perks achetés",
        "Mystères obtenus (3+)",
        "Arme boîte idéale trouvée"
      ],
      "🏆 Défis Secondaires": [
        "Les 4 drapeaux trouvés",
        "Tous les graffitis déverrouillés",
        "Mystère d'épée obtenu",
        "Tête de diable destruite",
        "Toutes les statues activées"
      ],
      "🔓 Déverrouillages": [
        "Zone Jungle déverrouillée",
        "Zone Enfer déverrouillée",
        "Zone Essence déverrouillée",
        "Passage sous-terrain ouvert"
      ]
    }
  },
  "Voyage of Despair": {
    description: "Un navire en détresse rempli de zombies",
    sections: {
      "🎯 Easter Egg Principal": [
        "Activer le Pack-a-Punch",
        "Trouver le journal du Capitaine (étape 1)",
        "Dégâts au moteur (étape 2)",
        "Reconstruire le missile (étape 3)",
        "Réciter l'incantation 3 fois",
        "Sauver Diego Halbert",
        "Combattre Seraph (Boss final)"
      ],
      "⚙️ Setup Essentiel": [
        "Pack-a-Punch activé",
        "Arme spéciale niveau 3 obtenue",
        "Bouclier construit",
        "Tous les perks achetés",
        "Arme mythique déverrouillée",
        "Plateforme de saut activée"
      ],
      "🏆 Défis Secondaires": [
        "Les 3 caméras détruites",
        "Tous les cris trouvés et écoutés",
        "Téléporteur activé",
        "Zone vip déverrouillée",
        "Cristal d'essence obtenu"
      ],
      "🔓 Déverrouillages": [
        "Cuisine déverrouillée",
        "Pont des icebergs ouvert",
        "Galerie déverrouillée",
        "Aquarium accessible"
      ]
    }
  },
  "sang des morts": {
    description: "La prison d'Alcatraz réanimée",
    sections: {
      "🎯 Easter Egg Principal": [
        "Activer le Pack-a-Punch",
        "Obtenir les 3 clés du Warden",
        "Combattre dans l'arène 1",
        "Combattre dans l'arène 2",
        "Combattre dans l'arène 3",
        "Médaillon de Brutus obtenu",
        "Tomahawk amélioré en arme ultime",
        "Combattre le Warden/Brutus (Boss final)"
      ],
      "⚙️ Setup Essentiel": [
        "Pack-a-Punch activé",
        "Arme spéciale niveau 3 obtenue",
        "Bouclier construit (bloc de ciment)",
        "Tous les perks achetés",
        "Arme ultime (Tomahawk) obtenue",
        "Électricité alimentée"
      ],
      "🏆 Défis Secondaires": [
        "Tomahawk de base trouvé",
        "Tomahawk amélioré (niveau 2)",
        "Tous les graffitis trouvés",
        "Générateur d'électricité réparé",
        "Les 4 cadenas cassés"
      ],
      "🔓 Déverrouillages": [
        "Infirmerie déverrouillée",
        "Cellules déverrouillées",
        "Bibliothèque accessible",
        "Cellier du Warden ouvert",
        "Tunnels souterrains accessibles"
      ]
    }
  },
  "Top Secret": {
    description: "Une base militaire souterraine classifiée",
    sections: {
      "🎯 Easter Egg Principal": [
        "Activer le Pack-a-Punch",
        "Étape 1 : Activer tous les générateurs",
        "Étape 2 : Obtenir les cristaux",
        "Étape 3 : Alimenter la machine",
        "Réciter l'incantation",
        "Combat d'arène 1",
        "Combat d'arène 2",
        "Combattre l'Ombre (Boss final)"
      ],
      "⚙️ Setup Essentiel": [
        "Pack-a-Punch activé",
        "Arme spéciale niveau 3 obtenue",
        "Bouclier construit",
        "Tous les perks achetés",
        "Arme d'énergie obtenue",
        "Épée de plasma déverrouillée"
      ],
      "🏆 Défis Secondaires": [
        "Les 3 panneaux d'expérience trouvés",
        "L'épée de plasma obtenue",
        "Les 6 œufs trouvés et écoutés",
        "Tous les téléporteurs activés",
        "L'arme nucléaire testée avec succès"
      ],
      "🔓 Déverrouillages": [
        "Chambre de contrôle déverrouillée",
        "Laboratoire accessible",
        "Zone de défense d'élite ouverte",
        "Tunnel de fuite trouvé"
      ]
    }
  },
  "Mal ancien": {
    description: "Un temple grec hanté par le pouvoir des anciens",
    sections: {
      "🎯 Easter Egg Principal": [
        "Activer le Pack-a-Punch",
        "Récupérer les 4 reliques anciennes",
        "Obtenir la pierre du temple",
        "Placer les pierres dans les autels",
        "Combats rituels (3 étapes)",
        "L'Homme Gris invoqué",
        "Réciter l'incantation ultime",
        "Combattre l'Homme Gris (Boss final)"
      ],
      "⚙️ Setup Essentiel": [
        "Pack-a-Punch activé",
        "Arme spéciale niveau 3 obtenue",
        "Bouclier construit",
        "Tous les perks achetés",
        "Arc amélioré en arme mythique",
        "Essence collectée (3+)"
      ],
      "🏆 Défis Secondaires": [
        "Arc mythique obtenu",
        "Tous les symboles trouvés",
        "Les 4 portes des gardiens ouvertes",
        "Les 3 cristaux d'essence trouvés",
        "L'arène de combat accessible"
      ],
      "🔓 Déverrouillages": [
        "Temple principal déverrouillé",
        "Souterrains grecs accessibles",
        "Chambre des rituels ouverte",
        "Passage secret découvert"
      ]
    }
  },
  "Alpha Omega": {
    description: "Une base nucléaire à Nuketown",
    sections: {
      "🎯 Easter Egg Principal": [
        "Activer le Pack-a-Punch",
        "Étape 1 : Objectifs radiologiques",
        "Étape 2 : Circuits énergétiques",
        "Étape 3 : Code d'accès",
        "Étape 4 : Réacteur nucléaire",
        "Machine temporelle activée",
        "Combat temporel",
        "Combattre Dr. Karlov (Boss final)"
      ],
      "⚙️ Setup Essentiel": [
        "Pack-a-Punch activé",
        "Arme spéciale niveau 3 obtenue",
        "Bouclier construit",
        "Tous les perks achetés",
        "Pistolet à rayons obtenu",
        "Batterie énergétique complète"
      ],
      "🏆 Défis Secondaires": [
        "Les 4 canons activés",
        "Document caché trouvé",
        "Le tunnel atomique exploré",
        "Tous les symboles scientifiques trouvés",
        "L'expérience DEFCON réussie"
      ],
      "🔓 Déverrouillages": [
        "Zone de décontamination ouverte",
        "Centre de commandement accessible",
        "Laboratoire souterrain ouvert",
        "Silo de lancement accessible"
      ]
    }
  },
  "Firebase Z": {
    description: "Une base militaire envahie en Asie du Sud-Est",
    sections: {
      "🎯 Easter Egg Principal": [
        "Activer le Pack-a-Punch",
        "Étape 1 : Serveurs récupérés",
        "Étape 2 : Cristaux énergétiques",
        "Étape 3 : Rune Aeterna",
        "Télégraphier l'incantation",
        "Combat aérien avec hélicoptère",
        "Zone d'attaque déverrouillée",
        "Combattre l'Ennemi (Boss final)"
      ],
      "⚙️ Setup Essentiel": [
        "Pack-a-Punch activé",
        "Arme spéciale niveau 3 obtenue",
        "Bouclier construit",
        "Tous les perks achetés",
        "Plan d'arme spéciale trouvé",
        "Essence collectée (5+)"
      ],
      "🏆 Défis Secondaires": [
        "Les 4 fréquences radio trouvées",
        "Tous les drapeaux plantés",
        "Mission d'hélicoptère réussie",
        "Chambre souterraine découverte",
        "Tous les cadavres documentés"
      ],
      "🔓 Déverrouillages": [
        "Zone d'armement ouverte",
        "Centre de communication accessible",
        "Tunnels souterrains explorés",
        "Plate-forme d'extraction découverte"
      ]
    }
  },
  "Tag der Toten": {
    description: "Le mur de Berlin post-apocalyptique",
    sections: {
      "🎯 Easter Egg Principal": [
        "Activer le Pack-a-Punch",
        "Étape 1 : Émettre les signaux",
        "Étape 2 : Implant cérébral",
        "Étape 3 : Convertisseur d'énergie",
        "Tous les symboles collectés",
        "L'énergie du mur concentrée",
        "Combat technologique",
        "Combattre Valentina (Boss final)"
      ],
      "⚙️ Setup Essentiel": [
        "Pack-a-Punch activé",
        "Arme spéciale niveau 3 obtenue",
        "Bouclier construit",
        "Tous les perks achetés",
        "Implant cérébral trouvé",
        "L'essence d'énergie obtenue"
      ],
      "🏆 Défis Secondaires": [
        "Les 5 documents historiques trouvés",
        "Message radio décodé",
        "Toutes les zones explorées",
        "L'atelier d'armes amélioré",
        "Le passage secret découvert"
      ],
      "🔓 Déverrouillages": [
        "Avant-poste de l'Est accessible",
        "Avant-poste de l'Ouest ouvert",
        "Zone industrielle déverrouillée",
        "Souterrains du mur explorés"
      ]
    }
  },
  "Nuit des morts": {
    description: "Un manoir hanté avec cimetière, serre et forêt mystique",
    sections: {
      "EE Nuit – 0. Prérequis / Setup": [
        "Ouvrir les accès principaux du manoir, cimetière, serre, forêt, etc.",
        "Activer le Sacré Punch (Sentinel Artifact + cristaux).",
        "Construire le bouclier balistique et savoir où le reconstruire.",
        "Obtenir les balles en argent (silver bullets) et les équiper sur une arme fiable.",
        "Obtenir la Folie d'Alistair (Alistair's Folly) puis la faire évoluer en Chaos Theory, puis en Annihilator.",
        "Avoir au moins une arme PaP puissante (Helio Salvo recommandé).",
        "Avoir suffisamment de perks + Homonculus pour la phase finale.",
        "Connaître globalement la disposition des pièces (Library, Greenhouse, Mausoleum, Forest, etc.)."
      ],
      "EE Nuit – 1. Sacré Punch (rappel rapide)": [
        "Activer le Sentinel Artifact au centre du Hall.",
        "Repérer les 3 cristaux/stenen de vision à travers le manoir.",
        "Interagir avec chaque pierre pour déclencher la mini-séquence de vision.",
        "Compléter les actions associées (souvent déjà fait en route vers PaP).",
        "Arriver à la zone Pack-a-Punch et l'activer (prérequis validé)."
      ],
      "EE Nuit – 2. Bouclier balistique": [
        "Chercher la première pièce sur un balcon (East/West) ou près de la Grand Staircase.",
        "Chercher la deuxième pièce dans Study/Library (sur un bureau, une étagère, un canapé).",
        "Chercher la troisième pièce dans East Hallway / Dining Room (chaise, pilier, étagère).",
        "Aller à la Smoking Room (atelier de craft) pour assembler le bouclier balistique.",
        "Équiper le bouclier et retenir son usage (tir spécial, corps-à-corps, protection)."
      ],
      "EE Nuit – 3. Balles en argent (Silver Bullets)": [
        "Réunir les ingrédients nécessaires (métal, poudre, objet alchimique) selon les emplacements de la map.",
        "Utiliser l'établi / machine spécifique pour fabriquer les balles en argent.",
        "Équiper les silver bullets sur une arme adaptée (fusil, AR, etc.).",
        "Tester les balles en argent sur un loup-garou pour confirmer le bon fonctionnement."
      ],
      "EE Nuit – 4. Folie d'Alistair → Chaos Theory → Annihilator": [
        "Récupérer la Folie d'Alistair (arme spéciale de base) via le puzzle initial (livres, coffre, etc.).",
        "Tuer un loup-garou avec des balles en argent pour obtenir une première pièce spéciale.",
        "Apporter cette pièce au laboratoire de la serre (Greenhouse Laboratory) et l'installer dans la machine.",
        "Trouver la bibliothèque avec la bibliothèque secrète (Library), frapper la bibliothèque avec le bouclier pour ouvrir la pièce cachée, récupérer une autre pièce.",
        "Retourner au laboratoire de la serre pour fabriquer Chaos Theory à l'établi.",
        "Utiliser Chaos Theory pour tuer des vampires avec des tirs chargés afin d'obtenir plusieurs fioles de bile de vampire (jaune).",
        "Avec de la bile, interagir avec la pierre tombale rouge spécifique au cimetière pour faire apparaître un vampire spécial (Nosferatu).",
        "Tuer ce vampire spécial pour récupérer un matériau de chaos supplémentaire.",
        "Trouver les lanternes rouges derrière la Mystery Box, les tirer dans le bon ordre avec Chaos Theory pour faire apparaître une chauve-souris, la tuer pour récupérer une pièce.",
        "Utiliser le tas de terre avec champignons bleus dans la forêt, tirer avec Chaos Theory pour faire creuser un zombie qui sortira un dernier composant.",
        "Apporter tous les matériaux au laboratoire de la serre, les passer dans la machine pour obtenir les Prima Materia.",
        "Utiliser la table proche pour fabriquer Alistair's Annihilator (forme finale de l'arme spéciale)."
      ],
      "EE Nuit – 5. Ligne du Chevalier (Knight Quest)": [
        "Revenir interagir avec un des trois cristaux de défi utilisés pour le PaP : obtenir la vision d'un casque de chevalier.",
        "Récupérer un Fire Gate Energy Core (noyau de piège feu) dans la map.",
        "Aller dans Entrance Hall et activer le piège de feu dans l'encadrement de porte avec ce noyau.",
        "Dépenser les points pour lancer le piège, puis tirer un coup chargé d'Annihilator dans les flammes pour les rendre bleues.",
        "Activer le bouclier balistique, courir à travers le feu bleu pour enflammer ton bouclier (bouclier enflammé bleu).",
        "Suivre un ordre précis de cheminées à enflammer au bouclier (coup de mêlée sur la cheminée) – première séquence : Smoking Room → Library (droite de la porte) → Library (gauche de la porte) → Billiards Room.",
        "Valider la première séquence de cheminées (un son/effet confirme).",
        "Refaire une ou plusieurs séquences supplémentaires de cheminées (autres pièces, ordre défini par symboles) tant que la quête le demande.",
        "Une fois toutes les séquences de cheminées complétées, obtenir un objet/fragment de quête lié au chevalier.",
        "Aller au cimetière, trouver 3 chevaliers statufiés (Main Hall, Greenhouse Terrace, Graveyard) et escorter les cristaux qu'ils génèrent jusqu'à la forêt, les poser sur les symboles au sol correspondants.",
        "Tuer des zombies près de chaque chevalier dans la zone du Pack-a-Punch pour les faire avancer.",
        "Une fois les chevaliers positionnés autour du triangle du PaP, attirer et tuer un loup-garou au centre pour charger la zone.",
        "Interagir à plusieurs sur la stèle qui apparaît pour lancer une phase de survie.",
        "Survivre à tous les ennemis jusqu'à la fin de la phase, puis ramasser la dalle de pierre (stone slab) liée à la quête du chevalier."
      ],
      "EE Nuit – 6. Ligne du Télescope (Telescope Quest)": [
        "Revenir à un cristal de défi, obtenir la vision du cercle/objet (lié au télescope).",
        "Tous les joueurs équipent une arme avec silver bullets.",
        "Se rendre devant le Mausoleum, viser la tige métallique au-dessus et tirer dessus simultanément avec les balles en argent pour faire apparaître un rayon lumineux vers Atlas.",
        "Aller sur le pont de l'Atrium nord (North Atrium Bridge) et utiliser le panneau avec trois roues pour aligner les anneaux au-dessus de la statue d'Atlas (aligner lumières verte, bleue, rouge, dans l'ordre).",
        "Lorsque les anneaux sont correctement alignés, la tête d'Atlas est détruite et le rayon se connecte au télescope dans la Greenhouse Laboratory.",
        "Chercher 3 symboles du zodiaque sur la map (Billiards Room, Entrance Hall, Trophy Room) et compter les marques de griffures associées dans chaque salle (0, 1, 2 ou 3 séries).",
        "Noter pour chaque symbole le nombre de griffures total (ce sera un code numérique).",
        "Retourner au télescope, interagir avec la machine et entrer le code en alignant les symboles dans l'ordre des valeurs de griffures (du plus faible au plus élevé).",
        "Une fois le code correct entré, maintenir l'interaction sur la grosse roue près du télescope jusqu'à ouverture partielle du toit.",
        "Frapper la roue avec le bouclier pour verrouiller le toit ouvert (indiqué par des lumières vertes).",
        "Activer le piège électrique sous le télescope, faire courir tous les joueurs à travers avec le bouclier équipé pour le charger en électricité.",
        "Monter et frapper en même temps l'oculaire du télescope avec le bouclier chargé pour tirer un rayon d'énergie dans le ciel.",
        "Une paroi s'ouvre à côté du piège, révélant une pierre de quête.",
        "Tous les joueurs interagissent avec la pierre jusqu'à ce qu'elle s'envole et déclenche un confinement.",
        "Survivre au confinement et aux vagues de zombies/vampires dans cette zone jusqu'à la fin de l'épreuve.",
        "Récupérer la dalle/objet lié à la quête du télescope."
      ],
      "EE Nuit – 7. Ligne de l'Effigie (Effigy Quest)": [
        "Revenir au troisième cristal de défi, obtenir la vision de l'effigie (tas de branches).",
        "Aller au cimetière et repérer les 5 arbres blancs dont des branches tombent parfois.",
        "Tirer sur la branche la plus basse de chaque arbre pour la faire tomber et ramasser chaque branche.",
        "Une fois les 5 branches collectées, chercher la tombe marquée « 1912 » dans le cimetière.",
        "Le joueur dont le nom est inscrit sur la tombe interagit pour entrer en mode esprit (spirit mode).",
        "Dans ce mode, localiser une femme fantôme cachée dans le manoir (derrière des vitres, machines à atout, etc.) et mémoriser son emplacement.",
        "Construire l'effigie avec les branches à l'endroit prévu dans la forêt.",
        "Avec l'Annihilator, tirer un tir de feu au sol devant l'effigie pour l'enflammer.",
        "Faire en sorte que le joueur en mode esprit interagisse avec l'effigie enflammée pour l'envoyer dans une sorte d'au-delà où il est invisible pour les autres, mais toujours attaqué.",
        "Dans cet état, retrouver de nouveau la femme fantôme dans le manoir et l'escorter jusqu'à l'effigie dans la forêt.",
        "Pendant l'escorte, protéger le fantôme des zombies et autres ennemis jusqu'à l'effigie.",
        "Une fois l'escorte terminée, la femme fantôme révèle une dalle de pierre près de l'effigie.",
        "Tous les joueurs interagissent sur la dalle, déclenchant une phase de survie.",
        "Survivre aux ennemis (vampires, loups-garous, zombies) autour de l'effigie jusqu'à la fin de l'épreuve.",
        "Récupérer la dalle/objet lié à la quête de l'effigie."
      ],
      "EE Nuit – 8. Boss final (loup-garou invisible)": [
        "Après avoir complété les 3 lignes de quêtes (Chevalier, Télescope, Effigie), rassembler les 3 dalles/objets obtenus.",
        "S'assurer d'avoir : bouclier neuf, silver bullets, Annihilator amélioré, Helio Salvo ou arme DPS, Homonculus, munitions max.",
        "Se rendre dans la forêt devant la grande porte de pierre et faire interagir tous les joueurs sur la porte pendant quelques secondes.",
        "Être téléporté dans l'arène du boss où réside un loup-garou invisible.",
        "Phase 1 : repérer la grande dalle au sol qui brille en vert, orienter les statues autour de l'arène pour que leurs rayons lumineux convergent vers la dalle (rayons deviennent verts).",
        "Attirer le loup-garou sur la dalle éclairée pour le rendre visible et vulnérable, lui infliger un maximum de dégâts.",
        "Répéter le cycle jusqu'à la fin de la phase (ramasser les munitions max et charpentiers entre les phases si nécessaire).",
        "Phase 2 : variantes d'attaques, même principe de vulnérabilité, gérer plus d'ennemis.",
        "Phase 3 : identique à la phase 1, sauf que la dalle verte est invisible au début – orienter les statues jusqu'à trouver la bonne zone (rayons deviennent verts).",
        "Attirer le boss sur la zone active, infliger le plus de dégâts possible, répéter jusqu'à sa mort.",
        "Une fois le loup-garou vaincu, profiter de la fin de l'EE et de la cinématique associée.",
        "EE Nuit des morts officiellement complété."
      ]
    }
  }
};
