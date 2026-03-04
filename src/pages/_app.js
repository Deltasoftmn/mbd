import '@/styles/globals.css'
import { useState, useEffect } from 'react'
import { LangContext } from '../langContext'

export default function App({ Component, pageProps }) {
  const [lang, setLang] = useState('mn')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = window.localStorage.getItem('mbd-lang')
    if (stored === 'en' || stored === 'mn') {
      setLang(stored)
    }
  }, [])

  const handleSetLang = (value) => {
    setLang(value)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('mbd-lang', value)
    }
  }

  return (
    <LangContext.Provider value={{ lang, setLang: handleSetLang }}>
      <Component {...pageProps} />
    </LangContext.Provider>
  )
}
