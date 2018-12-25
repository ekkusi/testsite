import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './feature.module.scss'
import Title, { TitleSize } from '../../atoms/title/index'
import AnimatingWrapper from '../../molecules/animating-wrapper/index'
import ScrollWrapper from '../../eventlisteners/ScrollWrapper'

class Feature extends React.Component {
  constructor(props) {
    super(props);

    this.containerRef = React.createRef();
    this.contentRef = React.createRef();

    this.handleScroll = this.handleScroll.bind(this);
    
    this.state = {
      isRevealed: false
    }
  }

  handleScroll() {
    const yPos = ReactDOM.findDOMNode(this.containerRef.current).getBoundingClientRect().top;
    const height = this.containerRef.current.clientHeight;
    const pageHeight = window.innerHeight;

    //   if (yPos < (pageHeight - (height / 2)) && yPos > (height / 2) * -1) {
    //     this.contentRef.current.revealItems();
    //     if (!this.state.isRevealed) this.setState({ isRevealed: true })
    //   } else {
    //     this.contentRef.current.hideItems();
    //     if (this.state.isRevealed) this.setState({ isRevealed: false })
    //   }
    if (yPos < pageHeight / 2 && yPos > ((pageHeight / 2 ) - height)) {
      this.contentRef.current.revealItems();
      if (!this.state.isRevealed) this.setState({ isRevealed: true })
    } else {
      this.contentRef.current.hideItems();
      if (this.state.isRevealed) this.setState({ isRevealed: false })
    }

  }

  render() {
    const { title, subtitle } = this.props;
    return (
      <ScrollWrapper scrollHandler={this.handleScroll} render={() => (
        <div ref={this.containerRef} className={classnames(styles.feature, {[styles.revealed]: this.state.isRevealed}, this.props.className)}>
          {title.length > 0 && <Title>{title}</Title>}
          {subtitle.length > 0 && <Title size={TitleSize.SUB}>{subtitle}</Title>}
          <AnimatingWrapper ref={this.contentRef} revealOnMount={false} className={classnames(styles.wrapper)}>
            {this.props.children}
          </AnimatingWrapper>
        </div>
      )}/>
    )
  }
}

Feature.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
}

Feature.defaultProps = {
  title: '',
  subtitle: '',
  children: '',
  className: ''
}

export default Feature