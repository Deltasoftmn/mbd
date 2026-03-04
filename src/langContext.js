import { createContext, useContext } from 'react'

export const LangContext = createContext({
  lang: 'mn',
  setLang: (value) => {},
})

export function useLang() {
  return useContext(LangContext)
}

