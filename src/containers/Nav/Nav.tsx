import React from 'react'
import styles from './Nav.module.css'
type Props = {
  links: Record<string, any>
}

const Nav = (props: Props) => {
  const { links } = props
  return (
    <nav className={styles.container}>
      <ul>
        {links.map((link: Record<string, any>, index: number) => {
          return <li key={index}>{link.name}</li>
        })}
      </ul>
    </nav>
  )
}

export default Nav
