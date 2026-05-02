// src/albumData.js
const STICKERS_PER_TEAM = 20

export const baseSections = [
  {
    code: 'FWC',
    name: 'Página Inicial',
    count: 9,
    labels: ['00', '1', '2', '3', '4', '5', '6', '7', '8'],
    colors: ['#0f766e', '#f6c500', '#0054a4'],
  },
]

export const teamSections = [
  { code: 'MEX', name: 'México', group: 'A', colors: ['#006847', '#ffffff', '#ce1126'] },
  { code: 'RSA', name: 'África do Sul', group: 'A', colors: ['#007a4d', '#ffb612', '#de3831'] },
  { code: 'KOR', name: 'Coreia do Sul', group: 'A', colors: ['#ffffff', '#c60c30', '#003478'] },
  { code: 'CZE', name: 'Rep. Tcheca', group: 'A', colors: ['#11457e', '#ffffff', '#d7141a'] },
  { code: 'CAN', name: 'Canadá', group: 'B', colors: ['#e31b23', '#ffffff', '#111111'] },
  { code: 'BIH', name: 'Bósnia-Herzeg.', group: 'B', colors: ['#002f6c', '#ffcc00', '#ffffff'] },
  { code: 'QAT', name: 'Catar', group: 'B', colors: ['#8a1538', '#ffffff', '#3a0b1e'] },
  { code: 'SUI', name: 'Suíça', group: 'B', colors: ['#d52b1e', '#ffffff', '#111111'] },
  { code: 'BRA', name: 'Brasil', group: 'C', colors: ['#f6c500', '#0f8a4b', '#0054a4'] },
  { code: 'MAR', name: 'Marrocos', group: 'C', colors: ['#c1272d', '#006233', '#ffffff'] },
  { code: 'HAI', name: 'Haiti', group: 'C', colors: ['#00209f', '#d21034', '#ffffff'] },
  { code: 'SCO', name: 'Escócia', group: 'C', colors: ['#005eb8', '#ffffff', '#111111'] },
  { code: 'USA', name: 'EUA', group: 'D', colors: ['#3c3b6e', '#ffffff', '#b22234'] },
  { code: 'PAR', name: 'Paraguai', group: 'D', colors: ['#d52b1e', '#ffffff', '#0038a8'] },
  { code: 'AUS', name: 'Austrália', group: 'D', colors: ['#012169', '#ffcc00', '#00843d'] },
  { code: 'TUR', name: 'Turquia', group: 'D', colors: ['#e30a17', '#ffffff', '#111111'] },
  { code: 'GER', name: 'Alemanha', group: 'E', colors: ['#111111', '#dd0000', '#ffce00'] },
  { code: 'CUR', name: 'Curaçao', group: 'E', colors: ['#002b7f', '#f9e814', '#ffffff'] },
  { code: 'CIV', name: 'Costa do Marfim', group: 'E', colors: ['#f77f00', '#ffffff', '#009e60'] },
  { code: 'ECU', name: 'Equador', group: 'E', colors: ['#ffdd00', '#034ea2', '#ed1c24'] },
  { code: 'NED', name: 'Países Baixos', group: 'F', colors: ['#ff7f00', '#ffffff', '#21468b'] },
  { code: 'JPN', name: 'Japão', group: 'F', colors: ['#d12630', '#ffffff', '#2b2f36'] },
  { code: 'SWE', name: 'Suécia', group: 'F', colors: ['#006aa7', '#fecc00', '#ffffff'] },
  { code: 'TUN', name: 'Tunísia', group: 'F', colors: ['#e70013', '#ffffff', '#111111'] },
  { code: 'BEL', name: 'Bélgica', group: 'G', colors: ['#111111', '#ffd90c', '#ef3340'] },
  { code: 'EGY', name: 'Egito', group: 'G', colors: ['#ce1126', '#ffffff', '#111111'] },
  { code: 'IRN', name: 'Irã', group: 'G', colors: ['#239f40', '#ffffff', '#da0000'] },
  { code: 'NZL', name: 'Nova Zelândia', group: 'G', colors: ['#111111', '#ffffff', '#c8102e'] },
  { code: 'ESP', name: 'Espanha', group: 'H', colors: ['#c60b1e', '#ffc400', '#7a1f1f'] },
  { code: 'CPV', name: 'Cabo Verde', group: 'H', colors: ['#003893', '#ffffff', '#cf2027'] },
  { code: 'KSA', name: 'Arábia Saudita', group: 'H', colors: ['#006c35', '#ffffff', '#111111'] },
  { code: 'URU', name: 'Uruguai', group: 'H', colors: ['#75aadb', '#ffffff', '#fcd116'] },
  { code: 'FRA', name: 'França', group: 'I', colors: ['#0054a4', '#ffffff', '#d12630'] },
  { code: 'SEN', name: 'Senegal', group: 'I', colors: ['#00853f', '#fdef42', '#e31b23'] },
  { code: 'IRQ', name: 'Iraque', group: 'I', colors: ['#ce1126', '#ffffff', '#111111'] },
  { code: 'NOR', name: 'Noruega', group: 'I', colors: ['#ba0c2f', '#ffffff', '#00205b'] },
  { code: 'ARG', name: 'Argentina', group: 'J', colors: ['#75aadb', '#ffffff', '#f6c500'] },
  { code: 'ALG', name: 'Argélia', group: 'J', colors: ['#006233', '#ffffff', '#d21034'] },
  { code: 'AUT', name: 'Áustria', group: 'J', colors: ['#ed2939', '#ffffff', '#111111'] },
  { code: 'JOR', name: 'Jordânia', group: 'J', colors: ['#007a3d', '#ffffff', '#ce1126'] },
  { code: 'POR', name: 'Portugal', group: 'K', colors: ['#006600', '#ff0000', '#ffcc00'] },
  { code: 'COD', name: 'RD Congo', group: 'K', colors: ['#007fff', '#f7d618', '#ce1021'] },
  { code: 'UZB', name: 'Uzbequistão', group: 'K', colors: ['#1eb6e9', '#ffffff', '#009739'] },
  { code: 'COL', name: 'Colômbia', group: 'K', colors: ['#fcd116', '#003893', '#ce1126'] },
  { code: 'ENG', name: 'Inglaterra', group: 'L', colors: ['#ffffff', '#ce1124', '#1f3f82'] },
  { code: 'CRO', name: 'Croácia', group: 'L', colors: ['#ff0000', '#ffffff', '#171796'] },
  { code: 'GHA', name: 'Gana', group: 'L', colors: ['#ce1126', '#fcd116', '#006b3f'] },
  { code: 'PAN', name: 'Panamá', group: 'L', colors: ['#005293', '#ffffff', '#d21034'] },
].map((s) => ({ ...s, count: STICKERS_PER_TEAM }))

export const closingSections = [
  {
    code: 'FWC',
    name: 'FIFA World Cup History',
    count: 11,
    labels: ['9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'],
    colors: ['#0f766e', '#f6c500', '#0054a4'],
  },
  {
    code: 'CC',
    name: 'Figurinhas Coca-Cola',
    count: 14,
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
    colors: ['#d12630', '#ffffff', '#111111'],
    isExtra: true,
  },
]

function buildAlbumSections(sections) {
  return sections.map((section, sectionIndex) => ({
    ...section,
    sectionIndex,
    sectionKey: `${section.code}-${sectionIndex}`,
    group: section.group || 'FWC',
    labels:
      section.labels ||
      Array.from({ length: section.count }, (_, i) => String(i + 1)),
  }))
}

export const albumSections = buildAlbumSections([
  ...baseSections,
  ...teamSections,
  ...closingSections,
])

export const allStickers = albumSections.flatMap((section) =>
  section.labels.map((label, index) => {
    const displayNumber =
      section.code === 'CC' ? `CC${label}` : `${section.code} ${label}`
    return {
      id: `${section.sectionKey}-${label}`,
      displayNumber,
      label,
      order: section.sectionIndex * 100 + index,
      sectionKey: section.sectionKey,
      sectionCode: section.code,
      sectionName: section.name,
      group: section.group || 'FWC',
      colors: section.colors,
      isExtra: Boolean(section.isExtra),
    }
  }),
)

export const ALBUM_TOTAL = allStickers.filter((s) => !s.isExtra).length

export const groups = [
  { key: 'FWC', label: '🏆' },
  ...['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].map((g) => ({
    key: g,
    label: g,
  })),
]
