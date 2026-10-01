# Portfolio Backend (Express + Mongoose + TypeScript)

The single source of truth for the portfolio. Owns the database, admin auth and
file uploads. The `front` Next.js app is a pure consumer of this API.

## Run

```bash
cd back
npm install
cp .env.example .env   # then fill in the values
npm run dev            # http://localhost:4000 (tsx watch)
```

Build & run for production:

```bash
npm run build          # -> dist/
npm start
```

## Environment (`.env`)

| Var | Purpose |
| --- | --- |
| `PORT` | API port (default 4000) |
| `CORS_ORIGIN` | Allowed frontend origin(s), comma-separated |
| `ADMIN_EMAIL` / `ADMIN_PASSWORD` | Dashboard login credentials |
| `AUTH_SECRET` | JWT signing secret — **must match** the frontend's `AUTH_SECRET` |
| `COOKIE_DOMAIN` | Empty for localhost; `.yourdomain.com` in prod (shared parent) |
| `COOKIE_CROSS_SITE` | `true` when front + API are on different https hosts |
| `MONGODB_URI` | MongoDB Atlas connection string (unset → read-only static data) |
| `CLOUDINARY_*` | Upload target (unset → local `/uploads` folder) |

## API

| Method | Route | Auth | Description |
| --- | --- | --- | --- |
| GET | `/api/health` | – | Status + whether DB is configured |
| POST | `/api/auth/login` | – | Set session cookie (returns token too) |
| POST | `/api/auth/logout` | – | Clear session cookie |
| GET | `/api/projects` | – | List projects (DB or static fallback) |
| GET | `/api/projects/:id` | – | Single project |
| POST | `/api/projects` | ✅ | Create |
| PUT | `/api/projects/:id` | ✅ | Update (upsert) |
| DELETE | `/api/projects/:id` | ✅ | Delete |
| POST | `/api/projects/seed` | ✅ | Import built-in defaults (only when empty) |
| GET | `/api/content` | – | Site content (DB-merged or defaults) |
| PUT | `/api/content` | ✅ | Replace site content |
| POST | `/api/upload` | ✅ | Upload file → Cloudinary or local `/uploads` |

Protected routes accept the session via the `admin_session` cookie or a
`Authorization: Bearer <token>` header.

## Structure

```
src/
  config/      env + db connection
  data/        built-in static portfolio content (seed + fallback)
  models/      Mongoose schemas (Project, SiteContent)
  services/    data access (projects, site content)
  middleware/  requireAuth, error handling
  routes/      auth, projects, content, upload
  utils/       JWT token, Cloudinary signed upload
  app.ts       express app wiring
  server.ts    bootstrap + listen
```
