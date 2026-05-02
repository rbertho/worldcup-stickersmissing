// src/hooks/useStickers.js
import { useState, useEffect, useCallback, useRef } from 'react'
import {
  doc,
  getDoc,
  setDoc,
  onSnapshot,
} from 'firebase/firestore'
import { db } from '../firebase'

const DEBOUNCE_MS = 800

export function useStickers(user) {
  const [owned, setOwned] = useState(new Set())
  const [syncing, setSyncing] = useState(false)
  const [syncStatus, setSyncStatus] = useState('idle') // idle | saving | saved | error
  const debounceRef = useRef(null)
  const unsubRef = useRef(null)
  const pendingRef = useRef(null)

  // Load from Firestore when user logs in
  useEffect(() => {
    if (!user) {
      setOwned(new Set())
      if (unsubRef.current) unsubRef.current()
      return
    }

    const docRef = doc(db, 'albums', user.uid)

    // Real-time listener
    unsubRef.current = onSnapshot(
      docRef,
      (snap) => {
        if (snap.exists()) {
          const data = snap.data()
          const ids = Array.isArray(data.owned) ? data.owned : []
          // Only update if we don't have a pending local write
          if (!pendingRef.current) {
            setOwned(new Set(ids))
          }
        }
        setSyncStatus('saved')
      },
      () => {
        setSyncStatus('error')
      },
    )

    return () => {
      if (unsubRef.current) unsubRef.current()
    }
  }, [user])

  // Debounced save to Firestore
  const saveToFirestore = useCallback(
    (newOwned) => {
      if (!user) return
      clearTimeout(debounceRef.current)
      setSyncStatus('saving')
      pendingRef.current = newOwned

      debounceRef.current = setTimeout(async () => {
        try {
          const docRef = doc(db, 'albums', user.uid)
          await setDoc(
            docRef,
            {
              owned: [...newOwned],
              updatedAt: new Date().toISOString(),
              uid: user.uid,
              email: user.email,
            },
            { merge: true },
          )
          setSyncStatus('saved')
        } catch {
          setSyncStatus('error')
        } finally {
          pendingRef.current = null
        }
      }, DEBOUNCE_MS)
    },
    [user],
  )

  const toggle = useCallback(
    (id) => {
      setOwned((prev) => {
        const next = new Set(prev)
        if (next.has(id)) next.delete(id)
        else next.add(id)
        saveToFirestore(next)
        return next
      })
    },
    [saveToFirestore],
  )

  const setMany = useCallback(
    (ids, shouldOwn) => {
      setOwned((prev) => {
        const next = new Set(prev)
        ids.forEach((id) => {
          if (shouldOwn) next.add(id)
          else next.delete(id)
        })
        saveToFirestore(next)
        return next
      })
    },
    [saveToFirestore],
  )

  return { owned, toggle, setMany, syncing, syncStatus }
}
