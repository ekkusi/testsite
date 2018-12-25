import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './animating-wrapper.module.scss'

export const WrapperTheme = {
  DEFAULT: 'default',
  THREECOL: '3col'
}

class Wrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRevealed: false,
      reveals: []
    }
  }

  componentDidMount() {
    let reveals = [];
    this.props.children.forEach(() => {
      reveals.push(false);
    })
    this.setState({ 
      isRevealed: false, 
      reveals: reveals 
    });
    if (this.props.revealOnMount) {
      this.revealItems();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  revealItems = () => {
    if (!this.state.isRevealed) {
      this.setState({ isRevealed: true });
      const childCount = this.props.children.length;
      let i = 0;
      this.interval = setInterval(() => {
        if (i < childCount) {
          let reveals = [...this.state.reveals];
          reveals[i] = true;
          this.setState({ reveals: reveals });
          i++;
        } else {
          clearInterval(this.interval);
        }
      }, 300);
    } 
  }

  hideItems = () => {
    clearInterval(this.interval);
    if (this.state.isRevealed) {
      let reveals = [...this.state.reveals];
      reveals.forEach((item, index, array) => { array[index] = false });
      this.setState({ 
        reveals: reveals,
        isRevealed: false
      })
    }
  }

  render() {
    return (
      <div className={classnames(styles.wrapper, this.props.className)}>
        {this.props.children.map((child, index) => {
          return (
            <div key={index} className={classnames({[styles.revealed]: this.state.reveals[index]}, styles.wrapItem)}>
              {child}
            </div>
          )
        })}
      </div>
    )
  }
}

Wrapper.propTypes = {
  theme: PropTypes.oneOf(Object.values(WrapperTheme)),
  revealOnMount: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
}

Wrapper.defaultProps = {
  theme: WrapperTheme.DEFAULT,
  revealOnMount: true,
  children: '',
  className: ''
}

export default Wrapper