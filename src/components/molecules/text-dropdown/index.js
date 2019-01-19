import React from 'react'
import styled from 'styled-components'

import Text from '../../atoms/appearing-text/index'

class ShowingText extends React.Component {
  constructor(props) {
    super(props);
    this.texts = this.props.texts;
    this.textVisibilities = []

    this.textRef = React.createRef();

    this.props.texts.forEach(text => {
      let charVisibilities = []
      text.split('').map(char => charVisibilities.push(false));
      this.textVisibilities.push(charVisibilities);
    })
    
    this.state = {
      text: this.texts[0],
      textIndex: 0,
      textVisibilities: this.textVisibilities[0],
      isUnderlined: false
    }
  }

  componentDidMount() {
    const count = this.state.text.split('').length
    this.textTimeout = setTimeout(this.setWordInterval, count * 50 + 2000);
    //this.underlineTimeout = setTimeout(this.setUnderline, count * 50);
  }
  
  componentWillUnmount() {
    clearInterval(this.charInterval);
    clearInterval(this.wordInterval);
    clearTimeout(this.textTimeout);
    clearTimeout(this.underlineTimeout);
  }

  setUnderline = () => {
    this.setState({ isUnderlined: true });
  }

  setWordInterval = () => {
    let count;
    if (this.state.textIndex >= this.texts.length - 1) {
      count = this.texts[0].split('').length;
      this.setState({
        text: this.texts[0], 
        textIndex: 0,
        isUnderlined: false
      });
    }
    else {
      count = this.texts[this.state.textIndex + 1].split('').length;
      this.setState({
        text: this.texts[this.state.textIndex + 1], 
        textIndex: this.state.textIndex + 1,
        isUnderlined: false
      })
    }
    this.textTimeout = setTimeout(this.setWordInterval, count * 50 + 2000);
    // this.underlineTimeout = setTimeout(this.setUnderline, count * 50);
  }

  render() {
    let count = 1;
    const wholeTimeout = this.state.text.split('').length * 50 + 1800;
    const words = this.state.text.split(' ');
    return (
      <TextContainer ref={this.textRef}>
        {words.map((word, wordIndex) => {
          if (count !== 1) count++;
          return wordIndex < words.length - 1 ? (
              <StyledSpan key={`word${wordIndex}`}>
              {word.split('').map((char, charIndex) => {
                const jsx = (
                  <Text key={count} text={char} waitShow={count * 50} waitHide={wholeTimeout} />
                )
                count++;
                return jsx;
              })}
              &nbsp;
            </StyledSpan>
          ) : (
            <Underline key={`word${wordIndex}`} isUnderlined={this.state.isUnderlined}>
              {word.split('').map(char => {
                const jsx = (
                  <Text key={count} text={char} waitShow={count * 50} waitHide={wholeTimeout} />
                )
                count++;
                return jsx;
              })}
            </Underline>
          )
        })}
      </TextContainer>
    )
  }
}

export default ShowingText

const TextContainer = styled.p`
  border-bottom: none;
  color: white;
  font-size: 3rem;
  margin: 0;
  padding: 0;

  overflow: hidden;

  text-transform: uppercase;

  transition: all 1s;
`

const Underline = styled.span`
  display: inline-block;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    top: 110%;
    left: 0;
    
    display: block;
    transition: ${({ isUnderlined }) => isUnderlined ? 'width 0.5s' : ''};
    width: ${({ isUnderlined }) => isUnderlined ? '100%' : 0};
    height: 2px;
    background-color: white;
  }
`

const StyledSpan = styled.span`
  display: inline-block;
`