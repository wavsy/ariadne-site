# ARIADNE website

Public website for ARIADNE, the Wavsy project that follows a fiber-optic drone's cable
back to its launch zone. Five pages: the project (`/`), research Q&A (`/research/`),
the name (`/name/`), our story (`/story/`) and contact (`/contact/`). English only.

```
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in out/, host it anywhere (Vercel, Netlify, any file server)
```

- Text, team and links: `lib/site.ts`, `app/page.tsx`, `app/story/page.tsx`.
- Team avatars: `public/team/<name>.jpg`, square. A member without an `avatar` in
  `lib/site.ts` shows initials.
- Film and clips: `public/film/`. The film is rendered from the "ARIADNE Film" artifact
  (a live 3D animation) with its own exporter, then re-encoded to 1080p. It does not
  update by itself: when the artifact changes, render again, replace the files and commit.
- Facts and numbers follow the project repository (private). When the simulation report
  changes, update the tables in `app/page.tsx` and `app/research/page.tsx`.
- Myth artwork in `public/img/myth/` is public domain, from Wikimedia Commons.
- The contact form delivers through a form service to wavsy.dev@gmail.com: Web3Forms
  when `WEB3FORMS_KEY` in `lib/site.ts` is set, FormSubmit (formsubmit.co) otherwise.
  FormSubmit needs a one-time "Activate Form" click per site address. If the service
  refuses a message, the visitor's mail app opens with the message already written.

The site follows the repository's rule: state only what is verified, and label
everything simulated as simulated.
