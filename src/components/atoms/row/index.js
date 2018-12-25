import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './row.module.scss'

const Title = ({ children, className }) => (
  <div className={classnames(styles.row, className)}>
    {children}
  </div>
)

Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

Title.defaultProps = {
  className: '',
  children: ''
}

export default Title