// src/components/SyncBadge.jsx
export function SyncBadge({ status }) {
  const map = {
    saving: { icon: '↑', label: 'Salvando…', cls: 'saving' },
    saved: { icon: '✓', label: 'Sincronizado', cls: 'saved' },
    error: { icon: '!', label: 'Erro ao salvar', cls: 'error' },
    idle: null,
  }
  const item = map[status]
  if (!item) return null
  return (
    <span className={`sync-badge sync-${item.cls}`}>
      {item.icon} {item.label}
    </span>
  )
}