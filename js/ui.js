/* ui.js – small shared helpers and components. */
ML.esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
ML.money = (p) => (p == null || p === '' ? 'Price on request' : 'KES ' + Number(p).toLocaleString('en-KE'));
ML.ago = function (t) { const m = (ML.now() - new Date(t)) / 6e4; return m < 60 ? Math.max(1, Math.round(m)) + ' min ago' : m < 1440 ? Math.round(m / 60) + ' h ago' : Math.round(m / 1440) + ' d ago'; };
ML.toast = function (m) { const t = document.getElementById('toast'); t.textContent = m; t.style.display = 'block'; clearTimeout(ML._t); ML._t = setTimeout(() => (t.style.display = 'none'), 2600); };
ML.go = (path) => (location.hash = '#' + path);

ML.badge = function (l) { const s = ML.STATUS[l.st] || ['?', '']; return `<span class="badge ${s[1]}">${s[0]}</span>`; };
ML.icon = (l) => (l.type === 'residue' ? '🌾' : ML.EMOJI[l.crop] || '🧺');
ML.thumb = (l) => `<div class="thumb">${l.img ? `<img src="${l.img}" alt="${ML.esc(l.title)}, ${ML.esc(l.loc)}">` : `<span role="img" aria-label="${ML.esc(l.crop)}">${ML.icon(l)}</span>`}</div>`;

ML.listingCard = (l) => `<a class="card" href="#/l/${l.id}">${ML.thumb(l)}<h3>${ML.esc(l.title)}</h3>
  <div>${ML.badge(l)} <span class="badge">${l.type}</span></div>
  <p style="margin:8px 0 0">${l.q} ${ML.esc(l.u)} · ${ML.money(l.p)}${l.p ? '/' + ML.esc(l.u) : ''}<br><span class="muted">📍 ${ML.esc(l.loc)} · updated ${ML.ago(l.upd)}</span></p></a>`;
ML.grid = (a, empty) => (a.length ? `<div class="grid">${a.map(ML.listingCard).join('')}</div>` : `<p class="card muted">${empty || 'Nothing here yet.'}</p>`);
ML.stat = (n, label, href) => `<a class="card stat" href="#${href}"><b>${n}</b>${label}</a>`;
ML.unreadCount = () => { const u = ML.me(); return u ? ML.S.notifs.filter((n) => n.uid === u.id && !n.read).length : 0; };
