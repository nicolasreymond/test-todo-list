# Zombies BO4 – Checklist d’objectifs

Petit projet statique pour suivre tes objectifs / Easter Eggs sur les maps Zombies de Call of Duty Black Ops 4.

## Fonctionnalités

- Sélection d’une map dans une liste.
- Objectifs organisés par sections (Main EE, Setup, Défis, etc.).
- Cases à cocher pour suivre ta progression pendant la partie.
- Sauvegarde automatique des cases cochées dans `localStorage` (pas de serveur nécessaire).
- Boutons pour :
  - Reset uniquement la map courante.
  - Reset toutes les maps.

## Utilisation

1. Télécharge le dossier complet sur ton PC.
2. Ouvre simplement `index.html` dans ton navigateur (double-clic).
3. Choisis une map et coche les objectifs au fur et à mesure.

Tu peux aussi héberger ce dossier tel quel sur :
- GitHub Pages
- Netlify
- n’importe quel hébergement statique (nginx, Apache, etc.)

## Modifier les objectifs / maps

Tout se passe dans `js/maps.js`.

Exemple simplifié :

```js
const MAPS = {
  "IX": {
    sections: {
      "Main EE": [
        "Activer le Pack-a-Punch",
        "Chaudron – étape 1",
        "Chaudron – étape 2",
        "Boss final"
      ],
      "Setup": [
        "Arme spéciale niveau 3",
        "Bouclier construit",
        "Perks essentiels achetés"
      ]
    }
  }
};
```

- Pour ajouter une map, ajoute une nouvelle entrée dans `MAPS`.
- Pour ajouter/modifier des objectifs, modifie les tableaux de chaînes de caractères.

## Idées d’améliorations possibles

- Ajouter toutes les étapes détaillées des EE de chaque map.
- Ajouter un mode « nuit » encore plus contrasté.
- Ajouter un export/import JSON de ta progression.
- Faire une version PWA pour l’installer sur ton téléphone.
