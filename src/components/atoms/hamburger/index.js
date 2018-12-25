import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './hamburger.module.scss'

export const HamburgerTheme = {
  DEFAULT: 'default',
  MINUS: 'minus'
}

const Hamburger = ({ theme, onClick, isMenuOpen, className }) => {
  const classes = classnames(
    styles.hamburger,
    {
      [styles[theme]]: isMenuOpen
    }
  )

  return (
    <button className={classnames(styles.button, className)} onClick={onClick}>
      <div className={classes}></div>
    </button>
  )
}


Hamburger.propTypes = {
  theme: PropTypes.oneOf(Object.values(HamburgerTheme)),
  onClick: PropTypes.func,
  isMenuOpen: PropTypes.bool
}

Hamburger.defaultProps = {
  theme: HamburgerTheme.DEFAULT,
  onClick: () => {},
  isMenuOpen: false
}

export default Hamburger