import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import styles from './full-screen-menu.module.scss'
import Link from '../../atoms/link/index'

class FullScreenMenu extends React.Component {
  constructor(props) {
    super(props);

    this.menuRef = React.createRef();

    this.state = {
      linkReveals: [
        false,
        false,
        false,
        false
      ]
    }
  }

  componentWillUnmount() {
    clearInterval(this.linkOutInterval);
    clearInterval(this.linkInInterval);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.isMenuOpen === true && nextProps.isMenuOpen !== this.props.isMenuOpen) {
      this.setLinkInInterval();
    } else if (nextProps.isMenuOpen === false && nextProps.isMenuOpen !== this.props.isMenuOpen) {
      this.setLinkOutInterval();
    }
  }

  setLinkInInterval = () => {
    clearInterval(this.linkOutInterval);
    const childCount = this.menuRef.current.children.length;
    let i = 0;
    this.linkInInterval = setInterval(() => {
      if (i < childCount) {
        let linkReveals = [...this.state.linkReveals];
        linkReveals[i] = true;
        this.setState({ linkReveals: linkReveals })
      } else {
        clearInterval(this.interval);
      }
      i++;
    }, 200)
  }

  setLinkOutInterval = () => {
    clearInterval(this.linkInInterval);
    let i = this.menuRef.current.children.length - 1;
    let linkReveals = [...this.state.linkReveals];
    linkReveals[i] = false;
    this.setState({ linkReveals: linkReveals });
    i--;
    this.linkOutInterval = setInterval(() => {
      
      if (i >= 0) {
        linkReveals = [...this.state.linkReveals];
        linkReveals[i] = false;
        this.setState({ linkReveals: linkReveals });
      } else {
        clearInterval(this.linkOutInterval);
      }
      i--;
    }, 100)
  }

  render() {
    const menuClasses = classnames(
      styles.menu,
      {
        [styles.open]: this.props.isMenuOpen
      },
      this.props.className
    )
    return (
      <div ref={this.menuRef} className={menuClasses}>
        <Link to="/" theme="menuLink" className={classnames(styles.link, {[styles.link1]: this.state.linkReveals[0]})}>Home</Link>
        <Link to="/" theme="menuLink" className={classnames(styles.link, {[styles.link2]: this.state.linkReveals[1]})}>Projects</Link>
        <Link to="/" theme="menuLink" className={classnames(styles.link, {[styles.link3]: this.state.linkReveals[2]})}>Contact</Link>
        <Link to="/" theme="menuLink" className={classnames(styles.link, {[styles.link4]: this.state.linkReveals[3]})}>Info</Link>
      </div>
    )
  }
}

FullScreenMenu.propTypes = {
  isMenuOpen: PropTypes.bool,
  className: PropTypes.string
}

FullScreenMenu.defaultProps = {
  isMenuOpen: false,
  className: ''
}

export default FullScreenMenu
