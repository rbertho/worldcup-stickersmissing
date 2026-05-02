// src/components/LoginScreen.jsx
import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../firebase'
import { useState } from 'react'

export function LoginScreen() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleLogin() {
    setLoading(true)
    setError(null)
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (e) {
      setError('Não foi possível fazer login. Tente novamente.')
      setLoading(false)
    }
  }

  return (
    <div className="login-screen">
      <div className="login-card">
        <div className="login-trophy">🏆</div>
        <p className="login-eyebrow">Panini · FIFA World Cup 2026</p>
        <h1 className="login-title">Controle suas figurinhas</h1>
        <p className="login-sub">
          Sincronize sua coleção entre dispositivos. Entre com sua conta Google
          para começar.
        </p>
        {error && <p className="login-error">{error}</p>}
        <button
          className="google-button"
          onClick={handleLogin}
          disabled={loading}
        >
          <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
            <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 2.9l5.7-5.7C34.5 6.5 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z" />
            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16.1 19 13 24 13c3.1 0 5.8 1.1 8 2.9l5.7-5.7C34.5 6.5 29.5 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
            <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.3 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8H6.1C9.5 35.6 16.3 44 24 44z" />
            <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4-4 5.4l.1-.1 6.2 5.2C37.2 39.1 44 34 44 24c0-1.3-.1-2.6-.4-3.9z" />
          </svg>
          {loading ? 'Entrando…' : 'Entrar com Google'}
        </button>
      </div>
    </div>
  )
}
