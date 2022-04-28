import React from 'react'
import styles from './LanguageSelector.module.css'
import { useRouter } from 'next/router'

const LanguageSelector = () => {
  const router = useRouter()
  const { pathname, asPath, query } = router

  const changeLocale = (locale: string) => {
    router.push({ pathname, query }, asPath, { locale: locale })
  }

  const isEnglish: string =
    router.locale == 'en-US' ? styles.isButtonActive : ''
  const isPortuguese: string =
    router.locale == 'pt-BR' ? styles.isButtonActive : ''

  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${isEnglish}`}
        onClick={(_) => changeLocale('en-US')}
      >
        EN
      </button>
      <span className={styles.separator}></span>
      <button
        className={`${styles.button} ${isPortuguese}`}
        onClick={(_) => changeLocale('pt-BR')}
      >
        PT
      </button>
    </div>
  )
}

export default LanguageSelector
