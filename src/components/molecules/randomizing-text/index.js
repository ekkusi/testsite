import React from 'react'
import styled from 'styled-components'

class RandomizingText extends React.Component {
  constructor(props) {
    super(props);
    this.texts = props.texts;

    this.letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    this.text = this.texts[0].split("");
    
    this.state = {
      textIndex: 0,
      text: this.texts[0].split("")
    }
  }

  componentDidMount() {
    this.setCharInterval();
  }

  componentWillUnmount() {
    clearInterval(this.charInterval);
    clearInterval(this.wordInterval);
  }

  setCharInterval = () => {
    const text = this.text;
    let count = 0;
    this.charInterval = setInterval(() => {
      let newText = [...text];
      for (let i = count; i < text.length; i++) {
        if (newText[i] !== ' ') {
          newText[i] = this.letters[Math.floor(Math.random() * this.letters.length)];
        }
      }
      newText[count] = this.texts[this.state.textIndex].split("")[count];
      this.text = newText;
      
      count++;

      this.forceUpdate();
      
      if (count === text.length) {
        clearInterval(this.charInterval);
        this.setWordInterval();
      }
    }, 40);
  }

  setWordInterval = () => {
    this.wordInterval = setInterval(() => {
      if (this.state.textIndex >= this.texts.length - 1) {
        this.text = this.texts[0].split("");
        this.setState({ 
          textIndex: 0
        });
      }
      else {
        this.text = this.texts[this.state.textIndex + 1].split("");
        this.setState({ 
          textIndex: this.state.textIndex + 1,
        })
      }
      clearInterval(this.wordInterval);
      this.setCharInterval();
    }, 2000);
  }

  render() {
    const words = this.text.join("").split(' ');
    return (
      <Text>{words.map((word, index) => 
        index !== words.length - 1 ? (
            `${word} `
          ) : (
            <Underline key={index}>{word}</Underline>
          )
        )}
      </Text>
    )
  }
}

export default RandomizingText

const Text = styled.p`
  border-bottom: none;
  color: white;
  margin: 0;
  padding: 0;

  text-transform: uppercase;
`

const Underline = styled.span`
  border-bottom: 0.1em solid white;
`