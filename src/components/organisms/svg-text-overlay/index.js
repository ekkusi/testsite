import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './svg-text-overlay.module.scss'

class SvgTextOverlay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false
    }

    this.handleTitleMouseEnter = this.handleTitleMouseEnter.bind(this);
    this.handleTitleMouseOut = this.handleTitleMouseOut.bind(this);
  }

  handleTitleMouseEnter() {
    this.setState({
      isHovered: true
    })
  }

  handleTitleMouseOut() {
    this.setState({
      isHovered: false
    })
  }

  render() {
    return (
      <div className={classnames(styles.container, this.props.className)}>
        <div className={classnames(styles.bottomLayer)}>
          {this.props.children}
        </div>
        <div className={classnames(styles.topLayer, {[styles.revealed]: this.state.isHovered})}>
          <div className={classnames(styles.spacing)}></div>
          <div className={classnames(styles.maskCont)}>
            <div className={classnames(styles.spacing)}></div>
              <svg onMouseEnter={this.handleTitleMouseEnter} onMouseLeave={this.handleTitleMouseOut} className={classnames(styles.svg)}>
                <defs>
                  <mask x="0" y="0" id="maskLayer" width="100%" height="100%">
                    <rect width="100%" height="100%" className={classnames(styles.maskRect)} />
                    <text textAnchor="middle" x="50%" y="50%" dy="0.35em">{this.props.maskText}</text>
                  </mask>
                </defs>

                <rect mask="url(#maskLayer)" width="100%" height="100%" />
              </svg>
            <div className={classnames(styles.spacing)}></div>
          </div>
          <div className={classnames(styles.spacing)}></div>
        </div>
      </div>
    )
  }
}

SvgTextOverlay.propTypes = {
  children: PropTypes.node,
  maskText: PropTypes.string,
  className: PropTypes.string
}

SvgTextOverlay.defaultProps = {
  children: '',
  maskText: '',
  className: ''
}

export default SvgTextOverlay