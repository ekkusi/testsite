import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './title.module.scss'

export const TitleTheme = {
  DEFAULT: 'default',
  MARGINLESS: 'marginless'
}

export const TitleSize = {
  MAIN: 'h1',
  SUB: 'h2',
  SUBSUB: 'h3'
}

const Title = ({ theme, size, children, className }) => {
  if (size === TitleSize.MAIN) return <h1 className={classnames(styles.title, styles[theme], className)}>{children}</h1>
  else if (size === TitleSize.SUB) return <h2 className={classnames(styles.title, styles[theme], className)}>{children}</h2>
  else return <h3 className={classnames(styles.title, styles[theme], className)}>{children}</h3>
}

Title.propTypes = {
  theme: PropTypes.oneOf(Object.values(TitleTheme)),
  size: PropTypes.oneOf(Object.values(TitleSize)),
  children: PropTypes.node,
  className: PropTypes.string
}

Title.defaultProps = {
  theme: TitleTheme.DEFAULT,
  size: TitleSize.MAIN,
  className: '',
  children: ''
}

export default Title