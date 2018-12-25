import React from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import styles from './icon.module.scss'

library.add(faFacebook);

export const IconTheme = {
  DEFAULT: 'default',
  CIRCLE: 'circle'
}

export const HoverTheme = {
  DEFAULT: '',
  OPACITY: 'opacity',
  SCALEUP: 'scaleUp'
}

const Icon = ({ theme, size, isLink, to, hoverTheme, iconName, className }) => {
  const iconClasses = classnames(
    styles.icon,
    styles[theme],
    styles[hoverTheme],
    className
  )

   return isLink ? (
    <Link to={to} className={classnames(styles.link, iconClasses)}>
      <FontAwesomeIcon icon={iconName} size={size} />
    </Link>
    ) : (
    <span className={iconClasses}>
      <FontAwesomeIcon icon={iconName} size={size} />
    </span>
  )
}

Icon.propTypes = {
  theme: PropTypes.oneOf(Object.values(IconTheme)),
  size: PropTypes.string,
  isLink: PropTypes.bool,
  to: PropTypes.string,
  hoverTheme: PropTypes.oneOf(Object.values(HoverTheme)),
  iconName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  className: PropTypes.string
}

Icon.defaultProps = {
  theme: IconTheme.DEFAULT,
  size: '2x',
  isLink: false,
  to: '/',
  hoverTheme: HoverTheme.DEFAULT,
  iconName: '',
  className: ''
}

export default Icon