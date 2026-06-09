const fs   = require('fs');
const path = require('path');

const baseDir  = __dirname;
const BASE_URL = 'https://korea-arrival-card.vercel.app';

// Load LANGUAGES and FORM_DATA
let LANGUAGES, FORM_DATA;
{
  const langsCode = fs.readFileSync(path.join(baseDir, 'languages.js'), 'utf8');
  const formCode  = fs.readFileSync(path.join(baseDir, 'form-data.js'), 'utf8');
  const fn = new Function(langsCode + '\n' + formCode + '\nreturn { LANGUAGES, FORM_DATA };');
  ({ LANGUAGES, FORM_DATA } = fn());
}

// Read index.html as template (normalize CRLF → LF)
const template = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf8').replace(/\r\n/g, '\n');

const targetLangs = LANGUAGES.filter(l => l.tier === 1 || l.tier === 2);

function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function hint(h) {
  return h ? `<div class="tc-hint">${esc(h)}</div>` : '';
}

function renderPurposeGrid(opts) {
  if (!opts || opts.length < 12) return '';
  const [tour, indiv, group, biz, diplo, med, family, conf, employ, study, sports, others] = opts;
  return `<div class="hc-cb-grid">
        <div>
          <div class="hc-cb">${esc(tour)}</div>
          <div class="hc-cb hc-cb-ind">${esc(indiv)}</div>
          <div class="hc-cb hc-cb-ind">${esc(group)}</div>
        </div>
        <div class="hc-cb">${esc(family)}</div>
        <div class="hc-cb">${esc(biz)}</div>
        <div class="hc-cb">${esc(conf)}</div>
        <div class="hc-cb">${esc(diplo)}</div>
        <div class="hc-cb">${esc(employ)}</div>
        <div class="hc-cb">${esc(med)}</div>
        <div class="hc-cb">${esc(study)}</div>
        <div></div>
        <div class="hc-cb">${esc(sports)}</div>
        <div class="hc-cb hc-cb-full">${esc(others)} (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)</div>
      </div>`;
}

function renderTransCard(data, lang) {
  const f   = data.fields;
  const dir = (lang.rtl || data.rtl) ? 'rtl' : 'ltr';

  const fallback = data._fallback
    ? `<div class="fallback-notice">ℹ️ <strong>${esc(data._nativeName || lang.native)}</strong> — showing English.</div>`
    : '';

  const genderCell = f.gender.options
    ? f.gender.options.map(o => `<div style="font-size:8.5px;line-height:2">□ ${esc(o)}</div>`).join('')
    : `<span class="hc-lbl" style="font-size:8.5px">${esc(f.gender.label)}</span>`;

  return `${fallback}<div class="html-card trans-card" dir="${dir}">

        <!-- HEADER -->
        <div class="hc-head">
          <div class="hc-logo">
            <div class="hc-logo-emblem">KIS</div>
            <div class="hc-logo-name">KOREA<br>IMMIGRATION<br>SERVICE</div>
          </div>
          <div class="hc-title">
            <div class="hc-title-en">${esc(data.formTitle)}</div>
            <div class="hc-title-ko">${esc(lang.native)}</div>
          </div>
          <div class="hc-note" style="color:#0b6875;font-size:7px">${esc(lang.name)}</div>
        </div>

        <!-- ROW 1: Surname | Given Name | Gender -->
        <div class="hc-row">
          <div class="hc-cell" style="flex:2.2">
            <span class="hc-lbl">${esc(f.surname.label)}</span>
            ${hint(f.surname.hint)}
          </div>
          <div class="hc-cell" style="flex:2.2">
            <span class="hc-lbl">${esc(f.givenName.label)}</span>
            ${hint(f.givenName.hint)}
          </div>
          <div class="hc-cell" style="flex:1.1">
            ${genderCell}
          </div>
        </div>

        <!-- ROW 2: Nationality | DOB | Occupation -->
        <div class="hc-row">
          <div class="hc-cell" style="flex:1.4">
            <span class="hc-lbl">${esc(f.nationality.label)}</span>
            ${hint(f.nationality.hint)}
          </div>
          <div class="hc-cell" style="flex:2">
            <span class="hc-lbl">${esc(f.dob.label)}</span>
            <div class="hc-dob">
              <div class="hc-db">Y</div><div class="hc-db">Y</div><div class="hc-db">Y</div><div class="hc-db">Y</div>
              <div class="hc-dbsp"></div>
              <div class="hc-db">M</div><div class="hc-db">M</div>
              <div class="hc-dbsp"></div>
              <div class="hc-db">D</div><div class="hc-db">D</div>
            </div>
            ${hint(f.dob.hint)}
          </div>
          <div class="hc-cell" style="flex:1.4">
            <span class="hc-lbl">${esc(f.occupation.label)}</span>
            ${hint(f.occupation.hint)}
          </div>
        </div>

        <!-- ROW 3: Address in Korea -->
        <div class="hc-addr">
          <div class="hc-addr-top">
            <span class="hc-lbl">${esc(f.addressInKorea.label)}</span>
          </div>
          ${f.addressInKorea.hint ? `<div class="hc-addr-note">${esc(f.addressInKorea.hint)}</div>` : ''}
        </div>

        <!-- ROW 4: Purpose + Departure + Signature -->
        <div class="hc-bottom">
          <div class="hc-purpose">
            <span class="hc-lbl">${esc(f.purposeOfVisit.label)}</span>
            ${renderPurposeGrid(f.purposeOfVisit.options)}
          </div>
          <div class="hc-depart">
            <div class="hc-dcell">
              <span class="hc-lbl">${esc(f.departureDate.label)}</span>
              ${hint(f.departureDate.hint)}
            </div>
            <div class="hc-dcell">
              <span class="hc-lbl" style="font-size:8px;line-height:1.5">${esc(f.departureFlightNo.label)}</span>
              ${hint(f.departureFlightNo.hint)}
            </div>
            <div class="hc-dcell">
              <span class="hc-lbl">${esc(f.signature.label)}</span>
              ${hint(f.signature.hint)}
            </div>
          </div>
        </div>

      </div>`;
}

function generatePage(lang) {
  const data = FORM_DATA[lang.code] || FORM_DATA['en'];
  const dir  = (lang.rtl || data.rtl) ? ' dir="rtl"' : '';
  const transCard = renderTransCard(data, lang);
  const transHeader = `📝 ${data.formTitle} — ${lang.native}`;
  const langBtnText = `${lang.flag || '🌐'} ${lang.name} — ${lang.native}`;
  const desc = `${data.formTitle} ${lang.native}. Free Korea arrival card translation — all fields explained in ${lang.name}.`;

  let html = template;

  // 1. html lang + dir
  html = html.replace('<html lang="en">', `<html lang="${lang.code}"${dir}>`);

  // 2. title
  html = html.replace(
    '<title>Korea Arrival Card Translator — 155 Languages</title>',
    `<title>${esc(data.formTitle)} — ${esc(lang.native)} | Korea Arrival Card</title>`
  );

  // 3. meta description
  html = html.replace(
    /(<meta name="description" content=")[^"]*(")/,
    `$1${desc}$2`
  );

  // 4. canonical URL
  html = html.replace(
    `<link rel="canonical"           href="${BASE_URL}/">`,
    `<link rel="canonical"           href="${BASE_URL}/${lang.code}/">`
  );

  // 5. script src → absolute paths (so /ja/index.html can find /languages.js)
  html = html.replace('src="languages.js"', 'src="/languages.js"');
  html = html.replace('src="form-data.js"', 'src="/form-data.js"');

  // 6. lang button pre-filled
  html = html.replace(
    '<span id="lang-btn-text">— Choose language —</span>',
    `<span id="lang-btn-text">${langBtnText}</span>`
  );

  // 7. trans-header pre-filled
  html = html.replace(
    '<div class="panel-header" id="trans-header">📝 Translation</div>',
    `<div class="panel-header" id="trans-header">${transHeader}</div>`
  );

  // 8. trans-content: replace select-prompt with pre-rendered card
  html = html.replace(
    /(<div id="trans-content">)\s*<div class="select-prompt">[\s\S]*?<\/div>\s*(<\/div>)/,
    `$1\n        ${transCard}\n      $2`
  );

  // 9. "All languages" link injected into lang-bar
  html = html.replace(
    `    </div>\n  </div>\n\n  <!-- Main content: image + translation -->`,
    `    </div>\n    <a href="${BASE_URL}/" class="all-langs-link">🌐 155 languages →</a>\n  </div>\n\n  <!-- Main content: image + translation -->`
  );

  // 9b. CSS for the all-langs-link (injected before </style>)
  html = html.replace(
    `  </style>\n</head>`,
    `    .all-langs-link {
      display: inline-flex; align-items: center;
      background: var(--accent); color: #fff; text-decoration: none;
      border-radius: 8px; padding: 8px 16px; font-size: .85rem; font-weight: 700;
      white-space: nowrap; flex-shrink: 0;
    }
    .all-langs-link:hover { opacity: .88; }
  </style>\n</head>`
  );

  // 11. init JS: always start with this page's language
  html = html.replace(
    `(function init() {
      const urlLang = new URLSearchParams(location.search).get('lang');
      let saved;
      try { saved = localStorage.getItem('arrival-lang'); } catch(e) {}
      const target = urlLang || saved;
      if (target && FORM_DATA[target]) selectLang(target);
    })();`,
    `(function init() {
      const urlLang = new URLSearchParams(location.search).get('lang');
      const target = urlLang || '${lang.code}';
      if (target && FORM_DATA[target]) selectLang(target);
    })();`
  );

  return html;
}

// Re-generate all pages
let count = 0;
for (const lang of targetLangs) {
  const outDir = path.join(baseDir, lang.code);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), generatePage(lang), 'utf8');
  process.stdout.write(`✓ /${lang.code}/  ${lang.name}\n`);
  count++;
}

process.stdout.write(`\nDone — ${count} pages regenerated.\n`);
