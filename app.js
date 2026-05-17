// Futures Consciousness Scale — educational implementation.
// Items reflect the 2021 revision of the FCS (Lalot, Ahvenharju & Minkkinen, 2021):
// five dimensions, 4 items per dimension, 5-point Likert with reverse-scored items.
// Wording is paraphrased for educational use; not a validated psychometric instrument.

const DIMENSION_KEYS = ['time', 'agency', 'openness', 'systems', 'concern'];

// Question structure: id, dim, reverse flag. Text comes from I18N per language.
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
      'Some statements are reverse-scored; the app handles that for you.',
      "You'll get a score for each of the five dimensions and a star diagram of your profile.",
    ],
    disclaimer:
      'This is an educational implementation — not a validated psychometric instrument.',
    version: 'Item set: 2021 revision (five dimensions × four items).',
    startBtn: 'Start questionnaire',
    resetBtn: 'Reset',
    submitBtn: 'See my profile',
    progressText: (a, t) => `${a} of ${t} answered`,
    reverseTag: 'reverse-scored',
    resultsHeading: 'Your futures consciousness profile',
    retakeBtn: 'Retake',
    downloadBtn: 'Download chart (SVG)',
    reference:
      'Lalot, F., Ahvenharju, S., & Minkkinen, M. (2021). Aware of the future? Development and validation of the Futures Consciousness Scale.',
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
      'Noen påstander er omvendt skåret; appen håndterer dette automatisk.',
      'Du får en skår for hver av de fem dimensjonene og et stjernediagram over din profil.',
    ],
    disclaimer:
      'Dette er en pedagogisk implementasjon — ikke et validert psykometrisk instrument.',
    version: 'Spørsmålssett: 2021-revisjonen (fem dimensjoner × fire spørsmål).',
    startBtn: 'Start spørreskjema',
    resetBtn: 'Nullstill',
    submitBtn: 'Vis min profil',
    progressText: (a, t) => `${a} av ${t} besvart`,
    reverseTag: 'omvendt skåring',
    resultsHeading: 'Din profil for fremtidsbevissthet',
    retakeBtn: 'Ta på nytt',
    downloadBtn: 'Last ned diagram (SVG)',
    reference:
      'Lalot, F., Ahvenharju, S., & Minkkinen, M. (2021). Aware of the future? Development and validation of the Futures Consciousness Scale.',
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

const STATE = {
  lang: 'en',
  answers: {}, // id -> 1..5
};

function t() {
  return I18N[STATE.lang];
}

// ---------- Rendering ----------

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
}

function renderQuestions() {
  const L = t();
  const form = document.getElementById('questionsForm');
  form.innerHTML = '';

  QUESTIONS.forEach((q, i) => {
    const dim = L.dimensions[q.dim];
    const wrapper = document.createElement('div');
    wrapper.className = 'question';

    const meta = document.createElement('div');
    meta.className = 'question-meta';
    meta.textContent = `${i + 1}. ${dim.name}${q.reverse ? ` (${L.reverseTag})` : ''}`;
    wrapper.appendChild(meta);

    const text = document.createElement('p');
    text.className = 'question-text';
    text.textContent = L.items[q.id];
    wrapper.appendChild(text);

    const likert = document.createElement('div');
    likert.className = 'likert';
    likert.setAttribute('role', 'radiogroup');
    likert.setAttribute('aria-label', L.items[q.id]);

    for (let v = 1; v <= 5; v++) {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = q.id;
      input.value = String(v);
      if (STATE.answers[q.id] === v) input.checked = true;
      input.addEventListener('change', () => {
        STATE.answers[q.id] = v;
        updateProgress();
      });

      const num = document.createElement('span');
      num.className = 'num';
      num.textContent = String(v);

      const txt = document.createElement('span');
      txt.className = 'value';
      txt.textContent = L.likert[v - 1];

      label.appendChild(input);
      label.appendChild(num);
      label.appendChild(txt);
      likert.appendChild(label);
    }

    wrapper.appendChild(likert);
    form.appendChild(wrapper);
  });

  updateProgress();
}

function updateProgress() {
  const L = t();
  const total = QUESTIONS.length;
  const answered = Object.keys(STATE.answers).length;
  const pct = (answered / total) * 100;
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressText').textContent = L.progressText(answered, total);
  document.getElementById('submitBtn').disabled = answered < total;
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

// ---------- Radar chart (SVG) ----------

function renderRadar(scores) {
  const svg = document.getElementById('radarChart');
  svg.innerHTML = '';

  const NS = 'http://www.w3.org/2000/svg';
  const RADIUS = 160;
  const LEVELS = 5;
  const n = scores.length;

  const defs = document.createElementNS(NS, 'defs');
  const grad = document.createElementNS(NS, 'radialGradient');
  grad.setAttribute('id', 'radarGradient');
  grad.setAttribute('cx', '50%');
  grad.setAttribute('cy', '50%');
  grad.setAttribute('r', '50%');
  const stop1 = document.createElementNS(NS, 'stop');
  stop1.setAttribute('offset', '0%');
  stop1.setAttribute('stop-color', '#a78bfa');
  stop1.setAttribute('stop-opacity', '0.9');
  const stop2 = document.createElementNS(NS, 'stop');
  stop2.setAttribute('offset', '100%');
  stop2.setAttribute('stop-color', '#38bdf8');
  stop2.setAttribute('stop-opacity', '0.4');
  grad.appendChild(stop1);
  grad.appendChild(stop2);
  defs.appendChild(grad);
  svg.appendChild(defs);

  const angleFor = i => -Math.PI / 2 + (i * 2 * Math.PI) / n;

  for (let level = 1; level <= LEVELS; level++) {
    const r = (RADIUS * level) / LEVELS;
    const points = [];
    for (let i = 0; i < n; i++) {
      const a = angleFor(i);
      points.push(`${(r * Math.cos(a)).toFixed(2)},${(r * Math.sin(a)).toFixed(2)}`);
    }
    const poly = document.createElementNS(NS, 'polygon');
    poly.setAttribute('points', points.join(' '));
    poly.setAttribute('class', 'radar-grid');
    svg.appendChild(poly);
  }

  for (let i = 0; i < n; i++) {
    const a = angleFor(i);
    const x = RADIUS * Math.cos(a);
    const y = RADIUS * Math.sin(a);
    const line = document.createElementNS(NS, 'line');
    line.setAttribute('x1', '0');
    line.setAttribute('y1', '0');
    line.setAttribute('x2', x.toFixed(2));
    line.setAttribute('y2', y.toFixed(2));
    line.setAttribute('class', 'radar-axis');
    svg.appendChild(line);
  }

  for (let level = 1; level <= LEVELS; level++) {
    const y = -(RADIUS * level) / LEVELS;
    const tx = document.createElementNS(NS, 'text');
    tx.setAttribute('x', '6');
    tx.setAttribute('y', y.toFixed(2));
    tx.setAttribute('class', 'radar-tick-label');
    tx.setAttribute('text-anchor', 'start');
    tx.textContent = String(level);
    svg.appendChild(tx);
  }

  for (let i = 0; i < n; i++) {
    const a = angleFor(i);
    const labelR = RADIUS + 28;
    const x = labelR * Math.cos(a);
    const y = labelR * Math.sin(a);
    const tx = document.createElementNS(NS, 'text');
    tx.setAttribute('x', x.toFixed(2));
    tx.setAttribute('y', y.toFixed(2));
    tx.setAttribute('class', 'radar-axis-label');
    if (x > 5) tx.setAttribute('text-anchor', 'start');
    else if (x < -5) tx.setAttribute('text-anchor', 'end');
    else tx.setAttribute('text-anchor', 'middle');
    tx.textContent = scores[i].short;
    svg.appendChild(tx);
  }

  const dataPoints = [];
  const pointCoords = [];
  for (let i = 0; i < n; i++) {
    const a = angleFor(i);
    const r = (RADIUS * scores[i].mean) / LEVELS;
    const x = r * Math.cos(a);
    const y = r * Math.sin(a);
    dataPoints.push(`${x.toFixed(2)},${y.toFixed(2)}`);
    pointCoords.push({ x, y });
  }
  const dataPoly = document.createElementNS(NS, 'polygon');
  dataPoly.setAttribute('points', dataPoints.join(' '));
  dataPoly.setAttribute('class', 'radar-polygon');
  svg.appendChild(dataPoly);

  pointCoords.forEach(p => {
    const c = document.createElementNS(NS, 'circle');
    c.setAttribute('cx', p.x.toFixed(2));
    c.setAttribute('cy', p.y.toFixed(2));
    c.setAttribute('r', '4');
    c.setAttribute('class', 'radar-point');
    svg.appendChild(c);
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
  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  const style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
  style.textContent = `
    .radar-grid { fill: none; stroke: #cbd5e1; stroke-width: 1; }
    .radar-axis { stroke: #cbd5e1; stroke-width: 1; }
    .radar-axis-label { fill: #0f172a; font-family: sans-serif; font-size: 13px; font-weight: 600; }
    .radar-tick-label { fill: #64748b; font-family: sans-serif; font-size: 10px; }
    .radar-polygon { fill: rgba(167,139,250,0.45); stroke: #38bdf8; stroke-width: 2; stroke-linejoin: round; }
    .radar-point { fill: #a78bfa; stroke: #fff; stroke-width: 1.5; }
    text { dominant-baseline: middle; }
  `;
  clone.insertBefore(style, clone.firstChild);

  const bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  bg.setAttribute('x', '-220');
  bg.setAttribute('y', '-220');
  bg.setAttribute('width', '440');
  bg.setAttribute('height', '440');
  bg.setAttribute('fill', '#ffffff');
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

// ---------- Init ----------

document.getElementById('startBtn').addEventListener('click', startQuestionnaire);
document.getElementById('submitBtn').addEventListener('click', submitQuestionnaire);
document.getElementById('resetBtn').addEventListener('click', reset);
document.getElementById('retakeBtn').addEventListener('click', retake);
document.getElementById('downloadBtn').addEventListener('click', downloadChart);
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

// Initial paint
applyStaticTexts();
