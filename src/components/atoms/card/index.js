import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './card.module.scss'

export const CardTheme = {
  DEFAULT: 'default',
  WHITEBG: 'whiteBg'
}

const Card = ({ theme, width, height, bgImg, children, className }) => (
  <div 
    className={classnames(styles.card, styles[theme], className)} 
    style={{backgroundImage: `url(${bgImg})`, width: width, height: height}}
  >
    <div className={classnames(styles.center)}>
      {children}
    </div>
  </div>
)

Card.propTypes = {
  theme: PropTypes.oneOf(Object.values(CardTheme)),
  width: PropTypes.string,
  height: PropTypes.string,
  bgImg: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
}

Card.defaultProps = {
  theme: CardTheme.DEFAULT,
  width: '300px',
  height: '500px',
  bgImg: '',
  children: '',
  className: ''
}

export default Card