# MadebyMEE - Gefixter src Ordner

## Anleitung (3 Schritte):

### 1. Alten src-Ordner sichern
```bash
mv src src-backup
```

### 2. Diesen src-Ordner reinkopieren
Entpacke/kopiere diesen `src` Ordner in dein Projekt-Root.

### 3. CSS-Dateien kopieren (sind unverändert)
Diese 2 CSS-Dateien sind Platzhalter und müssen aus deinem Backup kopiert werden:
```bash
cp src-backup/app/styles/globals.css src/app/styles/globals.css
cp src-backup/app/styles/responsiveness.css src/app/styles/responsiveness.css
```

### 4. Pushen
```bash
git add .
git commit -m "fix: resolve 404 - remove /index route conflict"
git push
```

## Was wurde gefixt:
| Problem | Fix |
|---------|-----|
| 404 auf / | `/index`-Ordner → `/sections` umbenannt |
| GSAP ScrollSmoother (Club-Plugin fehlt) | Komplett entfernt |
| `alert()` in API Route | Durch `console.error()` ersetzt |
| Doppelte Client-Logo-Pfade | Korrigiert |
| Import-Pfade in Sections | Von `../../` auf `../` gefixt |

## Ordnerstruktur:
```
src/app/
├── page.js              ← NEU (ersetzt index/page.js)
├── layout.js            ← GEFIXT (ohne GSAP)
├── globals.css
├── page.module.css
├── api/sendmail/route.js ← GEFIXT (ohne alert)
├── components/          ← Shared components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── ClientsSection.jsx ← GEFIXT (Logo-Pfade)
│   ├── ProblemSection.jsx
│   ├── SolutionSection.jsx
│   ├── VideoModal.jsx
│   └── useScrollAnimation.jsx
├── sections/            ← NEU (war: index/components/)
│   ├── mainSection.js
│   ├── contentSection.js
│   ├── kontakt.js
│   ├── macher.js
│   ├── referenzen.js
│   ├── socialsMadebymee.js
│   ├── team.js
│   ├── FaqSection.jsx
│   └── SocialProofSection.jsx
├── styles/
│   ├── globals.css      ← AUS BACKUP KOPIEREN
│   ├── button.css
│   └── responsiveness.css ← AUS BACKUP KOPIEREN
└── team/
    ├── page.jsx
    ├── PageHeader.jsx
    ├── EmployeeCard.jsx
    ├── EmployeeGrid.jsx
    ├── FounderSection.jsx
    └── FounderTextBlock.jsx
```

**WICHTIG:** Der Ordner `src/app/index/` und `src/app/components/GSAPSmoothProvider.jsx` 
existieren NICHT mehr - das ist gewollt!
