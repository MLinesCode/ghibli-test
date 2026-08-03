# Actualización de dependencias — Agosto 2026

Resumen de la actualización realizada para que el proyecto sea funcional en 2026, conservando el comportamiento y las pantallas existentes.

## Versiones

| Paquete | Antes | Ahora |
|---|---|---|
| react / react-dom | 18.2.0 | 19.2.8 |
| react-router-dom | 5.2.0 | 7.18.2 |
| axios | 0.27.2 | 1.19.0 |
| web-vitals | 2.1.4 | 6.0.1 |
| react-scripts | 5.0.1 | *(eliminado)* |
| vite | — | 7.3.6 |
| @vitejs/plugin-react | — | 5.2.0 |

`node_modules` pasó de ~1.400 paquetes a 96.

## Por qué se dejó Create React App

`react-scripts` no se actualizó desde 2022 y Create React App fue descontinuado oficialmente. Ya no hay una versión más nueva que instalar: era la razón principal por la que el proyecto no era viable para 2026. Se reemplazó por **Vite**, hoy el estándar de facto para SPAs de React, sin tocar ninguna pantalla ni componente visual.

Cambios de herramienta de build:
- `package.json`: nuevos scripts `dev` / `build` / `preview` (antes `start` / `build` / `test` / `eject`). El proyecto no tenía ningún archivo de test, así que no se perdió cobertura al quitar `react-scripts test`.
- `public/index.html` se movió a la raíz del proyecto (`index.html`) — así es como Vite localiza el punto de entrada. Las referencias `%PUBLIC_URL%/...` se reemplazaron por rutas absolutas (`/favicon.png`, etc.), ya que `public/` se sigue sirviendo desde la raíz.
- Se agregó `vite.config.js` con el plugin de React y el puerto de desarrollo fijado en 3000 para no cambiar la URL local habitual.
- **26 archivos `.js` que contenían JSX se renombraron a `.jsx`** (con `git mv`, conservando el historial) porque Vite/esbuild no interpreta JSX dentro de archivos `.js`. Los `hooks/`, `selectors/` y `data/Images.js` no se tocaron porque no usan JSX.
- `.gitignore`: `/build` → `/dist` (carpeta de salida de Vite).

## Breaking changes resueltos

**react-router-dom v5 → v7** fue el cambio de mayor superficie, necesario porque v5 no es compatible con React 19:
- `Switch` → `Routes`, `Route component={X}` → `Route element={<X />}` en `AppRouter.jsx` y `DashBoardRoutes.jsx`.
- `<Redirect to='/home' />` → `<Route path='*' element={<Navigate to='/home' replace />} />`.
- `LoginScreen.jsx` y `SingUpScreen.jsx` ya no reciben `history` por props (v7 no lo inyecta); se migraron a `useNavigate()` + `navigate('/', { replace: true })`.
- `NavLink` en `Header.jsx` y `Menu.jsx`: `activeClassName="active"` ya no existe, se reemplazó por `className={({ isActive }) => ...}`; `exact` se renombró a `end`.
- El enlace `to="./profile"` en `Header.jsx` era relativo al padre en v5; en v7 eso lo llevaría a `/home/profile`. Se cambió a `/profile`, el destino real que el enlace siempre tuvo.

**web-vitals v2 → v6**: la API cambió de `getCLS/getFID/getFCP/getLCP/getTTFB` a `onCLS/onINP/onFCP/onLCP/onTTFB` (se actualizó `reportWebVitals.js`; `FID` fue reemplazada por `INP` en la librería).

**axios 0.27 → 1.19**: sin cambios de código — el proyecto solo usa `axios.create` y `.get`, cuya firma no cambió.

**React 19**: sin cambios de código — el proyecto ya usaba `createRoot` (API de React 18/19) y no usa `defaultProps`, `propTypes` ni ciclo de vida legacy.

## Bug de datos corregido

Los dos endpoints de la API de Ghibli que usaba el proyecto (`ghibliapi.herokuapp.com` y `ghibli-api.up.railway.app`) devuelven **404** — Heroku cerró su capa gratuita y el segundo servicio ya no existe. Por eso el carrusel de la pantalla Home no cargaba películas. Se reapuntaron `hooks/request.js` y `hooks/useFilms.js` a `https://ghibliapi.vercel.app`, que expone el mismo contrato y sí responde. No es un cambio de comportamiento: es la API original volviendo a funcionar.

## Limpieza mínima derivada

- Se eliminaron `hooks/useInitialState.js` y `hooks/useFetchFilms.js`: no los importaba ningún archivo (verificado por búsqueda en todo `src/`), y `useInitialState` apuntaba a la API caída.
- `<label for="...">` → `<label htmlFor="...">` en `SingUpScreen.jsx` (atributo HTML inválido en JSX; no producía error pero sí warning).
- Se corrigió un `<meta>` roto en `index.html` que usaba comillas tipográficas (`»`) en vez de comillas rectas, dejándolo como HTML inválido.

## Pendiente conocido, fuera de alcance

- `npm audit` reporta una vulnerabilidad "alta" en `react-router` (GHSA-qwww-vcr4-c8h2, CSRF en modo RSC). Afecta únicamente a *React Server Components mode*; esta app es una SPA cliente-only con `BrowserRouter`, por lo que no aplica. El único remedio que ofrece `npm audit fix --force` es *bajar* a una versión anterior (7.11.0), lo cual sería un downgrade injustificado — se optó por mantener 7.18.2 (última disponible).
- `components/inputsuggest/InputSuggest.jsx` espera `options.entries` de la respuesta de búsqueda, pero la API de Ghibli devuelve directamente un array de películas. El buscador nunca mostró sugerencias, antes ni ahora — es un bug preexistente de la pantalla Search, no una regresión de esta actualización, y corregirlo estaba fuera del alcance pedido (conservar el comportamiento actual).
- `favorites/FavoritesScreen.jsx` sigue mostrando la misma imagen estática repetida 12 veces (`<BannerMovie />` sin datos reales) — comportamiento preexistente, sin conexión a la API.

## Cómo correr el proyecto ahora

```bash
npm install
npm run dev       # antes: npm start
npm run build     # genera dist/ (antes build/)
npm run preview   # sirve el build de producción localmente
```

## Verificación realizada

Se recorrieron con un navegador headless las 6 pantallas (`/login`, `/singup`, `/home`, `/favorites`, `/search`, `/profile`), tanto en `npm run dev` como sobre el build de producción (`npm run build` + `npm run preview`):

- Cero errores y cero warnings en consola en las 7 rutas probadas (incluida una ruta inexistente).
- El carrusel de Home carga películas reales desde la API.
- El botón "Iniciar sesión" navega correctamente a Home (`useNavigate`).
- Una URL desconocida redirige a `/home`.
- El estado activo del menú inferior (`NavLink` + clase `.active`) funciona igual que antes.
