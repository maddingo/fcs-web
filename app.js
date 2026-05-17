// Futures Consciousness Scale — educational implementation.
// Items reflect the 2021 revision of the FCS (Lalot, Ahvenharju & Minkkinen, 2021):
// five dimensions, 4 items per dimension, 5-point Likert with reverse-scored items.
// Wording is paraphrased for educational use; not a validated psychometric instrument.

const DIMENSION_KEYS = ['time', 'agency', 'openness', 'systems', 'concern'];

const QUESTIONS = [
  { id: 't1', dim: 'time' },
  { id: 't2', dim: 'time' },
  { id: 't3', dim: 'time', reverse: true },
  { id: 't4', dim: 'time' },

  { id: 'a1', dim: 'agency' },
  { id: 'a2', dim: 'agency', reverse: true },
  { id: 'a3', dim: 'agency' },
  { id: 'a4', dim: 'agency' },

  { id: 'o1', dim: 'openness' },
  { id: 'o2', dim: 'openness' },
  { id: 'o3', dim: 'openness', reverse: true },
  { id: 'o4', dim: 'openness' },

  { id: 's1', dim: 'systems' },
  { id: 's2', dim: 'systems' },
  { id: 's3', dim: 'systems', reverse: true },
  { id: 's4', dim: 'systems' },

  { id: 'c1', dim: 'concern' },
  { id: 'c2', dim: 'concern' },
  { id: 'c3', dim: 'concern', reverse: true },
  { id: 'c4', dim: 'concern' },
];

const I18N = {
  en: {
    title: 'Futures Consciousness Scale',
    subtitle:
      'A self-assessment of how you relate to the future — across five dimensions. Based on the revised scale by Lalot, Ahvenharju & Minkkinen (2021).',
    introHeading: 'How it works',
    introSteps: [
      'Rate each of the 20 statements on a 1–5 scale (Strongly disagree → Strongly agree).',
      'Statements are grouped into five dimensions of futures consciousness.',
      "You'll get a score for each dimension and a star diagram of your profile.",
    ],
    disclaimer:
      'This is an educational implementation — not a validated psychometric instrument.',
    version: 'Item set: 2021 revision (five dimensions × four items).',
    startBtn: 'Start questionnaire',
    resetBtn: 'Reset',
    submitBtn: 'See my profile',
    progressText: (a, t) => `${a} of ${t} answered`,
    sectionLabel: (i, n) => `Section ${i} of ${n}`,
    resultsHeading: 'Your futures consciousness profile',
    retakeBtn: 'Retake',
    downloadBtn: 'Download chart (SVG)',
    reference:
      'Lalot, F., Ahvenharju, S., & Minkkinen, M. (2021). Aware of the future? Development and validation of the Futures Consciousness Scale.',
    aboutSummary: 'About the scale',
    aboutBody:
      'The Futures Consciousness Scale was developed by Ahvenharju, Minkkinen and Lauttamäki (2018) and refined by Lalot, Ahvenharju and Minkkinen (2021). It identifies five learnable competencies for thinking about and acting toward the future: time perspective, agency beliefs, openness to alternatives, systems perception and concern for others. Higher scores indicate greater futures consciousness across these dimensions, which is associated with long-term planning, sustainable behavior and adaptive decision-making.',
    kbdHint: 'Tip — answer with the keyboard: press 1–5 to choose, or use ← → to move between options.',
    likert: ['Strongly disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly agree'],
    score: (v) => `${v} / 5`,
    dimensions: {
      time: {
        name: 'Time Perspective',
        short: 'Time',
        description:
          'Orientation toward the long term — thinking about consequences far into the future when making decisions.',
      },
      agency: {
        name: 'Agency Beliefs',
        short: 'Agency',
        description:
          'Belief that you can influence the future through your own actions — a sense of efficacy and hope.',
      },
      openness: {
        name: 'Openness to Alternatives',
        short: 'Openness',
        description:
          'Willingness to question current views, consider alternatives, and tolerate uncertainty.',
      },
      systems: {
        name: 'Systems Perception',
        short: 'Systems',
        description:
          'Seeing how things are interconnected and understanding broader patterns and consequences.',
      },
      concern: {
        name: 'Concern for Others',
        short: 'Concern',
        description:
          'Care for other people, future generations, and the wider community and environment.',
      },
    },
    items: {
      t1: 'I think about how things will be in the long term.',
      t2: 'I have a clear vision of where I want to be in the future.',
      t3: 'I rarely think more than a few weeks ahead.',
      t4: 'I plan ahead in order to reach my long-term goals.',

      a1: 'I can shape my own future through my actions.',
      a2: 'What happens to me is mostly outside my control.',
      a3: 'I believe people can make a real difference in the world.',
      a4: 'I take responsibility for the future I am helping to create.',

      o1: 'I enjoy imagining how the world could be different.',
      o2: 'I am willing to question what I currently believe.',
      o3: 'I prefer to keep things as they are.',
      o4: 'I consider many different possibilities before deciding.',

      s1: 'I see how events in different areas of life are connected.',
      s2: 'I understand that small changes can have large effects over time.',
      s3: 'I tend to focus on one issue at a time without considering the whole.',
      s4: 'I notice patterns in how social and ecological systems behave.',

      c1: 'I feel a sense of responsibility toward future generations.',
      c2: 'The well-being of people I will never meet matters to me.',
      c3: 'I mostly focus on what is best for myself.',
      c4: 'I care about the environment and other living beings.',
    },
  },

  no: {
    title: 'Skala for fremtidsbevissthet',
    subtitle:
      'En selvvurdering av hvordan du forholder deg til fremtiden — på tvers av fem dimensjoner. Basert på den reviderte skalaen av Lalot, Ahvenharju & Minkkinen (2021).',
    introHeading: 'Slik fungerer det',
    introSteps: [
      'Vurder hver av de 20 påstandene på en skala fra 1 til 5 (Helt uenig → Helt enig).',
      'Påstandene er gruppert i fem dimensjoner av fremtidsbevissthet.',
      'Du får en skår for hver dimensjon og et stjernediagram over din profil.',
    ],
    disclaimer:
      'Dette er en pedagogisk implementasjon — ikke et validert psykometrisk instrument.',
    version: 'Spørsmålssett: 2021-revisjonen (fem dimensjoner × fire spørsmål).',
    startBtn: 'Start spørreskjema',
    resetBtn: 'Nullstill',
    submitBtn: 'Vis min profil',
    progressText: (a, t) => `${a} av ${t} besvart`,
    sectionLabel: (i, n) => `Del ${i} av ${n}`,
    resultsHeading: 'Din profil for fremtidsbevissthet',
    retakeBtn: 'Ta på nytt',
    downloadBtn: 'Last ned diagram (SVG)',
    reference:
      'Lalot, F., Ahvenharju, S., & Minkkinen, M. (2021). Aware of the future? Development and validation of the Futures Consciousness Scale.',
    aboutSummary: 'Om skalaen',
    aboutBody:
      'Skalaen for fremtidsbevissthet ble utviklet av Ahvenharju, Minkkinen og Lauttamäki (2018) og videreutviklet av Lalot, Ahvenharju og Minkkinen (2021). Den identifiserer fem lærbare kompetanser for å tenke om og handle med tanke på fremtiden: tidsperspektiv, tro på egen påvirkningskraft, åpenhet for alternativer, systemforståelse og omtanke for andre. Høyere skår indikerer større fremtidsbevissthet på tvers av disse dimensjonene, noe som er forbundet med langsiktig planlegging, bærekraftig atferd og adaptive beslutninger.',
    kbdHint: 'Tips — svar med tastatur: trykk 1–5 for å velge, eller bruk ← → for å bla mellom alternativer.',
    likert: ['Helt uenig', 'Uenig', 'Nøytral', 'Enig', 'Helt enig'],
    score: (v) => `${v} / 5`,
    dimensions: {
      time: {
        name: 'Tidsperspektiv',
        short: 'Tid',
        description:
          'Orientering mot det langsiktige — å tenke på konsekvenser langt inn i fremtiden når du tar beslutninger.',
      },
      agency: {
        name: 'Tro på egen påvirkningskraft',
        short: 'Påvirkning',
        description:
          'Tro på at du kan påvirke fremtiden gjennom egne handlinger — en følelse av handlekraft og håp.',
      },
      openness: {
        name: 'Åpenhet for alternativer',
        short: 'Åpenhet',
        description:
          'Vilje til å stille spørsmål ved nåværende oppfatninger, vurdere alternativer og tåle usikkerhet.',
      },
      systems: {
        name: 'Systemforståelse',
        short: 'System',
        description:
          'Å se hvordan ting henger sammen og forstå bredere mønstre og konsekvenser.',
      },
      concern: {
        name: 'Omtanke for andre',
        short: 'Omtanke',
        description:
          'Omsorg for andre mennesker, fremtidige generasjoner og det bredere samfunnet og miljøet.',
      },
    },
    items: {
      t1: 'Jeg tenker på hvordan ting vil være på lang sikt.',
      t2: 'Jeg har en klar visjon om hvor jeg vil være i fremtiden.',
      t3: 'Jeg tenker sjelden lenger fram enn noen uker.',
      t4: 'Jeg planlegger framover for å nå de langsiktige målene mine.',

      a1: 'Jeg kan forme min egen fremtid gjennom handlingene mine.',
      a2: 'Det som skjer med meg er stort sett utenfor min kontroll.',
      a3: 'Jeg tror folk kan utgjøre en reell forskjell i verden.',
      a4: 'Jeg tar ansvar for den fremtiden jeg er med på å skape.',

      o1: 'Jeg liker å forestille meg hvordan verden kunne vært annerledes.',
      o2: 'Jeg er villig til å stille spørsmål ved det jeg tror på.',
      o3: 'Jeg foretrekker å la ting være som de er.',
      o4: 'Jeg vurderer mange ulike muligheter før jeg bestemmer meg.',

      s1: 'Jeg ser hvordan hendelser på ulike livsområder henger sammen.',
      s2: 'Jeg forstår at små endringer kan få store konsekvenser over tid.',
      s3: 'Jeg har en tendens til å fokusere på én sak om gangen uten å se helheten.',
      s4: 'Jeg legger merke til mønstre i hvordan samfunn og økosystemer oppfører seg.',

      c1: 'Jeg føler ansvar for fremtidige generasjoner.',
      c2: 'Velferden til mennesker jeg aldri vil møte, betyr noe for meg.',
      c3: 'Jeg fokuserer mest på det som er best for meg selv.',
      c4: 'Jeg bryr meg om miljøet og andre levende vesener.',
    },
  },
};

const STORAGE_KEY = 'fcs-state-v2';

const STATE = {
  lang: 'en',
  answers: {},
};

function t() {
  return I18N[STATE.lang];
}

// ---------- Persistence ----------

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    if (data.lang && I18N[data.lang]) STATE.lang = data.lang;
    if (data.answers && typeof data.answers === 'object') {
      // Filter to valid ids and 1-5 values
      const known = new Set(QUESTIONS.map(q => q.id));
      Object.entries(data.answers).forEach(([k, v]) => {
        if (known.has(k) && Number.isInteger(v) && v >= 1 && v <= 5) {
          STATE.answers[k] = v;
        }
      });
    }
  } catch (_) { /* ignore */ }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      lang: STATE.lang,
      answers: STATE.answers,
    }));
  } catch (_) { /* ignore */ }
}

function clearState() {
  try { localStorage.removeItem(STORAGE_KEY); } catch (_) { /* ignore */ }
}

// ---------- Static text ----------

function applyStaticTexts() {
  const L = t();
  document.documentElement.lang = STATE.lang;
  document.title = L.title;
  document.getElementById('appTitle').textContent = L.title;
  document.getElementById('appSubtitle').textContent = L.subtitle;
  document.getElementById('introHeading').textContent = L.introHeading;

  const steps = document.getElementById('introSteps');
  steps.innerHTML = '';
  L.introSteps.forEach(s => {
    const li = document.createElement('li');
    li.textContent = s;
    steps.appendChild(li);
  });

  document.getElementById('disclaimer').textContent = L.disclaimer;
  document.getElementById('version').textContent = L.version;
  document.getElementById('startBtn').textContent = L.startBtn;
  document.getElementById('resetBtn').textContent = L.resetBtn;
  document.getElementById('submitBtn').textContent = L.submitBtn;
  document.getElementById('resultsHeading').textContent = L.resultsHeading;
  document.getElementById('retakeBtn').textContent = L.retakeBtn;
  document.getElementById('downloadBtn').textContent = L.downloadBtn;
  document.getElementById('reference').textContent = L.reference;
  document.getElementById('aboutSummary').textContent = L.aboutSummary;
  document.getElementById('aboutBody').textContent = L.aboutBody;

  // Render the keyboard hint with styled <kbd> chips, building from a template
  // so we don't have to inject raw HTML from translation strings.
  const hint = document.getElementById('kbdHint');
  hint.innerHTML = '';
  // Split on the literal tokens "1–5" and "← →" and wrap them in <kbd> chips
  const tokens = [['1–5', ['1', '–', '5']], ['← →', ['←', '→']]];
  let remaining = L.kbdHint;
  const frag = document.createDocumentFragment();
  while (remaining.length > 0) {
    let nextIdx = -1;
    let nextToken = null;
    for (const [tok] of tokens) {
      const idx = remaining.indexOf(tok);
      if (idx !== -1 && (nextIdx === -1 || idx < nextIdx)) {
        nextIdx = idx;
        nextToken = tok;
      }
    }
    if (nextIdx === -1) {
      frag.appendChild(document.createTextNode(remaining));
      break;
    }
    if (nextIdx > 0) {
      frag.appendChild(document.createTextNode(remaining.slice(0, nextIdx)));
    }
    const tokenSpec = tokens.find(([t]) => t === nextToken);
    const wrap = document.createElement('span');
    wrap.className = 'kbd-group';
    tokenSpec[1].forEach((ch, i) => {
      if (ch === '–') {
        wrap.appendChild(document.createTextNode(' – '));
      } else {
        const k = document.createElement('kbd');
        k.textContent = ch;
        wrap.appendChild(k);
        if (i < tokenSpec[1].length - 1 && tokenSpec[1][i + 1] !== '–') {
          wrap.appendChild(document.createTextNode(' '));
        }
      }
    });
    frag.appendChild(wrap);
    remaining = remaining.slice(nextIdx + nextToken.length);
  }
  hint.appendChild(frag);
}

// ---------- Progress segments ----------

function renderProgressSegments() {
  const container = document.getElementById('progressSegments');
  if (!container || container.childElementCount === DIMENSION_KEYS.length) return;
  container.innerHTML = '';
  DIMENSION_KEYS.forEach(k => {
    const seg = document.createElement('div');
    seg.className = 'progress-segment';
    seg.dataset.dim = k;
    const fill = document.createElement('div');
    fill.className = 'progress-segment-fill';
    seg.appendChild(fill);
    container.appendChild(seg);
  });
}

// ---------- Questionnaire ----------

function renderQuestions() {
  const L = t();
  const form = document.getElementById('questionsForm');
  form.innerHTML = '';

  let questionIndex = 0;
  DIMENSION_KEYS.forEach((dimKey, dimIndex) => {
    const dim = L.dimensions[dimKey];
    const dimQuestions = QUESTIONS.filter(q => q.dim === dimKey);

    const section = document.createElement('section');
    section.className = 'q-section';

    const header = document.createElement('div');
    header.className = 'q-section-header';

    const tag = document.createElement('span');
    tag.className = 'q-section-tag';
    tag.textContent = L.sectionLabel(dimIndex + 1, DIMENSION_KEYS.length);

    const title = document.createElement('h3');
    title.className = 'q-section-title';
    title.textContent = dim.name;

    const desc = document.createElement('p');
    desc.className = 'q-section-desc';
    desc.textContent = dim.description;

    header.appendChild(tag);
    header.appendChild(title);
    header.appendChild(desc);
    section.appendChild(header);

    dimQuestions.forEach(q => {
      questionIndex += 1;
      section.appendChild(renderQuestion(q, questionIndex, L));
    });

    form.appendChild(section);
  });

  updateProgress();
}

function renderQuestion(q, index, L) {
  const wrapper = document.createElement('div');
  wrapper.className = 'question';

  const top = document.createElement('div');
  top.className = 'question-top';

  const num = document.createElement('span');
  num.className = 'question-num';
  num.textContent = String(index).padStart(2, '0');

  const text = document.createElement('p');
  text.className = 'question-text';
  text.textContent = L.items[q.id];

  top.appendChild(num);
  top.appendChild(text);
  wrapper.appendChild(top);

  const likert = document.createElement('div');
  likert.className = 'likert';
  likert.setAttribute('role', 'radiogroup');
  likert.setAttribute('aria-label', L.items[q.id]);

  const track = document.createElement('div');
  track.className = 'likert-track';

  // Connecting line under the dots
  const line = document.createElement('div');
  line.className = 'likert-line';
  track.appendChild(line);

  for (let v = 1; v <= 5; v++) {
    const label = document.createElement('label');
    label.className = 'likert-dot';
    label.title = L.likert[v - 1];

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = q.id;
    input.value = String(v);
    input.setAttribute('aria-label', `${v} – ${L.likert[v - 1]}`);
    if (STATE.answers[q.id] === v) input.checked = true;
    input.addEventListener('change', () => {
      STATE.answers[q.id] = v;
      saveState();
      updateProgress();
      // Update visual state for siblings
      const dots = label.parentElement.querySelectorAll('.likert-dot');
      dots.forEach((d, i) => d.classList.toggle('checked', i + 1 === v));
    });

    const circle = document.createElement('span');
    circle.className = 'dot';
    circle.setAttribute('aria-hidden', 'true');
    circle.textContent = String(v);

    label.appendChild(input);
    label.appendChild(circle);
    if (STATE.answers[q.id] === v) label.classList.add('checked');
    track.appendChild(label);
  }

  const labels = document.createElement('div');
  labels.className = 'likert-endpoints';
  const left = document.createElement('span');
  left.textContent = L.likert[0];
  const right = document.createElement('span');
  right.textContent = L.likert[4];
  labels.appendChild(left);
  labels.appendChild(right);

  likert.appendChild(track);
  likert.appendChild(labels);
  wrapper.appendChild(likert);

  return wrapper;
}

function updateProgress() {
  const L = t();
  const total = QUESTIONS.length;
  const answered = Object.keys(STATE.answers).length;
  document.getElementById('progressText').textContent = L.progressText(answered, total);
  document.getElementById('submitBtn').disabled = answered < total;

  DIMENSION_KEYS.forEach(k => {
    const dimQs = QUESTIONS.filter(q => q.dim === k);
    const dimAnswered = dimQs.filter(q => STATE.answers[q.id] != null).length;
    const pct = (dimAnswered / dimQs.length) * 100;
    const seg = document.querySelector(`.progress-segment[data-dim="${k}"]`);
    if (!seg) return;
    seg.classList.toggle('complete', dimAnswered === dimQs.length);
    const fill = seg.querySelector('.progress-segment-fill');
    if (fill) fill.style.width = pct + '%';
  });
}

// ---------- Scoring ----------

function computeScores() {
  const L = t();
  const sums = {};
  const counts = {};
  DIMENSION_KEYS.forEach(k => { sums[k] = 0; counts[k] = 0; });

  QUESTIONS.forEach(q => {
    const raw = STATE.answers[q.id];
    if (raw == null) return;
    const value = q.reverse ? 6 - raw : raw;
    sums[q.dim] += value;
    counts[q.dim] += 1;
  });

  return DIMENSION_KEYS.map(k => ({
    key: k,
    name: L.dimensions[k].name,
    short: L.dimensions[k].short,
    description: L.dimensions[k].description,
    mean: counts[k] ? sums[k] / counts[k] : 0,
  }));
}

// ---------- Star chart (SVG) ----------

const NS = 'http://www.w3.org/2000/svg';

function svgEl(name, attrs = {}) {
  const el = document.createElementNS(NS, name);
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, String(v)));
  return el;
}

function renderRadar(scores) {
  const svg = document.getElementById('radarChart');
  svg.innerHTML = '';

  const R = 160;
  const LEVELS = 5;
  const INNER_RATIO = 0.382; // golden ratio for a regular 5-pointed star
  const n = scores.length;

  const outerAngle = i => -Math.PI / 2 + (i * 2 * Math.PI) / n;
  const innerAngle = i => -Math.PI / 2 + ((i + 0.5) * 2 * Math.PI) / n;

  // Defs: gradient + glow filter
  const defs = svgEl('defs');
  const grad = svgEl('radialGradient', { id: 'starGradient', cx: '50%', cy: '50%', r: '60%' });
  grad.appendChild(svgEl('stop', { offset: '0%', 'stop-color': '#fde68a', 'stop-opacity': '0.95' }));
  grad.appendChild(svgEl('stop', { offset: '55%', 'stop-color': '#a78bfa', 'stop-opacity': '0.7' }));
  grad.appendChild(svgEl('stop', { offset: '100%', 'stop-color': '#38bdf8', 'stop-opacity': '0.35' }));
  defs.appendChild(grad);

  const filter = svgEl('filter', { id: 'starGlow', x: '-30%', y: '-30%', width: '160%', height: '160%' });
  filter.appendChild(svgEl('feGaussianBlur', { stdDeviation: '4', result: 'blur' }));
  const merge = svgEl('feMerge');
  merge.appendChild(svgEl('feMergeNode', { in: 'blur' }));
  merge.appendChild(svgEl('feMergeNode', { in: 'SourceGraphic' }));
  filter.appendChild(merge);
  defs.appendChild(filter);

  svg.appendChild(defs);

  // Concentric pentagon grid at each Likert level
  for (let level = 1; level <= LEVELS; level++) {
    const r = (R * level) / LEVELS;
    const pts = [];
    for (let i = 0; i < n; i++) {
      const a = outerAngle(i);
      pts.push(`${(r * Math.cos(a)).toFixed(2)},${(r * Math.sin(a)).toFixed(2)}`);
    }
    svg.appendChild(svgEl('polygon', { points: pts.join(' '), class: 'radar-grid' }));
  }

  // Radial axes
  for (let i = 0; i < n; i++) {
    const a = outerAngle(i);
    svg.appendChild(svgEl('line', {
      x1: 0, y1: 0,
      x2: (R * Math.cos(a)).toFixed(2),
      y2: (R * Math.sin(a)).toFixed(2),
      class: 'radar-axis',
    }));
  }

  // Tick numbers along top axis
  for (let level = 1; level <= LEVELS; level++) {
    const y = -(R * level) / LEVELS;
    const tx = svgEl('text', {
      x: 6, y: y.toFixed(2),
      class: 'radar-tick-label',
      'text-anchor': 'start',
    });
    tx.textContent = String(level);
    svg.appendChild(tx);
  }

  // Axis labels (dimension short names) — pushed further out so viewBox padding handles the longest words
  for (let i = 0; i < n; i++) {
    const a = outerAngle(i);
    const labelR = R + 38;
    const x = labelR * Math.cos(a);
    const y = labelR * Math.sin(a);
    const tx = svgEl('text', {
      x: x.toFixed(2), y: y.toFixed(2),
      class: 'radar-axis-label',
    });
    if (x > 5) tx.setAttribute('text-anchor', 'start');
    else if (x < -5) tx.setAttribute('text-anchor', 'end');
    else tx.setAttribute('text-anchor', 'middle');
    tx.textContent = scores[i].short;
    svg.appendChild(tx);
  }

  // Data: real 5-pointed star. 10 vertices alternating outer (tip = score) / inner notch.
  // Inner notch scales with average of neighboring scores so the shape stays coherent.
  const starPts = [];
  const outerCoords = [];
  for (let i = 0; i < n; i++) {
    const oa = outerAngle(i);
    const oScore = scores[i].mean;
    const oR = (R * oScore) / LEVELS;
    const ox = oR * Math.cos(oa);
    const oy = oR * Math.sin(oa);
    starPts.push(`${ox.toFixed(2)},${oy.toFixed(2)}`);
    outerCoords.push({ x: ox, y: oy });

    const ia = innerAngle(i);
    const neighborAvg = (scores[i].mean + scores[(i + 1) % n].mean) / 2;
    const iR = (R * neighborAvg) / LEVELS * INNER_RATIO;
    const ix = iR * Math.cos(ia);
    const iy = iR * Math.sin(ia);
    starPts.push(`${ix.toFixed(2)},${iy.toFixed(2)}`);
  }

  svg.appendChild(svgEl('polygon', {
    points: starPts.join(' '),
    class: 'radar-polygon',
    filter: 'url(#starGlow)',
  }));

  // Tips emphasized as small markers
  outerCoords.forEach(p => {
    svg.appendChild(svgEl('circle', {
      cx: p.x.toFixed(2),
      cy: p.y.toFixed(2),
      r: 4.5,
      class: 'radar-point',
    }));
  });
}

function renderScores(scores) {
  const L = t();
  const list = document.getElementById('scoresList');
  list.innerHTML = '';
  scores.forEach(s => {
    const row = document.createElement('div');
    row.className = 'score-row';

    const name = document.createElement('div');
    name.className = 'name';
    name.textContent = s.name;

    const value = document.createElement('div');
    value.className = 'value';
    value.textContent = L.score(s.mean.toFixed(2));

    const bar = document.createElement('div');
    bar.className = 'score-bar';
    const fill = document.createElement('div');
    fill.style.width = (s.mean / 5 * 100).toFixed(1) + '%';
    bar.appendChild(fill);

    row.appendChild(name);
    row.appendChild(value);
    row.appendChild(bar);
    list.appendChild(row);
  });

  const desc = document.getElementById('descriptions');
  desc.innerHTML = '';
  scores.forEach(s => {
    const card = document.createElement('div');
    card.className = 'dim-card';
    const h = document.createElement('h3');
    h.textContent = s.name;
    const p = document.createElement('p');
    p.textContent = s.description;
    card.appendChild(h);
    card.appendChild(p);
    desc.appendChild(card);
  });
}

function refreshResultsIfVisible() {
  if (!document.getElementById('results').classList.contains('hidden')) {
    const scores = computeScores();
    renderRadar(scores);
    renderScores(scores);
  }
}

// ---------- Flow ----------

function show(id) {
  ['intro', 'questionnaire', 'results'].forEach(s => {
    document.getElementById(s).classList.toggle('hidden', s !== id);
  });
}

function startQuestionnaire() {
  renderQuestions();
  show('questionnaire');
  document.getElementById('questionnaire').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function submitQuestionnaire() {
  const scores = computeScores();
  renderRadar(scores);
  renderScores(scores);
  show('results');
  document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function reset() {
  STATE.answers = {};
  clearState();
  saveState();
  renderQuestions();
}

function retake() {
  reset();
  show('intro');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setLang(lang) {
  if (!I18N[lang] || STATE.lang === lang) return;
  STATE.lang = lang;
  saveState();
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  applyStaticTexts();
  renderQuestions();
  refreshResultsIfVisible();
}

function downloadChart() {
  const svg = document.getElementById('radarChart');
  const clone = svg.cloneNode(true);
  clone.setAttribute('xmlns', NS);

  const style = svgEl('style');
  style.textContent = `
    .radar-grid { fill: none; stroke: #cbd5e1; stroke-width: 1; }
    .radar-axis { stroke: #cbd5e1; stroke-width: 1; }
    .radar-axis-label { fill: #0f172a; font-family: 'Space Grotesk', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; }
    .radar-tick-label { fill: #64748b; font-family: 'Space Grotesk', sans-serif; font-size: 10px; }
    .radar-polygon { fill: url(#starGradient); fill-opacity: 0.85; stroke: #6d28d9; stroke-width: 2; stroke-linejoin: round; }
    .radar-point { fill: #fde68a; stroke: #6d28d9; stroke-width: 1.5; }
    text { dominant-baseline: middle; }
  `;
  clone.insertBefore(style, clone.firstChild);

  const bg = svgEl('rect', { x: -270, y: -270, width: 540, height: 540, fill: '#ffffff' });
  clone.insertBefore(bg, clone.firstChild);

  const data = new XMLSerializer().serializeToString(clone);
  const blob = new Blob([data], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'futures-consciousness-profile.svg';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ---------- Starfield ----------

function mulberry32(seed) {
  let s = seed | 0;
  return function () {
    s = (s + 0x6D2B79F5) | 0;
    let x = Math.imul(s ^ (s >>> 15), 1 | s);
    x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x;
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
}

function renderStarfield() {
  if (document.querySelector('.starfield')) return;
  const container = document.createElement('div');
  container.className = 'starfield';
  container.setAttribute('aria-hidden', 'true');

  const svg = svgEl('svg', {
    xmlns: NS,
    viewBox: '0 0 1000 1000',
    preserveAspectRatio: 'xMidYMid slice',
  });

  const rng = mulberry32(20260517);
  const numStars = 140;
  for (let i = 0; i < numStars; i++) {
    const x = rng() * 1000;
    const y = rng() * 1000;
    const r = (0.3 + rng() * 1.4).toFixed(2);
    const opacity = (0.25 + rng() * 0.7).toFixed(2);
    // Occasional warm star
    const fill = rng() < 0.08 ? '#fde68a' : (rng() < 0.15 ? '#c4b5fd' : '#e2e8f0');
    svg.appendChild(svgEl('circle', {
      cx: x.toFixed(1),
      cy: y.toFixed(1),
      r,
      fill,
      opacity,
    }));
  }
  container.appendChild(svg);
  document.body.prepend(container);
}

// ---------- Keyboard support on Likert ----------

function handleLikertKeydown(e) {
  if (e.key < '1' || e.key > '5') return;
  const likert = e.target.closest('.likert');
  if (!likert) return;
  const v = parseInt(e.key, 10);
  const inputs = likert.querySelectorAll('input[type="radio"]');
  const target = inputs[v - 1];
  if (!target) return;
  target.checked = true;
  target.dispatchEvent(new Event('change', { bubbles: true }));
  target.focus();
  e.preventDefault();
}

// ---------- Init ----------

renderStarfield();
renderProgressSegments();

document.getElementById('questionsForm').addEventListener('keydown', handleLikertKeydown);
document.getElementById('startBtn').addEventListener('click', startQuestionnaire);
document.getElementById('submitBtn').addEventListener('click', submitQuestionnaire);
document.getElementById('resetBtn').addEventListener('click', reset);
document.getElementById('retakeBtn').addEventListener('click', retake);
document.getElementById('downloadBtn').addEventListener('click', downloadChart);
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

loadState();
document.querySelectorAll('.lang-btn').forEach(b => {
  b.classList.toggle('active', b.dataset.lang === STATE.lang);
});
applyStaticTexts();
// If the user had answers saved, jump straight to the questionnaire
if (Object.keys(STATE.answers).length > 0) {
  startQuestionnaire();
}
