const fs   = require('fs');
const path = require('path');

const baseDir  = __dirname;
const BASE_URL = 'https://korea-arrival-card.vercel.app';
const GA_ID    = 'G-BCY6SVF9CT';

// Load LANGUAGES and FORM_DATA from existing JS files
let LANGUAGES, FORM_DATA;
{
  const langsCode = fs.readFileSync(path.join(baseDir, 'languages.js'), 'utf8');
  const formCode  = fs.readFileSync(path.join(baseDir, 'form-data.js'), 'utf8');
  const fn = new Function(langsCode + '\n' + formCode + '\nreturn { LANGUAGES, FORM_DATA };');
  ({ LANGUAGES, FORM_DATA } = fn());
}

const targetLangs = LANGUAGES.filter(l => l.tier === 1 || l.tier === 2);

function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function hreflangTags() {
  const lines = [`  <link rel="alternate" hreflang="x-default" href="${BASE_URL}/">`];
  for (const l of targetLangs) {
    lines.push(`  <link rel="alternate" hreflang="${l.code}" href="${BASE_URL}/${l.code}/">`);
  }
  return lines.join('\n');
}

const FIELD_ORDER = [
  'surname','givenName','gender','nationality','dob','occupation',
  'addressInKorea','purposeOfVisit','departureDate','departureFlightNo','signature'
];

function renderFields(data, lang) {
  const f   = data.fields;
  const ef  = FORM_DATA['en'].fields;
  const dir = lang.rtl ? 'rtl' : 'ltr';

  return FIELD_ORDER.map(key => {
    const field   = f[key]  || ef[key];
    const enField = ef[key];

    let html = `    <div class="field" dir="${dir}">\n`;
    html += `      <div class="field-en">${esc(enField.label)}</div>\n`;
    html += `      <div class="field-label">${esc(field.label)}</div>\n`;

    if (field.hint) {
      html += `      <div class="field-hint">${esc(field.hint).replace(/\n/g, '<br>')}</div>\n`;
    }
    if (field.options) {
      html += `      <div class="field-options">\n`;
      field.options.forEach(opt => {
        html += `        <span class="option">□ ${esc(opt)}</span>\n`;
      });
      html += `      </div>\n`;
    }
    html += `    </div>`;
    return html;
  }).join('\n');
}

function generatePage(lang) {
  const data = FORM_DATA[lang.code] || FORM_DATA['en'];
  const dir  = lang.rtl ? 'rtl' : 'ltr';
  const desc = `${esc(data.formTitle)} ${esc(lang.native)}. Free Korea arrival card translation — all fields explained in ${esc(lang.name)}.`;

  return `<!DOCTYPE html>
<html lang="${lang.code}" dir="${dir}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(data.formTitle)} — ${esc(lang.native)} | Korea Arrival Card</title>
  <meta name="description" content="${desc}">
  <meta property="og:title" content="${esc(data.formTitle)} — ${esc(lang.native)}">
  <meta property="og:description" content="${desc}">
  <meta property="og:url" content="${BASE_URL}/${lang.code}/">
  <meta property="og:type" content="website">
  <link rel="canonical" href="${BASE_URL}/${lang.code}/">
${hreflangTags()}
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🇰🇷</text></svg>">
  <script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date()); gtag('config', '${GA_ID}');
  </script>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --primary: #0f4c75; --teal: #1b9aaa; --accent: #f4a261;
      --bg: #f0f4f8; --card: #fff; --border: #d0dae6;
      --text: #1a2535; --muted: #5a6a7e; --radius: 10px;
    }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: var(--bg); color: var(--text); min-height: 100vh; }
    .site-header { background: var(--primary); color: #fff; padding: 14px 20px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 100; box-shadow: 0 2px 8px rgba(0,0,0,.25); }
    .back-link { color: rgba(255,255,255,.85); text-decoration: none; font-size: .9rem; display: flex; align-items: center; gap: 6px; }
    .back-link:hover { color: #fff; }
    .header-flag { font-size: 1.6rem; }
    main { max-width: 680px; margin: 0 auto; padding: 28px 16px 56px; }
    h1 { font-size: 1.45rem; font-weight: 800; color: var(--primary); margin-bottom: 6px; }
    .lang-badge { display: inline-flex; align-items: center; gap: 6px; background: var(--teal); color: #fff; border-radius: 20px; padding: 4px 14px; font-size: .82rem; margin-bottom: 24px; }
    .field { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 14px 16px; margin-bottom: 10px; box-shadow: 0 1px 4px rgba(15,76,117,.07); }
    .field-en { font-size: .7rem; color: var(--muted); text-transform: uppercase; letter-spacing: .05em; margin-bottom: 3px; }
    .field-label { font-size: 1.05rem; font-weight: 700; color: var(--primary); }
    .field-hint { font-size: .86rem; color: var(--muted); line-height: 1.6; margin-top: 5px; }
    .field-options { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
    .option { background: #f0f4f8; border: 1px solid var(--border); border-radius: 6px; padding: 4px 10px; font-size: .8rem; }
    .cta-box { background: var(--primary); color: #fff; border-radius: var(--radius); padding: 22px 20px; text-align: center; margin-top: 36px; }
    .cta-box p { font-size: .9rem; opacity: .82; margin-bottom: 14px; }
    .cta-btn { display: inline-block; background: var(--accent); color: #fff; text-decoration: none; border-radius: 8px; padding: 11px 26px; font-weight: 700; font-size: .95rem; }
    .cta-btn:hover { opacity: .9; }
    footer { text-align: center; padding: 24px 16px; color: var(--muted); font-size: .78rem; }
    footer a { color: var(--teal); text-decoration: none; }
    @media (max-width: 600px) { main { padding: 18px 12px 40px; } h1 { font-size: 1.2rem; } }
  </style>
</head>
<body>
  <header class="site-header">
    <a class="back-link" href="${BASE_URL}/">
      <span class="header-flag">🇰🇷</span>
      Korea Arrival Card · 155 languages
    </a>
    <span style="font-size:.8rem;opacity:.7">${lang.flag} ${esc(lang.native)}</span>
  </header>

  <main>
    <h1>${esc(data.formTitle)} — ${esc(lang.native)}</h1>
    <span class="lang-badge">${lang.flag} ${esc(lang.name)}</span>

${renderFields(data, lang)}

    <div class="cta-box">
      <p>Need a different language? / 다른 언어로 보기</p>
      <a class="cta-btn" href="${BASE_URL}/">Choose from 155 languages →</a>
    </div>
  </main>

  <footer>
    Korea Arrival Card Translator &nbsp;·&nbsp;
    <a href="${BASE_URL}/">korea-arrival-card.vercel.app</a>
  </footer>
</body>
</html>`;
}

// Generate all pages
let count = 0;
for (const lang of targetLangs) {
  const outDir = path.join(baseDir, lang.code);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), generatePage(lang), 'utf8');
  process.stdout.write(`✓ /${lang.code}/  ${lang.name} (${lang.native})\n`);
  count++;
}

process.stdout.write(`\nDone — ${count} pages generated.\n`);
