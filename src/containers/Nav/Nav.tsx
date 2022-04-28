import React from 'react'
import styles from './Nav.module.css'
import { LanguageSelector } from '../'

type NavProps = {
  links?: Record<string, any>
}

const Nav = ({ links }: NavProps) => {
  return (
    <nav className={styles.wrapper}>
      <div className={`${styles.container} grid-container`}>
        <div>
          <h1>Jonathan Damiani</h1>
        </div>
        <ul className={styles.links}>
          {links?.map((link: Record<string, any>, index: number) => {
            return (
              <li className={styles.link} key={index}>
                <a href={link.link}>{link.name}</a>
              </li>
            )
          })}
          <LanguageSelector />
        </ul>
      </div>
    </nav>
  )
}

export default Nav
