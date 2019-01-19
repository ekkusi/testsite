import React from 'react'
import PropTypes from 'prop-types'
import throttle from 'lodash.throttle'

class ScrollWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
    this.throttledScrollHandle = throttle(this.throttledScrollHandle.bind(this), 50)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.throttledScrollHandle();
  }

  throttledScrollHandle() {
    this.props.scrollHandler();
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.props.render()}
      </div>
    )
  }
}

ScrollWrapper.propTypes = {
  scrollHandler: PropTypes.func,
  render: PropTypes.func,
  className: PropTypes.string
}

ScrollWrapper.defaultProps = {
  scrollHandler: () => {},
  render: () => {},
  className: ''
}


export default ScrollWrapper;