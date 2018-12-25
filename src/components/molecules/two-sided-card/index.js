import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Card, { CardTheme } from '../../atoms/card/index'
import Title, { TitleTheme } from '../../atoms/title/index'
import styles from './two-sided-card.module.scss'

export const CardAnimation = {
  DEFAULT: 'default',
  HORIZONTAL: 'horizontal'
}

const TwoSidedCard = ({ cardAnimation, imageUrl, frontTitle, width, height, children, className }) => {
  const classes = classnames(
    styles.card, 
    styles[cardAnimation], 
    className
  )

  return (
    <div className={classes} style={{width, height}}>
      <Card className={classnames(styles.front)} bgImg={imageUrl} width={width} height={height}>
        <Title theme={TitleTheme.MARGINLESS} className={classnames(styles.center)}>{frontTitle}</Title>
      </Card>
      <Card theme={CardTheme.WHITEBG}className={classnames(styles.back)} width={width} height={height}>
        {children}
      </Card>
    </div>
  )
}


TwoSidedCard.propTypes = {
  cardAnimation: PropTypes.oneOf(Object.values(CardAnimation)),
  imageUrl: PropTypes.string,
  frontTitle: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
}

TwoSidedCard.defaultProps = {
  cardAnimation: 'default',
  imageUrl: '',
  frontTitle: '',
  width: '300px',
  height: '500px',
  children: '',
  className: ''
}

export default TwoSidedCard