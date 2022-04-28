import React, { useEffect, useState } from 'react'
import styles from './SideMenu.module.css'
import { IconButton, IconLink } from '../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useTheme } from 'next-themes'

type Props = {}

const SideMenu = (props: Props) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const handleThemeSwitch = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (theme == 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  if (!mounted) return null

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <IconLink
            icon={<FontAwesomeIcon icon={faLinkedin} size="2x" />}
            link="#"
            target="_blank"
          />
        </li>
        <li className={styles.listItem}>
          <IconLink
            icon={<FontAwesomeIcon icon={faGithub} size="2x" />}
            link="#"
            target="_blank"
          />
        </li>
        <li className={styles.listItem}>
          <IconButton
            mainIcon={<FontAwesomeIcon icon={faMoon} size="2x" />}
            activeIcon={<FontAwesomeIcon icon={faSun} size="2x" />}
            handleClick={handleThemeSwitch}
            isActive={theme == 'dark'}
          />
        </li>
      </ul>
    </div>
  )
}

export default SideMenu
