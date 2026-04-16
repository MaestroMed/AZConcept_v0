# AZ Concept — site

Next.js 16 · React 19 · Tailwind v4 · Fraunces / Inter / JetBrains Mono.

## Démarrer en local

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build production
npm run lint       # eslint
```

## Variables d'environnement (production)

Définir dans Vercel → Settings → Environment Variables :

| Clé               | Valeur d'exemple                         | Rôle                                    |
|-------------------|------------------------------------------|------------------------------------------|
| `RESEND_API_KEY`  | `re_xxx…`                                | API Resend pour l'envoi des emails       |
| `CONTACT_INBOX`   | `contact@azconcept.fr`                   | Destinataire des formulaires             |
| `CONTACT_FROM`    | `AZ Concept <noreply@azconcept.fr>`      | Expéditeur (domaine vérifié Resend)      |

Sans ces variables, les formulaires `/api/contact` et `/api/devis` fonctionnent en mode **log console** (dev / preview). Les soumissions passent mais ne partent pas par email.

## Anti-spam

- **Honeypot** : champ `hp_website` invisible dans chaque formulaire. Les bots remplissent tous les champs → si rempli, le serveur retourne 200 sans envoyer d'email.
- **Rate-limit** : 5 requêtes par IP par fenêtre glissante de 10 min (`src/lib/rateLimit.ts`). En mémoire — sufficient pour un site peu trafiqué sur une seule région Vercel. Pour multi-région / haute charge, passer sur Upstash KV.

## TODO Mentions légales (avant mise en prod)

Compléter dans `src/data/company.ts` :
- `siret`
- `rcs`
- `capitalSocial`
- `directeurPublication`

Ces champs alimentent la page `/mentions-legales`. Sans eux, le site affiche « À compléter » — obligatoire selon l'art. 6 III LCEN et l'art. R.123-237 du Code de commerce.

## Architecture

```
src/
├── app/                     # App Router
│   ├── (home)              → /
│   ├── garde-corps/        → /garde-corps, [gamme], [modele]
│   ├── portes/             → miroirs via re-export
│   ├── grilles/            → miroirs via re-export
│   ├── a-propos/ contact/ devis/ thermolaquage/ realisations/
│   ├── cgv/ mentions-legales/ confidentialite/
│   └── api/contact/ api/devis/
├── components/
│   ├── layout/             # Header, Footer, MobileMenu, AmbientBackground
│   ├── sections/           # Home sections (Hero, Philosophy, Gammes, …)
│   ├── hero/               # MeshGradient WebGL
│   └── shared/             # Button, Eyebrow, PageHero, SectionHeader,
│                             Reveal, SpecTable, SplitEditorial, ImageStrip,
│                             RelatedRealisations, LegalContent,
│                             InitLoader, ChapterIndicator
├── data/                   # company, navigation, categories, gammes,
│                             realisations, stats, partners, testimonials,
│                             assets (image+copy manifest)
└── lib/
    ├── hooks/              # useMediaQuery, useMagnetic, useBodyLock, useCountUp,
    │                        useMousePosition
    ├── animations.ts       # Framer variants
    ├── rateLimit.ts        # In-memory rate limiter
    ├── mail.ts             # Resend wrapper
    └── utils.ts
```

## Déploiement

Vercel auto-détecte Next.js. `main` = production, autres branches = previews.

---

© AZ Concept — Atelier de métallerie architecturale, Île-de-France.
