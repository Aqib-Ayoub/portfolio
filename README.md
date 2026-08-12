# Portfolio

A simple single-page portfolio built with React + Vite.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

Static output goes to `dist/`.

## Jenkins

A starter `Jenkinsfile` is included (checkout → `npm ci` → `npm run build` →
archive `dist/`). It expects a NodeJS tool named `node20` configured under
**Manage Jenkins > Tools**; rename it to match whatever you set up, or swap
the `tools` block for a Docker agent (e.g. `node:20-alpine`) if you'd rather
not install Node on the Jenkins agent itself.

To wire it up:
1. Push this repo to GitHub.
2. In Jenkins, create a Pipeline job (or Multibranch Pipeline) pointing at
   the repo, with "Script Path" set to `Jenkinsfile`.
3. Run a build and confirm `dist/` shows up under build artifacts.

## Before publishing

Update the placeholder email, GitHub and LinkedIn links in
`src/App.jsx` (footer section).
