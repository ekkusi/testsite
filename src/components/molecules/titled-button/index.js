import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './titled-button.module.scss'
import Title from '../../atoms/title/index'
import Button from '../../atoms/button/index'

const TitledButton = ({ titleText, buttonClick, buttonText, className }) => (
  <div className={classnames(styles.titledButton, className)}>
    <Title className={classnames(styles.title)}>{titleText}</Title>
    <Button onClick={buttonClick}>{buttonText}</Button>
  </div>
)

TitledButton.propTypes = {
  titleText: PropTypes.string,
  buttonClick: PropTypes.func,
  buttonText: PropTypes.string,
  className: PropTypes.string,
}

TitledButton.defaultProps = {
  titleText: '',
  buttonClick: () => {},
  buttonText: '',
  className: '',
}

export default TitledButton