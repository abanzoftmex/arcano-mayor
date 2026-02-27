# React Home (shadcn/ui + Tailwind)

Este frontend renderiza la portada de WordPress cuando existe el build en `frontend-app/dist`.

## Comandos

```bash
cd frontend-app
npm install
npm run build
```

## Flujo WordPress

- `front-page.php` monta `<div id="arcano-frontend-app"></div>` si detecta assets compilados.
- `functions.php` carga:
  - `frontend-app/dist/assets/home.css`
  - `frontend-app/dist/assets/home.js` (como `type="module"`)
- Si no existe build, usa fallback: `template-parts/home-content.php`.

## Desarrollo local

```bash
cd frontend-app
npm run dev
```
