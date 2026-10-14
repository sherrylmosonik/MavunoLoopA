# MavunoLoop (hackathon MVP)

Open `index.html` in a browser (or run `npx serve .`). No build step. Data is saved in the browser (localStorage).

## Structure
```
index.html          page shell + script order
css/style.css       all styles
js/data.js          constants, shelf-life table, alternative-use catalogue, sample data
js/store.js         state, saving, demo login, notifications, status changes
js/rules.js         freshness rules, alert checker, alternative-use flow, search & ranking
js/ui.js            shared helpers/components
js/pages-public.js  landing, login, register, marketplace, listing, notifications
js/pages-farmer.js  dashboard, listings, form, freshness centre, enquiries, e-cards
js/pages-buyer.js   dashboard, my enquiries
js/pages-admin.js   cooperative board: overview, listings, reports, members
js/main.js          router, role navigation, route guards
```

## Pages by role
- Public: `/` landing, `/market`, `/l/:id`, `/login/farmer|buyer|admin`, `/register/farmer|buyer`
- Farmer: `/farmer`, `/farmer/listings`, `/farmer/new`, `/farmer/edit/:id`, `/farmer/freshness`, `/farmer/enquiries`, `/farmer/ecard`
- Buyer: `/buyer`, `/buyer/enquiries`
- Cooperative board: `/admin`, `/admin/listings`, `/admin/reports`, `/admin/members`
- Any logged-in user: `/notifications`

## Demo accounts (browser-only, NOT secure authentication)
- farmer@mavunoloop.demo / farmer123
- buyer@mavunoloop.demo / buyer123
- board@mavunoloop.demo / board123

## Freshness logic and limits
Estimate = days since harvest / (crop shelf-life x storage factor). Thresholds: 60% attention, 85% at risk, 100% urgent review; farmer-reported "deteriorating" also triggers urgent review. Shelf-life values in `data.js` are illustrative and must be validated with agricultural guidance. Estimates never mean confirmed spoilage; missing data shows "Condition check needed".

## Not yet built (next steps)
Supabase (auth, Postgres schema + RLS, image storage), LLM API for search/listing assistant (rule-based parser used now), scheduled server-side checker, real SMS/email, QR code on e-cards, USSD simulator, Swahili strings.
