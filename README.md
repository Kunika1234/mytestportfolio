# Kunika Portfolio (Vite + React + TypeScript)

## Local Development

```bash
cd project
npm install
npm run dev
```

## Building for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Deploying to Netlify

1. **Connect your repository to Netlify.**
2. **Set the following in Netlify build settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. **Ensure `netlify.toml` is present in the `project/` directory.**
4. **Netlify will handle SPA routing with the provided redirects.**

---

### Project Structure

- `src/` - Source code (React, TypeScript)
- `index.html` - Main HTML entry
- `dist/` - Production build output (auto-generated)
- `netlify.toml` - Netlify configuration

---

For any issues, check your Netlify deploy logs or open an issue in your repository. 