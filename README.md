# Futures Consciousness Scale

A static web app that lets a person self-assess their **Futures Consciousness** across five dimensions and visualises the result as a five-pointed star.

Based on the revised scale by Lalot, Ahvenharju & Minkkinen (2021). Educational implementation — not a validated psychometric instrument.

## Run it

No build step, no server. Open `index.html` in a browser:

```sh
xdg-open index.html      # Linux
open index.html          # macOS
start index.html         # Windows
```

## Dimensions

1. **Time Perspective** — long-term orientation
2. **Agency Beliefs** — belief that one can shape the future
3. **Openness to Alternatives** — willingness to question and consider
4. **Systems Perception** — seeing interconnections
5. **Concern for Others** — care for others and future generations

Each dimension has 4 Likert items (1–5). One item per dimension is reverse-coded; the app handles scoring automatically.

## Features

- 20-item questionnaire grouped by dimension
- Per-dimension progress strip (5 segments)
- Star chart with glow effect, exportable as a standalone SVG
- English / Norwegian language toggle
- Keyboard support — number keys `1`–`5` plus arrow keys
- Active-question highlight via `:focus-within`
- Answers persist in `localStorage` so you can return later
- Cosmic dark theme with starfield background

## Privacy

All data stays in your browser. Nothing is uploaded; there is no tracking or analytics. Choosing **Reset** or **Retake** clears your saved answers.

## Stack

Plain HTML, CSS, and JavaScript. No framework, no dependencies, no backend. Fonts loaded from Google Fonts (Inter + Space Grotesk).

## Files

- `index.html` — markup
- `styles.css` — styling
- `app.js` — questionnaire logic, scoring, star chart, i18n

## Deployment

Pushing to `main` deploys to a Hetzner Webhosting account via the GitHub Action in `.github/workflows/deploy.yml`. The action syncs files over SSH with rsync.

**One-time setup:**

1. Generate an SSH keypair locally:

   ```sh
   ssh-keygen -t ed25519 -f deploy-key -C "github-actions"
   ```

2. In **konsoleH** (Hetzner's admin panel) → *WWW* / *SSH* — add the contents of `deploy-key.pub` to the account's authorised keys.

3. In your GitHub repo → *Settings* → *Secrets and variables* → *Actions*, add:

   | Secret | Value |
   |---|---|
   | `SSH_HOST` | e.g. `wwwXX.your-server.de` (from konsoleH) |
   | `SSH_USER` | your Hetzner Webhosting username |
   | `SSH_PORT` | `22` (or as configured) |
   | `SSH_PRIVATE_KEY` | contents of the private key file `deploy-key` |
   | `REMOTE_PATH` | usually `/public_html/` or `~/public_html/` |

4. Push to `main` (or run the workflow manually from the **Actions** tab).

The deploy uses `rsync --delete`, so anything in `REMOTE_PATH` that isn't in the repo will be removed. Adjust the `EXCLUDE` list in `deploy.yml` if you want to keep server-side files (e.g. `.htaccess`).

## Reference

Lalot, F., Ahvenharju, S., & Minkkinen, M. (2021). *Aware of the future? Development and validation of the Futures Consciousness Scale.*
