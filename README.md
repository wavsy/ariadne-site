# ARIADNE website

Credibility site for ARIADNE, the Wavsy project built at the European Defense Tech
Hackathon, Prishtina, 20–22 November 2026. Three pages: the project (`/`), our story
(`/story/`) and contact (`/contact/`). English only.

```
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in out/, host it anywhere (Vercel, Netlify, any file server)
```

- Text, team and links: `lib/site.ts`, `app/page.tsx`, `app/story/page.tsx`.
- Team avatars: `public/team/<name>.jpg`, square. A member without an `avatar` in
  `lib/site.ts` shows initials.
- Film and clips: `public/film/`, cut from `fiber-hunt-1080p.mp4`.
- The contact form has no server: it opens the visitor's mail app addressed to
  wavsy.dev@gmail.com.

The site follows the repository's rule: state only what is verified, and label
everything simulated as simulated.
