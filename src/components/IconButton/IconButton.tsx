import React from 'react'
import styles from './IconButton.module.css'

type IconButtonProps = {
  mainIcon: React.ReactNode
  activeIcon?: React.ReactNode
  isActive: boolean
  text?: string
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
} & typeof defaultProps

const defaultProps = {
  isActive: false,
}

const IconButton = ({
  mainIcon,
  activeIcon,
  isActive,
  text,
  handleClick,
}: IconButtonProps) => {
  const handleOnClickEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    handleClick(e)
  }

  return (
    <button className={styles.iconButton} onClick={handleOnClickEvent}>
      {activeIcon !== undefined ? (
        <div>{isActive ? activeIcon : mainIcon}</div>
      ) : (
        <div>{mainIcon}</div>
      )}
      {text !== undefined && <span>{text}</span>}
    </button>
  )
}

IconButton.defaultProps = defaultProps

export default IconButton
