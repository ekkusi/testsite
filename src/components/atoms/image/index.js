import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import styles from './image.module.scss'

export const ImageTheme = {
  DEFAULT: 'default',
  BACKGROUND: 'bgImg'
}

const Image = ({ theme, img, className }) => {
  const classes = classnames(
    styles.image,
    styles[theme],
    className
  )

  return (
    <Img className={classes} fluid={img} style={(theme === ImageTheme.BACKGROUND) ? {position: 'absolute'} : ''} />
  )
}


Image.propTypes = {
  theme: PropTypes.oneOf(Object.values(ImageTheme)),
  img: PropTypes.object,
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
}

Image.defaultProps = {
  theme: 'default',
  img: '',
  width: 'auto',
  height: 'auto',
  children: '',
  className: ''
}

export default Image