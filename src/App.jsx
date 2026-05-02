// src/App.jsx
import { useState, useMemo, useCallback, useRef } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from './firebase'
import { useStickers } from './hooks/useStickers'
import { LoginScreen } from './components/LoginScreen'
import { SyncBadge } from './components/SyncBadge'
import { albumSections, allStickers, groups, ALBUM_TOTAL } from './albumData'

export default function App({ user }) {
  const { owned, toggle, setMany, syncStatus } = useStickers(user)

  const [activeStatus, setActiveStatus] = useState('all')
  const [activeGroup, setActiveGroup] = useState('FWC')
  const [selectedSection, setSelectedSection] = useState('all')
  const [sectionSort, setSectionSort] = useState('album')
  const [toast, setToast] = useState(null)
  const toastRef = useRef(null)

  if (!user) return <LoginScreen />

  // ── derived ────────────────────────────────────────────────────────────────
  const albumStickers = allStickers.filter((s) => !s.isExtra)
  const ownedCount = albumStickers.filter((s) => owned.has(s.id)).length
  const missingCount = ALBUM_TOTAL - ownedCount
  const percent = ALBUM_TOTAL === 0 ? 0 : Math.round((ownedCount / ALBUM_TOTAL) * 100)

  const visibleStickers = useMemo(() => {
    return allStickers.filter((s) => {
      const isOwned = owned.has(s.id)
      const matchStatus =
        activeStatus === 'all' ||
        (activeStatus === 'owned' && isOwned) ||
        (activeStatus === 'missing' && !isOwned)
      const matchSection =
        selectedSection === 'all' || s.sectionKey === selectedSection
      const matchGroup =
        selectedSection !== 'all' ||
        activeGroup === 'all' ||
        s.group === activeGroup
      return matchStatus && matchSection && matchGroup
    })
  }, [owned, activeStatus, activeGroup, selectedSection])

  const sectionsForGroup = useMemo(() => {
    const secs = albumSections.filter((s) => s.group === activeGroup)
    if (sectionSort === 'alpha') return [...secs].sort((a, b) => a.name.localeCompare(b.name))
    return secs
  }, [activeGroup, sectionSort])

  const sectionOptions = useMemo(() => {
    const all = sectionSort === 'alpha'
      ? [...albumSections].sort((a, b) => a.name.localeCompare(b.name))
      : albumSections
    return all
  }, [sectionSort])

  // ── helpers ────────────────────────────────────────────────────────────────
  function showToast(msg) {
    clearTimeout(toastRef.current)
    setToast(msg)
    toastRef.current = setTimeout(() => setToast(null), 2400)
  }

  function handleGroupClick(key) {
    setActiveGroup(key)
    setSelectedSection('all')
  }

  function handleSectionClick(key) {
    setSelectedSection((prev) => (prev === key ? 'all' : key))
  }

  function handleSectionFilterChange(e) {
    const key = e.target.value
    setSelectedSection(key)
    if (key !== 'all') {
      const sec = albumSections.find((s) => s.sectionKey === key)
      if (sec) setActiveGroup(sec.group || 'FWC')
    }
  }

  function handleMarkVisible(shouldOwn) {
    if (visibleStickers.length === 0) {
      showToast('Nenhuma figurinha visível para alterar.')
      return
    }
    setMany(visibleStickers.map((s) => s.id), shouldOwn)
    showToast(shouldOwn ? 'Marcadas como tenho ✓' : 'Marcadas como faltando')
  }

  async function handleCopyMissing() {
    const missing = allStickers.filter((s) => !owned.has(s.id))
    if (missing.length === 0) {
      showToast('Álbum completo! 🎉')
      return
    }
    const lines = albumSections
      .map((sec) => {
        const nums = missing
          .filter((s) => s.sectionKey === sec.sectionKey)
          .map((s) => s.displayNumber)
        return nums.length ? `${sec.name}: ${nums.join(', ')}` : ''
      })
      .filter(Boolean)
    const text = `Figurinhas faltantes – Panini FIFA World Cup 2026\n${lines.join('\n')}`
    try {
      await navigator.clipboard.writeText(text)
      showToast('Lista copiada!')
    } catch {
      window.prompt('Copie sua lista de faltantes:', text)
    }
  }

  return (
    <div className="app-shell">
      {/* ── HEADER ── */}
      <header className="topbar">
        <div className="topbar-left">
          <p className="eyebrow">Panini · FIFA World Cup 2026 · 980 cromos</p>
          <h1>Controle de figurinhas</h1>
          <div className="user-row">
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="avatar"
              referrerPolicy="no-referrer"
            />
            <span className="user-name">{user.displayName}</span>
            <SyncBadge status={syncStatus} />
            <button
              className="signout-btn"
              onClick={() => signOut(auth)}
              title="Sair"
            >
              Sair
            </button>
          </div>
        </div>

        <div className="summary-grid" aria-label="Resumo do álbum">
          <article className="summary-card missing-card">
            <span className="summary-label">Faltando</span>
            <strong>{missingCount}</strong>
          </article>
          <article className="summary-card">
            <span className="summary-label">Completo</span>
            <strong>{percent}%</strong>
          </article>
          <article className="summary-card">
            <span className="summary-label">Tenho</span>
            <strong>{ownedCount}/{ALBUM_TOTAL}</strong>
          </article>
        </div>
      </header>

      <main>
        {/* ── PROGRESS ── */}
        <section className="progress-section">
          <div className="progress-copy">
            <span>
              {ownedCount === 0
                ? 'Nenhuma figurinha marcada ainda.'
                : `${ownedCount} de ${ALBUM_TOTAL} figurinhas do álbum`}
            </span>
            <span>{percent}%</span>
          </div>
          <div className="progress-track">
            <span style={{ width: `${percent}%` }} />
          </div>
        </section>

        {/* ── TOOLBAR ── */}
        <section className="toolbar">
          <label className="field">
            <span>Seção</span>
            <select value={selectedSection} onChange={handleSectionFilterChange}>
              <option value="all">Todas do grupo</option>
              {sectionOptions.map((s) => (
                <option key={s.sectionKey} value={s.sectionKey}>
                  {s.name}
                </option>
              ))}
            </select>
          </label>

          <div className="section-sort" role="group">
            <span>Ordem</span>
            {['album', 'alpha'].map((sort) => (
              <button
                key={sort}
                className={`sort-option ${sectionSort === sort ? 'active' : ''}`}
                onClick={() => setSectionSort(sort)}
              >
                {sort === 'album' ? 'Álbum' : 'A-Z'}
              </button>
            ))}
          </div>

          <div className="segmented-control" role="group">
            {[
              { key: 'all', label: 'Todas' },
              { key: 'missing', label: 'Faltantes' },
              { key: 'owned', label: 'Tenho' },
            ].map(({ key, label }) => (
              <button
                key={key}
                className={`segment ${activeStatus === key ? 'active' : ''}`}
                onClick={() => setActiveStatus(key)}
              >
                {label}
              </button>
            ))}
          </div>

          <button className="ghost-button" onClick={handleCopyMissing}>
            Copiar faltantes
          </button>
        </section>

        {/* ── NAVIGATOR ── */}
        <section className="section-navigator">
          <div className="group-tabs" role="group">
            {groups.map((g) => {
              const sectionsInGroup = albumSections.filter((s) => s.group === g.key)
              const missingInGroup = sectionsInGroup
                .flatMap((s) => allStickers.filter((st) => st.sectionKey === s.sectionKey))
                .filter((st) => !owned.has(st.id)).length
              return (
                <button
                  key={g.key}
                  className={`group-tab ${activeGroup === g.key ? 'active' : ''}`}
                  onClick={() => handleGroupClick(g.key)}
                >
                  <strong>{g.label}</strong>
                  <span>{missingInGroup}</span>
                </button>
              )
            })}
          </div>

          <div className="section-list">
            {sectionsForGroup.map((section) => {
              const sectionStickers = allStickers.filter(
                (s) => s.sectionKey === section.sectionKey,
              )
              const missing = sectionStickers.filter((s) => !owned.has(s.id)).length
              const [primary, secondary, accent] = section.colors
              return (
                <button
                  key={section.sectionKey}
                  className={`section-row ${selectedSection === section.sectionKey ? 'active' : ''}`}
                  onClick={() => handleSectionClick(section.sectionKey)}
                  style={{
                    '--section-primary': primary,
                    '--section-secondary': secondary,
                    '--section-accent': accent,
                  }}
                >
                  <span className="section-row-main">
                    <strong>{section.name}</strong>
                    <span>{section.isExtra ? 'extra' : 'álbum'} · {sectionStickers.length} cromos</span>
                  </span>
                  <span className="section-row-progress">
                    <strong>{missing}</strong>
                    <span>faltando</span>
                  </span>
                  <span className="section-colors" aria-hidden="true">
                    {section.colors.map((c, i) => (
                      <i key={i} style={{ '--swatch': c }} />
                    ))}
                  </span>
                </button>
              )
            })}
          </div>
        </section>

        {/* ── GRID HEADER ── */}
        <section className="grid-header">
          <div>
            <h2>Figurinhas</h2>
            <p>{visibleStickers.length} {visibleStickers.length === 1 ? 'item encontrado' : 'itens encontrados'}</p>
          </div>
          <div className="bulk-actions">
            <button onClick={() => handleMarkVisible(true)}>
              Marcar visíveis como tenho
            </button>
            <button onClick={() => handleMarkVisible(false)}>
              Marcar visíveis como faltando
            </button>
          </div>
        </section>

        {/* ── STICKER GRID ── */}
        <section className="sticker-grid" aria-live="polite">
          {visibleStickers.length === 0 ? (
            <div className="empty-state">
              Nenhuma figurinha encontrada com os filtros atuais.
            </div>
          ) : (
            visibleStickers.map((sticker) => {
              const isOwned = owned.has(sticker.id)
              const [primary, secondary, accent] = sticker.colors
              return (
                <button
                  key={sticker.id}
                  className={`sticker-card ${isOwned ? 'owned' : ''}`}
                  onClick={() => toggle(sticker.id)}
                  aria-pressed={isOwned}
                  style={{
                    '--section-primary': primary,
                    '--section-secondary': secondary,
                    '--section-accent': accent,
                  }}
                >
                  <span className="sticker-number">{sticker.displayNumber}</span>
                  <strong className="sticker-section">{sticker.sectionName}</strong>
                  <span className="sticker-code">
                    {sticker.isExtra ? 'Extra' : 'Álbum'} · {sticker.displayNumber}
                  </span>
                  <span className="status-toggle">{isOwned ? 'Tenho' : 'Falta'}</span>
                </button>
              )
            })
          )}
        </section>
      </main>

      {/* ── TOAST ── */}
      {toast && (
        <div className="toast show" role="status">
          {toast}
        </div>
      )}
    </div>
  )
}
