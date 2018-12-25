import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import styles from './link.module.scss'

export const LinkTheme = {
  DEFAULT: 'default',
  MENULINK: 'menuLink'
}

const SomeLink = ({ children, theme, to, className }) => {
  const classes = classnames(
    styles.link,
    styles[theme],
    className
  )

   return (
    <Link className={classes} to={to}>
      {children}
    </Link>
  )
}

SomeLink.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.oneOf(Object.values(LinkTheme)),
  to: PropTypes.string,
  className: PropTypes.string
}

SomeLink.defaultProps = {
  children: '',
  theme: LinkTheme.DEFAULT,
  to: '/',
  className: ''
}

export default SomeLink