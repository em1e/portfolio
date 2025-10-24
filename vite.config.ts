import { defineConfig } from 'vite'

// When deploying to GitHub Pages for a repo named `portfolio`, set base to
// '/portfolio/'. This ensures built assets use the correct path when served
// from https://<username>.github.io/portfolio/
export default defineConfig({
  base: '/portfolio/'
})
