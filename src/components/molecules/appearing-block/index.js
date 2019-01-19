import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './appearing-block.module.scss'
import ScrollWrapper from '../../eventlisteners/ScrollWrapper'

class AppearingBlock extends React.Component {
  constructor(props) {
    super(props);

    this.reveal = this.reveal.bind(this);
    this.ref = React.createRef();
    
    this.state = {
      isRevealed: false
    }
  }

  reveal() {
    const domNode = ReactDOM.findDOMNode(this.ref.current).getBoundingClientRect();
    const top = domNode.top;
    const height = domNode.height;
    const windowHeight = window.innerHeight;

    if ((top + (height / 2) - windowHeight) < 0 && !this.state.isRevealed) {
      this.setState({ isRevealed: true })
    }
  }

  render() {
    const classes = classnames(
      styles.wrapper,
      {
        [styles.revealed]: this.state.isRevealed
      },
      this.props.className
    )

    return (
      <ScrollWrapper ref={this.ref} className={classes} scrollHandler={this.reveal} render={() => (
        this.props.children
      )} />
    )
  }
}

AppearingBlock.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

AppearingBlock.defaultProps = {
  children: '',
  className: ''
}

export default AppearingBlock