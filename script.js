/* ===========================================================
   BILINGUAL DICTIONARY (EN / PT-BR)
=========================================================== */
const I18N = {
  en: {
    loading: "LOADING...",
    intro:
      "<p>Hello! I'm Felipe — a software developer focused on building fast, interactive web applications and practical automation tools.</p>" +
      "<p>From 3D browser experiences to clean, responsive interfaces, I write code that turns ideas into reliable software.</p>",
    skillInfra: "IT Infrastructure",
    showcaseEyebrow: "SELECTED WORK & LIVE DEMOS",
    showcaseTitle: "Projects in Action",
    carouselHint:
      "Swipe or use the arrows to explore — click any screenshot to zoom.",
    contactPrompt: "Interested in working together? Reach out!",
    contactBtn: "Contact",
    contactTitle: "Contact Me",
    labelName: "Name:",
    phName: "Your name",
    labelEmail: "Your best email:",
    phEmail: "email@example.com",
    labelMsg: "Your message:",
    phMsg: "Write your message...",
    sendBtn: "Send",
    footer: "© 2026 Felipe Vicentini — Powered by synthwave & caffeine",
    videoTab: "Demo",
    shotTab: "Shot",
    liveBadge: "GAMEPLAY LOOP",
    shotBadge: "SCREENSHOT",
    expandLabel: "Expand image",
    prevMediaLabel: "Previous media",
    nextMediaLabel: "Next media",
  },
  pt: {
    loading: "CARREGANDO...",
    intro:
      "<p>Olá! Eu sou o Felipe — desenvolvedor de software focado em criar aplicações web rápidas, interativas e ferramentas práticas de automação.</p>" +
      "<p>De experiências 3D no navegador a interfaces limpas e responsivas, transformo ideias em software confiável.</p>",
    skillInfra: "Infraestrutura de TI",
    showcaseEyebrow: "PROJETOS EM DESTAQUE & DEMOS AO VIVO",
    showcaseTitle: "Projetos em Ação",
    carouselHint:
      "Deslize ou use as setas para explorar — clique nas imagens para ampliar.",
    contactPrompt: "Quer conversar sobre uma oportunidade ou projeto? Fale comigo!",
    contactBtn: "Contato",
    contactTitle: "Fale Comigo",
    labelName: "Nome:",
    phName: "Seu nome",
    labelEmail: "Seu melhor e-mail:",
    phEmail: "email@exemplo.com",
    labelMsg: "Sua mensagem:",
    phMsg: "Escreva sua mensagem...",
    sendBtn: "Enviar",
    footer: "© 2026 Felipe Vicentini — Movido a synthwave & cafeína",
    videoTab: "Demo",
    shotTab: "Tela",
    liveBadge: "GAMEPLAY LOOP",
    shotBadge: "CAPTURA",
    expandLabel: "Ampliar imagem",
    prevMediaLabel: "Mídia anterior",
    nextMediaLabel: "Próxima mídia",
  },
};

/* ===========================================================
   6 PORTFOLIO PROJECTS (Exact Requested Order)
=========================================================== */
const PROJECTS = [
  {
    id: "roc-and-load",
    shortLabel: "Roc & Load",
    title: "Roc and Load!",
    category: { en: "3D FPS · Custom Engine", pt: "FPS 3D · Engine Própria" },
    description: {
      en: "Modular first-person 3D shooter built on a custom browser engine — featuring zombie wave AI, object pooling, BVH collision, spring-physics weapon viewmodels, an in-game gun shop economy, and built-in dev tools.",
      pt: "FPS 3D modular construído sobre uma engine própria no navegador — com IA de ondas de inimigos, object pooling, colisão BVH, física de armas em primeira pessoa, loja/economia in-game e painel de dev tools.",
    },
    tags: ["JavaScript", "Three.js", "three-mesh-bvh", "Tween.js", "Vite", "Postprocessing"],
    media: [
      {
        type: "video",
        mp4: "projectsMedia/roc-and-load-video.mp4",
        poster: "projectsMedia/roc-and-load-print1.webp",
        fitCover: "center",
      },
      { type: "image", src: "projectsMedia/roc-and-load-print1.webp", alt: "Roc and Load title screen", fitCover: "center" },
      { type: "image", src: "projectsMedia/roc-and-load-print2.webp", alt: "Roc and Load 3D office gameplay", fitCover: "center" },
      { type: "image", src: "projectsMedia/roc-and-load-print3.webp", alt: "Roc and Load combat action", fitCover: "center" },
    ],
    links: [
      {
        url: "https://vbfelipe.github.io/roc-and-load/",
        label: { en: "Play Live (PC)", pt: "Jogar Agora (PC)" },
        icon: "play",
        primary: true,
      },
      {
        url: "https://github.com/vbfelipe/roc-and-load",
        label: { en: "View Source on GitHub", pt: "Ver Código no GitHub" },
        primary: false,
      },
    ],
  },
  {
    id: "cala-a-boca-cruzado",
    shortLabel: "Cala a Boca!",
    title: "Cala a Boca, Cruzado!",
    category: { en: "3D Arcade Mini-Game", pt: "Mini-Game Arcade 3D" },
    description: {
      en: "High-tempo 3D 'whack-a-mole' arcade cabinet featuring a custom procedural Web Audio synthesizer with lookahead scheduling, combo/fury state machine, and responsive touch/mouse input.",
      pt: "Fliperama 3D estilo 'jogo da toupeira' com sintetizador de áudio procedural via Web Audio API, máquina de estados de combo/fúria e suporte responsivo a mouse e toque.",
    },
    tags: ["JavaScript", "Three.js", "Tween.js", "Web Audio API"],
    media: [
      {
        type: "video",
        mp4: "projectsMedia/cala-a-boca-cruzado-video.mp4",
        poster: "projectsMedia/cala-a-boca-cruzado-print1.webp",
      },
      { type: "image", src: "projectsMedia/cala-a-boca-cruzado-print1.webp", alt: "Cala a Boca Cruzado 3D cabinet" },
      { type: "image", src: "projectsMedia/cala-a-boca-cruzado-print2.webp", alt: "Cala a Boca Cruzado fury mode" },
      { type: "image", src: "projectsMedia/cala-a-boca-cruzado-print3.webp", alt: "Cala a Boca Cruzado gameplay" },
    ],
    links: [
      {
        url: "https://vbfelipe.github.io/cala-a-boca-cruzado/",
        label: { en: "Play Live", pt: "Jogar Agora" },
        icon: "play",
        primary: true,
      },
      {
        url: "https://github.com/vbfelipe/cala-a-boca-cruzado",
        label: { en: "View Source on GitHub", pt: "Ver Código no GitHub" },
        primary: false,
      },
    ],
  },
  {
    id: "cybercity-signal-hunt",
    shortLabel: "Cybercity",
    title: "Cybercity Signal Hunt",
    category: { en: "2D Reflex Mini-Game", pt: "Mini-Game de Reflexo 2D" },
    description: {
      en: "Cyberpunk reflex mini-game built on dual HTML5 Canvas layers—combining a real-time Matrix digital rain background, DPI-aware particle explosions, pause state control, and 4 difficulty modes.",
      pt: "Mini-game cyberpunk de reflexo em camadas duplas de HTML5 Canvas, com chuva Matrix em tempo real, explosões de partículas High-DPI, sistema de pausa e 4 dificuldades.",
    },
    tags: ["JavaScript", "Canvas API", "HTML", "CSS"],
    media: [
      {
        type: "video",
        mp4: "projectsMedia/cybercity-video.mp4",
        poster: "projectsMedia/cybercity-print1.webp",
        fitCover: "center",
      },
      { type: "image", src: "projectsMedia/cybercity-print1.webp", alt: "Cybercity Signal Hunt start screen" },
      { type: "image", src: "projectsMedia/cybercity-print2.webp", alt: "Cybercity Signal Hunt target lock" },
      { type: "image", src: "projectsMedia/cybercity-print3.webp", alt: "Cybercity Signal Hunt score screen" },
    ],
    links: [
      {
        url: "https://vbfelipe.github.io/cybercity-signal-hunt/",
        label: { en: "Play Live", pt: "Jogar Agora" },
        icon: "play",
        primary: true,
      },
      {
        url: "https://github.com/vbfelipe/cybercity-signal-hunt",
        label: { en: "View Source on GitHub", pt: "Ver Código no GitHub" },
        primary: false,
      },
    ],
  },
  {
    id: "fantasy-name-generator",
    shortLabel: "Fantasy Gen",
    title: "Fantasy Name Generator",
    category: { en: "Procedural Web Tool", pt: "Ferramenta Procedural" },
    description: {
      en: "Procedural character name generator powered by a curated 1,000+ syllable pool across distinct realms (Human, Elven, Dark, Random), paired with dynamic theme state and glassmorphic UI.",
      pt: "Gerador procedural de nomes de fantasia com +1.000 sílabas divididas por reinos (Humano, Élfico, Sombrio e Aleatório), troca dinâmica de temas e interface glassmorphism.",
    },
    tags: ["JavaScript", "HTML", "CSS"],
    media: [
      {
        type: "video",
        mp4: "projectsMedia/fantasy-video.mp4",
        poster: "projectsMedia/fantasy-print1.webp",
        fitCover: true,
      },
      { type: "image", src: "projectsMedia/fantasy-print1.webp", alt: "Fantasy Name Generator Human Realm", fitCover: true },
      { type: "image", src: "projectsMedia/fantasy-print2.webp", alt: "Fantasy Name Generator Elven Realm", fitCover: true },
      { type: "image", src: "projectsMedia/fantasy-print3.webp", alt: "Fantasy Name Generator Dark Realm", fitCover: true },
    ],
    links: [
      {
        url: "https://vbfelipe.github.io/fantasy-name-generator/",
        label: { en: "Open App", pt: "Abrir App" },
        icon: "play",
        primary: true,
      },
      {
        url: "https://github.com/vbfelipe/fantasy-name-generator",
        label: { en: "View Source on GitHub", pt: "Ver Código no GitHub" },
        primary: false,
      },
    ],
  },
  {
    id: "jornada-viagens",
    shortLabel: "Jornada Viagens",
    title: "Jornada Viagens",
    category: { en: "Multi-Page Website", pt: "Site Multi-Página" },
    description: {
      en: "Multi-page travel agency front-end demonstrating clean semantic HTML5 markup, responsive Flexbox & CSS Grid layouts, destination package cards, testimonials, and mobile-first craft.",
      pt: "Front-end multi-página de agência de viagens com HTML5 semântico, layouts responsivos em Flexbox e Grid, vitrine de pacotes turísticos, depoimentos e abordagem mobile-first.",
    },
    tags: ["HTML", "CSS", "Flexbox", "CSS Grid"],
    media: [
      {
        type: "video",
        mp4: "projectsMedia/jornada-video.mp4",
        poster: "projectsMedia/jornada-print1.webp",
      },
      { type: "image", src: "projectsMedia/jornada-print1.webp", alt: "Jornada Viagens hero header" },
      { type: "image", src: "projectsMedia/jornada-print2.webp", alt: "Jornada Viagens destinations showcase" },
      { type: "image", src: "projectsMedia/jornada-print3.webp", alt: "Jornada Viagens travel sections" },
    ],
    links: [
      {
        url: "https://github.com/vbfelipe/jornada-viagens",
        label: { en: "View Source on GitHub", pt: "Ver Código no GitHub" },
        primary: false,
      },
    ],
  },
  {
    id: "python-automation",
    shortLabel: "Python Tools",
    title: "Python IT Automation",
    category: { en: "Python Automation Scripts", pt: "Scripts de Automação" },
    description: {
      en: "Practical Python tools uniting coding with everyday IT support workflows: a desktop Tkinter + PyPDF2 GUI for instant PDF text extraction, and an automated Microsoft 365 STARTTLS email dispatcher.",
      pt: "Utilitários em Python aplicados a rotinas de TI: extrator desktop de texto em PDF com interface Tkinter + PyPDF2 e disparador automatizado de e-mails via SMTP/TLS (Office 365).",
    },
    tags: ["Python", "Tkinter", "PyPDF2", "Pillow", "smtplib"],
    media: [
      {
        type: "image",
        src: "projectsMedia/python-tools-print1.webp",
        alt: "ExtratorTextoPDF Python Tkinter and PyPDF2 tool",
        tabLabel: { en: "PDF Extractor", pt: "Extrator PDF" },
      },
      {
        type: "image",
        src: "projectsMedia/python-tools-print2.webp",
        alt: "EnvioEmail-viaPython Office 365 SMTP script",
        tabLabel: { en: "SMTP Mailer", pt: "Envio SMTP" },
      },
    ],
    links: [
      {
        url: "https://github.com/vbfelipe/extratortextopdf",
        label: { en: "PDF Extractor", pt: "Extrator PDF" },
        primary: false,
      },
      {
        url: "https://github.com/vbfelipe/envioEmail-viaPython",
        label: { en: "SMTP Mailer", pt: "Script SMTP" },
        primary: false,
      },
    ],
  },
];

/* ===========================================================
   STATE & DOM REFERENCES
=========================================================== */
function safeGetLang() {
  try {
    return localStorage.getItem("fv_lang") === "pt" ? "pt" : "en";
  } catch {
    return "en";
  }
}

function safeSetLang(lang) {
  try {
    localStorage.setItem("fv_lang", lang);
  } catch { }
}

let currentLang = safeGetLang();
let activeSlide = 0;
const activeMediaBySlide = PROJECTS.map(() => 0);

const peekTrack = document.getElementById("peekTrack");
const pillsContainer = document.getElementById("carouselPills");
const prevSlideBtn = document.getElementById("prevSlideBtn");
const nextSlideBtn = document.getElementById("nextSlideBtn");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");

/* ===========================================================
   RENDER PILLS & CAROUSEL CARDS
=========================================================== */
function updateTabMarquees() {
  pillsContainer.querySelectorAll(".pill-label").forEach((box) => {
    const primary = box.querySelector(".pill-text:not(.pill-dup)");
    if (!primary) return;

    // Reset before measuring exact single-copy text width
    box.classList.remove("is-overflow");
    box.style.removeProperty("--marquee-duration");

    const textWidth = Math.ceil(primary.scrollWidth);
    if (textWidth - box.clientWidth > 2) {
      // Constant calm LED speed (~24 px/s) across a single copy + 28px seamless loop gap
      const duration = Math.max(4.5, (textWidth + 28) / 24);
      box.classList.add("is-overflow");
      box.style.setProperty("--marquee-duration", `${duration.toFixed(2)}s`);
    }
  });
}

function renderPills() {
  pillsContainer.innerHTML = "";
  PROJECTS.forEach((proj, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `pill-btn${idx === activeSlide ? " active" : ""}`;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", idx === activeSlide ? "true" : "false");
    btn.title = proj.title;
    btn.innerHTML =
      `<span class="pill-num">0${idx + 1}</span>` +
      `<span class="pill-label">` +
      `<span class="pill-label-inner" translate="no">` +
      `<span class="pill-text">${proj.title}</span>` +
      `<span class="pill-text pill-dup" aria-hidden="true">${proj.title}</span>` +
      `</span></span>`;
    btn.addEventListener("click", () => goToSlide(idx));
    pillsContainer.appendChild(btn);
  });
  requestAnimationFrame(updateTabMarquees);
}

function buildInnerMediaArrows(projIdx) {
  const proj = PROJECTS[projIdx];
  if (proj.media.length <= 1) return "";
  const dict = I18N[currentLang];
  return `
    <button type="button" class="media-nav prev" data-slide="${projIdx}" data-dir="-1" aria-label="${dict.prevMediaLabel}" title="${dict.prevMediaLabel}">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M14.5 18.5L8 12L14.5 5.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
    <button type="button" class="media-nav next" data-slide="${projIdx}" data-dir="1" aria-label="${dict.nextMediaLabel}" title="${dict.nextMediaLabel}">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M9.5 5.5L16 12L9.5 18.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  `;
}

function buildMediaStageHTML(projIdx, mediaIdx) {
  const proj = PROJECTS[projIdx];
  const item = proj.media[mediaIdx];
  const dict = I18N[currentLang];
  const navArrows = buildInnerMediaArrows(projIdx);

  const fitClass =
    item.fitCover === "center"
      ? " fit-cover fit-center"
      : item.fitCover
        ? " fit-cover"
        : "";

  if (item.type === "video") {
    const isCurrentlyActive = projIdx === activeSlide;
    return `
      ${navArrows}
      <video class="${fitClass.trim()}" muted loop playsinline preload="${isCurrentlyActive ? "metadata" : "none"}" poster="${item.poster}" data-loaded="${isCurrentlyActive ? "1" : "0"}">
        <source ${isCurrentlyActive ? `src="${item.mp4}"` : `data-src="${item.mp4}"`} type="video/mp4" />
      </video>
    `;
  }

  return `
    ${navArrows}
    <button type="button" class="expand-btn" title="${dict.expandLabel}" aria-label="${dict.expandLabel}" data-src="${item.src}" data-caption="${proj.title}">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path d="M15 3H21V9M9 21H3V15M21 3L14 10M3 21L10 14" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <img class="main-shot${fitClass}" src="${item.src}" alt="${item.alt || proj.title}" decoding="async" data-src="${item.src}" data-caption="${proj.title}" />
  `;
}

function getMediaTabLabel(proj, item, idx) {
  const dict = I18N[currentLang];
  if (item.tabLabel) return item.tabLabel[currentLang];
  if (item.type === "video") return dict.videoTab;
  const hasVideo = proj.media[0].type === "video";
  const shotNumber = hasVideo ? idx : idx + 1;
  return String(shotNumber);
}

function releaseVideoDecoder(container) {
  if (!container) return;
  container.querySelectorAll("video").forEach((v) => {
    v.pause();
    v.querySelectorAll("source").forEach((s) => s.remove());
    v.removeAttribute("src");
    v.load();
  });
}

function renderCards() {
  releaseVideoDecoder(peekTrack);
  peekTrack.innerHTML = "";

  PROJECTS.forEach((proj, idx) => {
    const mediaIdx = activeMediaBySlide[idx];
    const article = document.createElement("article");
    article.className = "project-card";
    article.dataset.index = idx;

    const tabsHTML = proj.media
      .map(
        (m, mIdx) => `
        <button type="button" class="media-tab${mIdx === mediaIdx ? " active" : ""}" data-slide="${idx}" data-media="${mIdx}">
          ${getMediaTabLabel(proj, m, mIdx)}
        </button>`
      )
      .join("");

    const tagsHTML = proj.tags.map((t) => `<li>${t}</li>`).join("");

    const playIconSVG =
      '<svg width="11" height="11" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><path d="M2.5 1.5L10.5 6L2.5 10.5V1.5Z"/></svg>';

    const linksHTML = proj.links
      .map(
        (l) => `
        <a href="${l.url}" target="_blank" rel="noopener" class="proj-btn ${l.primary ? "primary" : "secondary"}">
          ${l.icon === "play" ? playIconSVG : ""}<span>${l.label[currentLang]}</span>
        </a>`
      )
      .join("");

    article.innerHTML = `
      <div class="card-media">
        <div class="media-viewport" data-viewport="${idx}">
          ${buildMediaStageHTML(idx, mediaIdx)}
        </div>
        <div class="card-media-controls">
          ${tabsHTML}
        </div>
      </div>

      <div class="card-details">
        <div>
          <div class="card-top-meta">
            <span class="card-category">${proj.category[currentLang]}</span>
            <span class="card-index">0${idx + 1} / 0${PROJECTS.length}</span>
          </div>
          <h3 class="card-title" translate="no">${proj.title}</h3>
          <p class="card-desc">${proj.description[currentLang]}</p>
          <ul class="card-tags">${tagsHTML}</ul>
        </div>
        <div class="card-actions">
          ${linksHTML}
        </div>
      </div>
    `;

    article.addEventListener("click", (e) => {
      const cardPos = article.dataset.pos;
      if (cardPos === "prev" || cardPos === "next") {
        e.preventDefault();
        goToSlide(idx);
      }
    });

    peekTrack.appendChild(article);
  });

  updatePositions();
}

function getRelativePosition(idx) {
  const total = PROJECTS.length;
  const diff = (idx - activeSlide + total) % total;
  if (diff === 0) return "active";
  if (diff === 1) return "next";
  if (diff === total - 1) return "prev";
  if (diff <= Math.floor(total / 2)) return "hidden-right";
  return "hidden-left";
}

function syncVideos() {
  const cards = peekTrack.querySelectorAll(".project-card");
  cards.forEach((card) => {
    const vid = card.querySelector("video");
    if (!vid) return;
    if (card.dataset.pos === "active") {
      if (vid.dataset.loaded !== "1") {
        vid.querySelectorAll("source[data-src]").forEach((s) => {
          s.src = s.dataset.src;
          s.removeAttribute("data-src");
        });
        vid.dataset.loaded = "1";
        vid.load();
      }
      vid.muted = true;
      vid.play().catch(() => { });
    } else if (!vid.paused) {
      vid.pause();
    }
  });
}

function updatePositions() {
  const cards = peekTrack.querySelectorAll(".project-card");
  cards.forEach((card, idx) => {
    const pos = getRelativePosition(idx);
    card.dataset.pos = pos;
    card.setAttribute("aria-hidden", pos === "active" ? "false" : "true");
  });

  const pills = pillsContainer.querySelectorAll(".pill-btn");
  pills.forEach((pill, idx) => {
    const isAct = idx === activeSlide;
    pill.classList.toggle("active", isAct);
    pill.setAttribute("aria-selected", isAct ? "true" : "false");
    if (isAct && pillsContainer.scrollWidth > pillsContainer.clientWidth) {
      const targetLeft = pill.offsetLeft - pillsContainer.clientWidth / 2 + pill.offsetWidth / 2;
      pillsContainer.scrollTo({ left: Math.max(0, targetLeft), behavior: "smooth" });
    }
  });

  syncVideos();
}

function goToSlide(index) {
  const total = PROJECTS.length;
  activeSlide = ((index % total) + total) % total;
  updatePositions();
}

function switchCardMedia(slideIdx, mediaIdx) {
  const totalMedia = PROJECTS[slideIdx].media.length;
  const nextMediaIdx = ((mediaIdx % totalMedia) + totalMedia) % totalMedia;
  activeMediaBySlide[slideIdx] = nextMediaIdx;

  const card = peekTrack.querySelector(`.project-card[data-index="${slideIdx}"]`);
  if (!card) return;

  const viewport = card.querySelector(".media-viewport");
  releaseVideoDecoder(viewport);
  viewport.innerHTML = buildMediaStageHTML(slideIdx, nextMediaIdx);

  card.querySelectorAll(".media-tab").forEach((btn, idx) => {
    btn.classList.toggle("active", idx === nextMediaIdx);
  });

  syncVideos();
}

/* Delegated click handler inside peekTrack for inner arrows, media tabs & image zoom */
peekTrack.addEventListener("click", (e) => {
  const navArrow = e.target.closest(".media-nav");
  if (navArrow) {
    e.stopPropagation();
    const sIdx = Number(navArrow.dataset.slide);
    const dir = Number(navArrow.dataset.dir);
    switchCardMedia(sIdx, activeMediaBySlide[sIdx] + dir);
    return;
  }

  const tabBtn = e.target.closest(".media-tab");
  if (tabBtn) {
    const sIdx = Number(tabBtn.dataset.slide);
    const mIdx = Number(tabBtn.dataset.media);
    switchCardMedia(sIdx, mIdx);
    return;
  }

  const zoomTrigger = e.target.closest(".expand-btn, img.main-shot");
  if (zoomTrigger) {
    const parentCard = zoomTrigger.closest(".project-card");
    if (parentCard && parentCard.dataset.pos === "active") {
      openLightbox(zoomTrigger.dataset.src, zoomTrigger.dataset.caption);
    }
  }
});

/* Outer Carousel Navigation Buttons, Keyboard & Touch Swipe */
prevSlideBtn.addEventListener("click", () => goToSlide(activeSlide - 1));
nextSlideBtn.addEventListener("click", () => goToSlide(activeSlide + 1));

let touchStartX = 0;
let touchStartY = 0;
let ignoreSwipe = false;
peekTrack.addEventListener(
  "touchstart",
  (e) => {
    ignoreSwipe = Boolean(e.target.closest(".card-media-controls"));
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  },
  { passive: true }
);

peekTrack.addEventListener(
  "touchend",
  (e) => {
    if (ignoreSwipe) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > 42 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      if (dx < 0) goToSlide(activeSlide + 1);
      else goToSlide(activeSlide - 1);
    }
  },
  { passive: true }
);

document.addEventListener("keydown", (e) => {
  if (lightbox.classList.contains("open")) {
    if (e.key === "Escape") closeLightbox();
    return;
  }
  const tag = document.activeElement ? document.activeElement.tagName : "";
  if (tag === "INPUT" || tag === "TEXTAREA") return;
  if (e.key === "ArrowLeft") goToSlide(activeSlide - 1);
  else if (e.key === "ArrowRight") goToSlide(activeSlide + 1);
});

/* ===========================================================
   LIGHTBOX
=========================================================== */
function openLightbox(src, caption) {
  if (!src) return;
  lightboxImg.src = src;
  lightboxImg.alt = caption || "";
  lightboxCaption.textContent = caption || "";
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

/* ===========================================================
   LANGUAGE SWITCHER (EN / PT-BR)
=========================================================== */
function applyLanguage(lang) {
  currentLang = lang === "pt" ? "pt" : "en";
  safeSetLang(currentLang);
  document.documentElement.lang = currentLang === "pt" ? "pt-BR" : "en";

  const dict = I18N[currentLang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (dict[key]) el.innerHTML = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key]) el.placeholder = dict[key];
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isAct = btn.dataset.lang === currentLang;
    btn.classList.toggle("active", isAct);
    btn.setAttribute("aria-pressed", isAct ? "true" : "false");
  });

  renderPills();
  renderCards();
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

/* ===========================================================
   CONTACT FORM & PRELOADER
=========================================================== */
const contactBtn = document.getElementById("contactBtn");
const contactForm = document.getElementById("contactForm");
const closeForm = document.getElementById("closeForm");
const messageForm = document.getElementById("messageForm");

contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  contactBtn.style.display = "none";
  contactForm.style.display = "flex";
  setTimeout(() => {
    contactForm.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, 60);
});

closeForm.addEventListener("click", () => {
  contactForm.style.display = "none";
  contactBtn.classList.add("reopened");
  contactBtn.style.display = "inline-block";
});

messageForm.addEventListener("submit", () => {
  setTimeout(() => {
    window.location.href = "https://vbfelipe.github.io/portfolio/";
  }, 1500);
});

function hidePreloader() {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.animation = "preloaderFadeOut 0.4s ease 0.15s forwards";
  }
}

/* Warm-cache lightweight WebP images during browser idle time for instant arrow navigation */
function preloadScreenshotsIdle() {
  const run = () => {
    PROJECTS.forEach((p) => {
      p.media.forEach((m) => {
        if (m.type === "image") {
          const img = new Image();
          img.src = m.src;
        }
      });
    });
  };
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(run, { timeout: 2500 });
  } else {
    setTimeout(run, 1200);
  }
}

let resizeMarqueeTimer = null;
window.addEventListener("resize", () => {
  clearTimeout(resizeMarqueeTimer);
  resizeMarqueeTimer = setTimeout(updateTabMarquees, 150);
});

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(updateTabMarquees);
}

window.addEventListener("load", () => {
  hidePreloader();
  updateTabMarquees();
  preloadScreenshotsIdle();
});
setTimeout(hidePreloader, 1400);

/* Initialize */
applyLanguage(currentLang);
