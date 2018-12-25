import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './button.module.scss'

export const ButtonTheme = {
  DEFAULT: 'default',
  BORDERLESS: 'borderless'
}

export const HoverTheme = {
  DEFAULT: 'defaultHover',
  OPACITY: 'opacity'
}

export const ButtonSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  PADDINGLESS: 'paddingless'
}

const Button = ({ children, onClick, size, theme, hoverTheme, className }) => {
  const classes = classnames(
    styles.button,
    styles[size],
    styles[theme],
    styles[hoverTheme],
    className
  )

   return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  theme: PropTypes.oneOf(Object.values(ButtonTheme)),
  hoverTheme: PropTypes.oneOf(Object.values(HoverTheme)),
  size: PropTypes.oneOf(Object.values(ButtonSize)),
  className: PropTypes.string
}

Button.defaultProps = {
  theme: ButtonTheme.DEFAULT,
  hoverTheme: HoverTheme.DEFAULT,
  size: ButtonSize.MEDIUM,
  children: '',
  onClick: () => {},
  className: ''
}

export default Button