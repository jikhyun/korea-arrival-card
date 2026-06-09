// ── Analytics ────────────────────────────────────────────
function trackEvent(name, params) {
  if (typeof gtag === 'function') gtag('event', name, params);
}

// ── Utility ──────────────────────────────────────────────
function getLangParam() {
  const p = new URLSearchParams(window.location.search);
  return p.get('lang') || 'en';
}

function getLangData(code) {
  const lang = LANGUAGES.find(l => l.code === code);
  return lang || LANGUAGES.find(l => l.code === 'en');
}

// ── Index Page ────────────────────────────────────────────
function initIndexPage() {
  const grid = document.getElementById('language-grid');
  const search = document.getElementById('lang-search');
  if (!grid) return;

  function renderGrid(filter) {
    const q = (filter || '').toLowerCase().trim();
    const filtered = LANGUAGES.filter(l =>
      !q ||
      l.name.toLowerCase().includes(q) ||
      l.native.toLowerCase().includes(q) ||
      l.code.toLowerCase().includes(q)
    );

    if (!filtered.length) {
      grid.innerHTML = '<p class="no-results">No language found. Try a different search.</p>';
      return;
    }

    grid.innerHTML = filtered.map(l => `
      <a class="lang-card" href="guide.html?lang=${l.code}" aria-label="${l.name}">
        <span class="tier-dot t${l.tier}" title="${l.tier === 1 ? 'Full translation' : l.tier === 2 ? 'Card fields' : 'English guide'}"></span>
        <span class="lang-flag">${l.flag}</span>
        <span class="lang-native">${l.native}</span>
        <span class="lang-name">${l.name}</span>
      </a>
    `).join('');
  }

  renderGrid('');
  search.addEventListener('input', e => renderGrid(e.target.value));

  grid.addEventListener('click', e => {
    const card = e.target.closest('.lang-card');
    if (card) {
      const langCode = new URL(card.href, location.href).searchParams.get('lang');
      const lang = LANGUAGES.find(l => l.code === langCode);
      trackEvent('language_selected', {
        lang_code: langCode,
        lang_name: lang?.name || langCode,
        lang_tier: lang?.tier || 3,
      });
    }
  });
}

// ── Guide Page ────────────────────────────────────────────
let currentStep = 1;
const TOTAL_STEPS = 5;

function initGuidePage() {
  const langCode = getLangParam();
  const langData = getLangData(langCode);
  const t = getTranslation(langCode);

  // Set RTL
  if (langData.rtl) document.body.classList.add('rtl');
  // Set lang font class
  document.body.classList.add('lang-' + langCode);

  // Back button
  const backBtn = document.getElementById('back-btn');
  if (backBtn) backBtn.textContent = t.ui.backToHome;

  // Official site button
  const officialBtn = document.getElementById('official-btn');
  if (officialBtn) officialBtn.textContent = '→ ' + t.ui.officialSite + ': e-arrivalcard.go.kr';

  // Step dots labels
  if (t.steps) {
    document.querySelectorAll('.step-dot').forEach((dot, i) => {
      dot.setAttribute('title', t.steps[i] || '');
    });
  }

  // Nav button labels
  document.getElementById('btn-prev').textContent = t.ui.prev;
  document.getElementById('btn-next').textContent = t.ui.next;

  // Build step content
  buildStepContent(t, langData, langCode);

  showStep(1, t);
  updateNavButtons(t);
}

function buildStepContent(t, langData, langCode) {
  // Step titles
  if (t.steps) {
    for (let i = 1; i <= 5; i++) {
      const titleEl = document.querySelector(`#step-${i} .step-title`);
      if (titleEl && t.steps[i-1]) titleEl.textContent = `${i}. ${t.steps[i-1]}`;
    }
  }

  // Fallback notice
  if (t._fallback) {
    document.querySelectorAll('.step-panel').forEach(panel => {
      const notice = document.createElement('div');
      notice.className = 'coming-soon';
      notice.textContent = t.ui.comingSoon || 'Full translation coming soon.';
      panel.prepend(notice);
    });
  }

  buildStep1(t);
  buildStep2(t);
  buildStep3(t, langCode);
  buildStep4(t, langCode);
  buildStep5(t);
}

function buildStep1(t) {
  const s = t.step1 || T['en'].step1;
  const container = document.getElementById('step1-content');
  if (!container) return;

  container.innerHTML = `
    <p class="step-intro">${s.intro}</p>
    <ul class="prep-list">
      ${s.items.map((item, i) => `
        <li class="prep-item">
          <span class="prep-num">${i+1}</span>
          <span>${item}</span>
        </li>`).join('')}
    </ul>
    <div class="tip-box">${t.ui?.tip || '💡 Tip'}: ${s.tip}</div>
  `;
}

function buildStep2(t) {
  const s = t.step2 || T['en'].step2;
  const container = document.getElementById('step2-content');
  if (!container) return;

  container.innerHTML = `
    <p class="step-intro">${s.intro}</p>
    <ul class="site-steps">
      ${s.steps.map((step, i) => `
        <li class="site-step">
          <span class="site-step-num">${i+1}</span>
          <span>${step}</span>
        </li>`).join('')}
    </ul>
    <a href="https://e-arrivalcard.go.kr" target="_blank" class="btn-official">
      → ${t.ui?.officialSite || 'Official Site'}: e-arrivalcard.go.kr
    </a>
    <div class="tip-box">${t.ui?.tip || '💡 Tip'}: ${s.tip}</div>
  `;
}

function buildStep3(t, langCode) {
  const s = t.step3 || T['en'].step3;
  const enS = T['en'].step3;
  const container = document.getElementById('step3-content');
  if (!container) return;

  const intro = s.intro || enS.intro;
  const fields = s.fields || enS.fields;
  const tip = (t.step3?.tip) || T['en'].step3.tip;

  container.innerHTML = `
    <p class="step-intro">${intro}</p>
    <div class="field-cards">
      ${fields.map((f, i) => {
        const enField = enS.fields[i] || {};
        return `
        <div class="field-card">
          <div class="field-en">${enField.en || ''}</div>
          <div class="field-label">${f.label}</div>
          <div class="field-meta">
            <span class="field-example">${t.ui?.example || 'Example:'} ${f.example}</span>
            <span class="field-note">⚠️ ${f.note}</span>
          </div>
        </div>`;
      }).join('')}
    </div>
    <div class="tip-box">${t.ui?.tip || '💡 Tip'}: ${tip}</div>
  `;
}

function buildStep4(t, langCode) {
  const s = t.step4 || T['en'].step4;
  const enS = T['en'].step4;
  const container = document.getElementById('step4-content');
  if (!container) return;

  const intro = s.intro || enS.intro;
  const fields = s.fields || enS.fields;
  const tip = (t.step4?.tip) || T['en'].step4.tip;
  const nativeOptions = s.purposeOptions || enS.purposeOptions;
  const enOptions = enS.purposeOptions;

  function purposePills() {
    return '<div class="purpose-list">' +
      nativeOptions.map(function(o, j) {
        var en = enOptions[j] || '';
        var label = (o !== en && en) ? o + ' (' + en + ')' : o;
        return '<span class="purpose-tag">' + label + '</span>';
      }).join('') +
      '</div>';
  }

  container.innerHTML = `
    <p class="step-intro">${intro}</p>
    <div class="field-cards">
      ${fields.map((f, i) => {
        const enField = enS.fields[i] || {};
        const isPurpose = f.isPurpose || enField.isPurpose || false;
        return `
        <div class="field-card">
          <div class="field-en">${enField.en || ''}</div>
          <div class="field-label">${f.label}</div>
          <div class="field-meta">
            <span class="field-example">${t.ui?.example || 'Example:'} ${f.example}</span>
            ${isPurpose ? purposePills() : ''}
            <span class="field-note">⚠️ ${f.note}</span>
          </div>
        </div>`;
      }).join('')}
    </div>
    <div class="tip-box">${t.ui?.tip || '💡 Tip'}: ${tip}</div>
  `;
}

function buildStep5(t) {
  const s = t.step5 || T['en'].step5;
  const container = document.getElementById('step5-content');
  if (!container) return;

  container.innerHTML = `
    <p class="step-intro">${s.intro}</p>
    <ul class="checklist">
      ${s.checklist.map(item => `
        <li><span class="check-icon">✅</span> ${item}</li>
      `).join('')}
    </ul>
    <div class="tip-box">${t.ui?.tip || '💡 Tip'}: ${s.tip}</div>
    <h3 style="margin:16px 0 8px;font-size:1rem;">📱 After Submitting</h3>
    <p style="margin-bottom:12px;">${s.afterSubmit}</p>
    <p style="margin-bottom:16px;">✈️ ${s.atAirport}</p>
    <h3 style="margin:16px 0 8px;font-size:1rem;color:#dc3545;">❌ Common Mistakes</h3>
    <ul class="mistake-list">
      ${s.mistakes.map(m => `<li class="mistake-item">${m}</li>`).join('')}
    </ul>
    <a href="https://e-arrivalcard.go.kr" target="_blank" class="btn-official">→ Go to e-arrivalcard.go.kr to Submit</a>
  `;
}

// ── Step Navigation ───────────────────────────────────────
function showStep(n, t) {
  currentStep = n;
  document.querySelectorAll('.step-panel').forEach((p, i) => {
    p.classList.toggle('active', i + 1 === n);
  });

  // Progress bar
  const pct = ((n - 1) / (TOTAL_STEPS - 1)) * 100;
  const fill = document.getElementById('progress-fill');
  if (fill) fill.style.width = pct + '%';

  // Progress text
  const progressText = document.getElementById('progress-text');
  if (progressText) {
    const ui = t?.ui || T['en'].ui;
    progressText.textContent = `${ui.step} ${n} ${ui.of} ${TOTAL_STEPS}`;
  }

  // Step title in header
  const stepLabel = document.getElementById('step-label');
  if (stepLabel && t?.steps) stepLabel.textContent = t.steps[n-1] || '';

  // Dots
  document.querySelectorAll('.step-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i + 1 === n);
    dot.classList.toggle('done', i + 1 < n);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

  const langCode = getLangParam();
  trackEvent('step_viewed', { step_number: n, lang_code: langCode });
  if (n === TOTAL_STEPS) trackEvent('guide_completed', { lang_code: langCode });
}

function updateNavButtons(t) {
  const ui = t?.ui || T['en'].ui;
  const prevBtn = document.getElementById('btn-prev');
  const nextBtn = document.getElementById('btn-next');
  if (prevBtn) {
    prevBtn.textContent = ui.prev;
    prevBtn.disabled = currentStep === 1;
  }
  if (nextBtn) {
    nextBtn.textContent = currentStep === TOTAL_STEPS ? (ui.officialSite + ' →') : ui.next;
    if (currentStep === TOTAL_STEPS) {
      nextBtn.onclick = () => window.open('https://e-arrivalcard.go.kr', '_blank');
    }
  }
}

// ── Entry Points ──────────────────────────────────────────
document.addEventListener('click', e => {
  const link = e.target.closest('a[href*="e-arrivalcard.go.kr"]');
  if (link) {
    trackEvent('official_site_clicked', {
      lang_code: getLangParam(),
      from_step: typeof currentStep !== 'undefined' ? currentStep : 0,
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const isGuide = document.getElementById('guide-app');
  const isIndex = document.getElementById('language-grid');

  if (isIndex) {
    initIndexPage();
  }

  if (isGuide) {
    const langCode = getLangParam();
    const t = getTranslation(langCode);
    initGuidePage();

    document.getElementById('btn-prev').addEventListener('click', () => {
      if (currentStep > 1) { showStep(currentStep - 1, t); updateNavButtons(t); }
    });
    document.getElementById('btn-next').addEventListener('click', () => {
      if (currentStep < TOTAL_STEPS) { showStep(currentStep + 1, t); updateNavButtons(t); }
    });
    document.querySelectorAll('.step-dot').forEach((dot, i) => {
      dot.addEventListener('click', () => { showStep(i + 1, t); updateNavButtons(t); });
    });

    const printBtn = document.getElementById('btn-print');
    if (printBtn) printBtn.addEventListener('click', () => window.print());
  }
});
