const ALBUM_STICKERS_TOTAL = 980;
const INTRO_STICKERS = 9;
const HISTORY_STICKERS = 11;
const COKE_STICKERS = 14;
const STICKERS_PER_TEAM = 20;

const baseSections = [
  {
    code: "FWC",
    name: "Página Inicial",
    count: INTRO_STICKERS,
    labels: ["00", "1", "2", "3", "4", "5", "6", "7", "8"],
    colors: ["#0f766e", "#f6c500", "#0054a4"],
  },
];

const teamSections = [
  { code: "MEX", name: "México (Grupo A)", colors: ["#006847", "#ffffff", "#ce1126"] },
  { code: "RSA", name: "África do Sul (Grupo A)", colors: ["#007a4d", "#ffb612", "#de3831"] },
  { code: "KOR", name: "Coreia do Sul (Grupo A)", colors: ["#ffffff", "#c60c30", "#003478"] },
  { code: "CZE", name: "República Tcheca (Grupo A)", colors: ["#11457e", "#ffffff", "#d7141a"] },
  { code: "CAN", name: "Canadá (Grupo B)", colors: ["#e31b23", "#ffffff", "#111111"] },
  { code: "BIH", name: "Bósnia e Herzegovina (Grupo B)", colors: ["#002f6c", "#ffcc00", "#ffffff"] },
  { code: "QAT", name: "Catar (Grupo B)", colors: ["#8a1538", "#ffffff", "#3a0b1e"] },
  { code: "SUI", name: "Suíça (Grupo B)", colors: ["#d52b1e", "#ffffff", "#111111"] },
  { code: "BRA", name: "Brasil (Grupo C)", colors: ["#f6c500", "#0f8a4b", "#0054a4"] },
  { code: "MAR", name: "Marrocos (Grupo C)", colors: ["#c1272d", "#006233", "#ffffff"] },
  { code: "HAI", name: "Haiti (Grupo C)", colors: ["#00209f", "#d21034", "#ffffff"] },
  { code: "SCO", name: "Escócia (Grupo C)", colors: ["#005eb8", "#ffffff", "#111111"] },
  { code: "USA", name: "Estados Unidos (Grupo D)", colors: ["#3c3b6e", "#ffffff", "#b22234"] },
  { code: "PAR", name: "Paraguai (Grupo D)", colors: ["#d52b1e", "#ffffff", "#0038a8"] },
  { code: "AUS", name: "Austrália (Grupo D)", colors: ["#012169", "#ffcc00", "#00843d"] },
  { code: "TUR", name: "Turquia (Grupo D)", colors: ["#e30a17", "#ffffff", "#111111"] },
  { code: "GER", name: "Alemanha (Grupo E)", colors: ["#111111", "#dd0000", "#ffce00"] },
  { code: "CUR", name: "Curaçao (Grupo E)", colors: ["#002b7f", "#f9e814", "#ffffff"] },
  { code: "CIV", name: "Costa do Marfim (Grupo E)", colors: ["#f77f00", "#ffffff", "#009e60"] },
  { code: "ECU", name: "Equador (Grupo E)", colors: ["#ffdd00", "#034ea2", "#ed1c24"] },
  { code: "NED", name: "Países Baixos (Grupo F)", colors: ["#ff7f00", "#ffffff", "#21468b"] },
  { code: "JPN", name: "Japão (Grupo F)", colors: ["#d12630", "#ffffff", "#2b2f36"] },
  { code: "SWE", name: "Suécia (Grupo F)", colors: ["#006aa7", "#fecc00", "#ffffff"] },
  { code: "TUN", name: "Tunísia (Grupo F)", colors: ["#e70013", "#ffffff", "#111111"] },
  { code: "BEL", name: "Bélgica (Grupo G)", colors: ["#111111", "#ffd90c", "#ef3340"] },
  { code: "EGY", name: "Egito (Grupo G)", colors: ["#ce1126", "#ffffff", "#111111"] },
  { code: "IRN", name: "Irã (Grupo G)", colors: ["#239f40", "#ffffff", "#da0000"] },
  { code: "NZL", name: "Nova Zelândia (Grupo G)", colors: ["#111111", "#ffffff", "#c8102e"] },
  { code: "ESP", name: "Espanha (Grupo H)", colors: ["#c60b1e", "#ffc400", "#7a1f1f"] },
  { code: "CPV", name: "Cabo Verde (Grupo H)", colors: ["#003893", "#ffffff", "#cf2027"] },
  { code: "KSA", name: "Arábia Saudita (Grupo H)", colors: ["#006c35", "#ffffff", "#111111"] },
  { code: "URU", name: "Uruguai (Grupo H)", colors: ["#75aadb", "#ffffff", "#fcd116"] },
  { code: "FRA", name: "França (Grupo I)", colors: ["#0054a4", "#ffffff", "#d12630"] },
  { code: "SEN", name: "Senegal (Grupo I)", colors: ["#00853f", "#fdef42", "#e31b23"] },
  { code: "IRQ", name: "Iraque (Grupo I)", colors: ["#ce1126", "#ffffff", "#111111"] },
  { code: "NOR", name: "Noruega (Grupo I)", colors: ["#ba0c2f", "#ffffff", "#00205b"] },
  { code: "ARG", name: "Argentina (Grupo J)", colors: ["#75aadb", "#ffffff", "#f6c500"] },
  { code: "ALG", name: "Argélia (Grupo J)", colors: ["#006233", "#ffffff", "#d21034"] },
  { code: "AUT", name: "Áustria (Grupo J)", colors: ["#ed2939", "#ffffff", "#111111"] },
  { code: "JOR", name: "Jordânia (Grupo J)", colors: ["#007a3d", "#ffffff", "#ce1126"] },
  { code: "POR", name: "Portugal (Grupo K)", colors: ["#006600", "#ff0000", "#ffcc00"] },
  { code: "COD", name: "RD Congo (Grupo K)", colors: ["#007fff", "#f7d618", "#ce1021"] },
  { code: "UZB", name: "Uzbequistão (Grupo K)", colors: ["#1eb6e9", "#ffffff", "#009739"] },
  { code: "COL", name: "Colômbia (Grupo K)", colors: ["#fcd116", "#003893", "#ce1126"] },
  { code: "ENG", name: "Inglaterra (Grupo L)", colors: ["#ffffff", "#ce1124", "#1f3f82"] },
  { code: "CRO", name: "Croácia (Grupo L)", colors: ["#ff0000", "#ffffff", "#171796"] },
  { code: "GHA", name: "Gana (Grupo L)", colors: ["#ce1126", "#fcd116", "#006b3f"] },
  { code: "PAN", name: "Panamá (Grupo L)", colors: ["#005293", "#ffffff", "#d21034"] },
].map((section) => ({ ...section, count: STICKERS_PER_TEAM }));

const closingSections = [
  {
    code: "FWC",
    name: "FIFA World Cup History",
    count: HISTORY_STICKERS,
    labels: ["9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
    colors: ["#0f766e", "#f6c500", "#0054a4"],
  },
  {
    code: "CC",
    name: "Figurinhas da Coca-Cola",
    count: COKE_STICKERS,
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
    colors: ["#d12630", "#ffffff", "#111111"],
    isExtra: true,
  },
];

const albumSections = buildAlbumSections([...baseSections, ...teamSections, ...closingSections]);

const STORAGE_KEY = "panini-world-cup-2026-owned";

function buildAlbumSections(sections) {
  return sections.map((section, sectionIndex) => ({
    ...section,
    sectionIndex,
    sectionKey: `${section.code}-${sectionIndex}`,
    labels: section.labels || Array.from({ length: section.count }, (_, index) => String(index + 1)),
  }));
}

const elements = {
  missingCount: document.querySelector("#missingCount"),
  completePercent: document.querySelector("#completePercent"),
  ownedCount: document.querySelector("#ownedCount"),
  progressText: document.querySelector("#progressText"),
  progressBar: document.querySelector("#progressBar"),
  sectionFilter: document.querySelector("#sectionFilter"),
  groupTabs: document.querySelector("#groupTabs"),
  sectionList: document.querySelector("#sectionList"),
  stickerGrid: document.querySelector("#stickerGrid"),
  resultCount: document.querySelector("#resultCount"),
  copyMissing: document.querySelector("#copyMissing"),
  markVisibleOwned: document.querySelector("#markVisibleOwned"),
  markVisibleMissing: document.querySelector("#markVisibleMissing"),
  toast: document.querySelector("#toast"),
};

const stickers = albumSections.flatMap((section) =>
  section.labels.map((label, index) => {
    const displayNumber = section.code === "CC" ? `CC${label}` : `${section.code} ${label}`;

    return {
      id: `${section.name}-${section.code}-${label}`,
      displayNumber,
      label,
      order: section.sectionIndex * 100 + index,
      sectionKey: section.sectionKey,
      sectionCode: section.code,
      sectionName: section.name,
      group: getSectionGroup(section),
      colors: section.colors,
      isExtra: Boolean(section.isExtra),
    };
  }),
);

let owned = loadOwned();
let activeStatus = "all";
let activeGroup = "A";
let sectionSort = "album";
let visibleStickers = [];
let toastTimer;

init();

function init() {
  renderSectionFilter();
  bindEvents();
  render();
}

function bindEvents() {
  elements.sectionFilter.addEventListener("change", () => {
    const selectedSection = getSectionByKey(elements.sectionFilter.value);
    if (selectedSection) {
      activeGroup = getSectionGroup(selectedSection);
    }
    render();
  });

  document.querySelectorAll(".segment").forEach((button) => {
    button.addEventListener("click", () => {
      activeStatus = button.dataset.status;
      document.querySelectorAll(".segment").forEach((segment) => {
        segment.classList.toggle("active", segment === button);
      });
      render();
    });
  });

  document.querySelectorAll(".sort-option").forEach((button) => {
    button.addEventListener("click", () => {
      sectionSort = button.dataset.sort;
      document.querySelectorAll(".sort-option").forEach((option) => {
        option.classList.toggle("active", option === button);
      });
      renderSectionFilter();
      render();
    });
  });

  elements.copyMissing.addEventListener("click", copyMissingList);
  elements.markVisibleOwned.addEventListener("click", () => setVisibleStatus(true));
  elements.markVisibleMissing.addEventListener("click", () => setVisibleStatus(false));
}

function render() {
  visibleStickers = getVisibleStickers();
  renderSummary();
  renderSectionNavigator();
  renderStickerGrid();
}

function renderSummary() {
  const albumStickers = stickers.filter((sticker) => !sticker.isExtra);
  const extraStickers = stickers.filter((sticker) => sticker.isExtra);
  const total = albumStickers.length;
  const ownedTotal = albumStickers.filter((sticker) => owned.has(sticker.id)).length;
  const ownedExtras = extraStickers.filter((sticker) => owned.has(sticker.id)).length;
  const missingTotal = total - ownedTotal;
  const percent = total === 0 ? 0 : Math.round((ownedTotal / total) * 100);

  elements.missingCount.textContent = missingTotal;
  elements.completePercent.textContent = `${percent}%`;
  elements.ownedCount.textContent = `${ownedTotal}/${total}`;
  elements.progressText.textContent =
    ownedTotal === total
      ? `Álbum principal completo. Coca-Cola: ${ownedExtras}/${extraStickers.length}.`
      : `${ownedTotal} de ${total} cromos do álbum principal marcados como tenho. Coca-Cola: ${ownedExtras}/${extraStickers.length}.`;
  elements.progressBar.style.width = `${percent}%`;
}

function renderSectionFilter() {
  const currentValue = elements.sectionFilter.value || "all";
  const sections = getDropdownSections();
  const options = sections
    .map((section) => `<option value="${section.sectionKey}">${section.name}</option>`)
    .join("");

  elements.sectionFilter.innerHTML = `<option value="all">Todas do grupo</option>${options}`;
  elements.sectionFilter.value = getSectionByKey(currentValue) ? currentValue : "all";
}

function getGroups() {
  return [
    ..."ABCDEFGHIJKL".split("").map((group) => ({ key: group, label: group })),
    { key: "extra", label: "Extras" },
  ];
}

function getSectionGroup(section) {
  const match = section.name.match(/\(Grupo ([A-L])\)/);

  if (match) {
    return match[1];
  }

  return "extra";
}

function getSectionByKey(sectionKey) {
  return albumSections.find((section) => section.sectionKey === sectionKey);
}

function getSectionsByGroup(group) {
  if (group === "all") {
    return albumSections;
  }

  return albumSections.filter((section) => getSectionGroup(section) === group);
}

function getDropdownSections() {
  if (sectionSort === "alpha") {
    return [...albumSections].sort((first, second) => first.name.localeCompare(second.name, "pt-BR"));
  }

  return albumSections;
}

function renderSectionNavigator() {
  const selected = elements.sectionFilter.value;
  const groups = getGroups();

  elements.groupTabs.innerHTML = groups
    .map((group) => {
      const sectionsInGroup = getSectionsByGroup(group.key);
      const missingInGroup = sectionsInGroup
        .flatMap((section) => stickers.filter((sticker) => sticker.sectionKey === section.sectionKey))
        .filter((sticker) => !owned.has(sticker.id)).length;

      return `
        <button
          class="group-tab ${activeGroup === group.key ? "active" : ""}"
          type="button"
          data-group="${group.key}"
          aria-pressed="${activeGroup === group.key}"
        >
          <strong>${group.label}</strong>
          <span>${missingInGroup}</span>
        </button>
      `;
    })
    .join("");

  elements.groupTabs.querySelectorAll(".group-tab").forEach((button) => {
    button.addEventListener("click", () => {
      activeGroup = button.dataset.group;
      elements.sectionFilter.value = "all";
      render();
      elements.stickerGrid.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const visibleSections = getSectionsByGroup(activeGroup);

  elements.sectionList.innerHTML = visibleSections
    .map((section) => {
      const sectionStickers = stickers.filter((sticker) => sticker.sectionKey === section.sectionKey);
      const ownedInSection = sectionStickers.filter((sticker) => owned.has(sticker.id)).length;
      const missingInSection = sectionStickers.length - ownedInSection;
      const [primary, secondary, accent] = section.colors;
      const extraLabel = section.isExtra ? "extra" : "álbum";

      return `
        <button
          class="section-row ${selected === section.sectionKey ? "active" : ""}"
          type="button"
          data-section="${section.sectionKey}"
          style="--section-primary: ${primary}; --section-secondary: ${secondary}; --section-accent: ${accent};"
          aria-label="Filtrar seção ${section.name}"
        >
          <span class="section-row-main">
            <strong>${section.name}</strong>
            <span>${extraLabel} · ${sectionStickers.length} cromos</span>
          </span>
          <span class="section-row-progress">
            <strong>${missingInSection}</strong>
            <span>faltando</span>
          </span>
          <span class="section-colors" aria-hidden="true">
            <i style="--swatch: ${primary}"></i>
            <i style="--swatch: ${secondary}"></i>
            <i style="--swatch: ${accent}"></i>
          </span>
        </button>
      `;
    })
    .join("");

  elements.sectionList.querySelectorAll(".section-row").forEach((button) => {
    button.addEventListener("click", () => {
      elements.sectionFilter.value = selected === button.dataset.section ? "all" : button.dataset.section;
      render();
      elements.stickerGrid.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderStickerGrid() {
  elements.resultCount.textContent = `${visibleStickers.length} ${visibleStickers.length === 1 ? "item encontrado" : "itens encontrados"}`;

  if (visibleStickers.length === 0) {
    elements.stickerGrid.innerHTML = `<div class="empty-state">Nenhuma figurinha encontrada com os filtros atuais.</div>`;
    return;
  }

  elements.stickerGrid.innerHTML = visibleStickers
    .map((sticker) => {
      const isOwned = owned.has(sticker.id);
      const [primary, secondary, accent] = sticker.colors;

      return `
        <button
          class="sticker-card ${isOwned ? "owned" : ""}"
          type="button"
          data-id="${sticker.id}"
          aria-pressed="${isOwned}"
          aria-label="${isOwned ? "Marcar como faltante" : "Marcar como tenho"}: ${sticker.displayNumber}, ${sticker.sectionName}"
          style="--section-primary: ${primary}; --section-secondary: ${secondary}; --section-accent: ${accent};"
        >
          <span class="sticker-number">${sticker.displayNumber}</span>
          <strong class="sticker-section">${sticker.sectionName}</strong>
          <span class="sticker-code">${sticker.isExtra ? "Extra" : "Álbum"} · ${sticker.displayNumber}</span>
          <span class="status-toggle">${isOwned ? "Tenho" : "Falta"}</span>
        </button>
      `;
    })
    .join("");

  elements.stickerGrid.querySelectorAll(".sticker-card").forEach((button) => {
    button.addEventListener("click", () => toggleSticker(button.dataset.id));
  });
}

function getVisibleStickers() {
  const selectedSection = elements.sectionFilter.value;

  return stickers.filter((sticker) => {
    const isOwned = owned.has(sticker.id);
    const matchesStatus =
      activeStatus === "all" || (activeStatus === "owned" && isOwned) || (activeStatus === "missing" && !isOwned);
    const matchesSection = selectedSection === "all" || sticker.sectionKey === selectedSection;
    const matchesGroup = selectedSection !== "all" || activeGroup === "all" || sticker.group === activeGroup;

    return matchesStatus && matchesSection && matchesGroup;
  });
}

function toggleSticker(id) {
  if (owned.has(id)) {
    owned.delete(id);
  } else {
    owned.add(id);
  }

  saveOwned();
  render();
}

function setVisibleStatus(shouldOwn) {
  if (visibleStickers.length === 0) {
    showToast("Nenhuma figurinha visível para alterar.");
    return;
  }

  visibleStickers.forEach((sticker) => {
    if (shouldOwn) {
      owned.add(sticker.id);
    } else {
      owned.delete(sticker.id);
    }
  });

  saveOwned();
  render();
  showToast(shouldOwn ? "Figurinhas visíveis marcadas como tenho." : "Figurinhas visíveis marcadas como faltando.");
}

async function copyMissingList() {
  const missing = stickers.filter((sticker) => !owned.has(sticker.id));

  if (missing.length === 0) {
    showToast("Todas as figurinhas já estão marcadas como tenho.");
    return;
  }

  const lines = albumSections
    .map((section) => {
      const numbers = missing
        .filter((sticker) => sticker.sectionKey === section.sectionKey)
        .map((sticker) => sticker.displayNumber);

      return numbers.length ? `${section.name}: ${numbers.join(", ")}` : "";
    })
    .filter(Boolean);

  const text = `Figurinhas faltantes - Panini FIFA World Cup 2026\n${lines.join("\n")}`;

  try {
    await navigator.clipboard.writeText(text);
    showToast("Lista de faltantes copiada.");
  } catch {
    window.prompt("Copie sua lista de faltantes:", text);
  }
}

function loadOwned() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return new Set(Array.isArray(parsed) ? parsed : []);
  } catch {
    return new Set();
  }
}

function saveOwned() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...owned]));
}

function showToast(message) {
  clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  toastTimer = setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 2200);
}
