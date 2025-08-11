To use TailwindCSS in this project please use the standalone Tailwind CSS CLI.

Build (one-off):

```powershell
./tailwindcss.exe -i ./css/input.css -o ./css/output.css
```

Develop (watch mode):

```powershell
./tailwindcss.exe -i ./css/input.css -o ./css/output.css --watch
```

Open `index.html` in your browser after generating `css/output.css`.

Dashboard Features Implemented:
1. Responsive sidebar (toggle on mobile)
2. KPI cards with gradient primary card
3. Project analytics pseudo bar chart
4. Reminders section
5. Project list with colored status dots
6. Team collaboration member list with status chips
7. Circular project progress meter (SVG)
8. Time tracker (start / pause / reset)

Colors are defined under `brand` scale in `tailwind.config.js`.
