import React from 'react'
import styles from './IconLink.module.css'

type IconLinkProps = {
  icon: React.ReactNode
  link: string
  target: '_blank' | '_self'
} & typeof defaultProps

const defaultProps = {
  target: '_blank',
}

const IconLink = ({ icon, link, target }: IconLinkProps) => {
  return (
    <a href={link} target={target}>
      {icon}
    </a>
  )
}

IconLink.defaultProps = defaultProps

export default IconLink
