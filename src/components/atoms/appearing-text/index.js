import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class Text extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    }
  }

  componentDidMount() {
    this.showTimeout = setTimeout(() => {
      this.showText();
    }, this.props.waitShow)
  }

  componentWillReceiveProps() {
    this.hideText();
    this.showTimeout = setTimeout(() => {
      this.showText();
    }, this.props.waitShow)
  }

  componentWillUnmount() {
    clearTimeout(this.showTimeout);
    clearTimeout(this.hideTimeout);   
  }

  showText() {
    this.setState({ isVisible: true })
  }

  hideText() {
    this.setState({ isVisible: false })
  }

  render() {
    return (
      <StyledSpan isVisible={this.state.isVisible} text={this.props.text}>{this.props.text}</StyledSpan>
    )
  }
}

export default Text

Text.propTypes = {
  waitShow: PropTypes.number
}

Text.defaultProps = {
  waitShow: 0
}

const StyledSpan = styled.span`
  position: relative;

  overflow: hidden;

  color: rgba(0, 0, 0, 0);

  ::before {
    position: absolute;
    top: 0;
    left: 0;

    color: white;

    transition: all 0.5s;
    opacity: ${({ isVisible }) => isVisible ? 1 : 0};
    transform: ${({ isVisible }) => isVisible ? 'translateY(0%)' : 'translateY(-100%)'};

    display: block;
    content: '${({ text }) => text}';
  }

  ::after {
    content: '${({ joku }) => joku}';
    position: absolute;
  }
`