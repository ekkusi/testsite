import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

import styles from './layout.module.scss'
import SvgTextOverlay from '../../components/organisms/svg-text-overlay'
import RandomizingText from '../../components/molecules/randomizing-text'
import Menu from '../../components/organisms/full-screen-menu'
import Hamburger, { HamburgerTheme } from '../../components/atoms/hamburger'
import ScrollWrapper from '../../components/eventlisteners/ScrollWrapper'

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.heroRef = React.createRef();
    this.footerRef = React.createRef();
    this.contentRef = React.createRef();

    this.handleScroll = this.handleScroll.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);

    this.state = {
      isHeroVisible: true,
      isFooterVisible: false,
      isMenuOpen: false
    }
  }

  handleScroll() {
    if (window.pageYOffset > this.heroRef.current.clientHeight + this.contentRef.current.clientHeight / 2) {
      this.setState({
        isHeroVisible: false
      })
    } else {
      this.setState({
        isHeroVisible: true
      })
    }
    if (window.pageYOffset > this.heroRef.current.clientHeight / 1.5) {
      this.setState({
        isFooterVisible: true
      })
    } else {
      this.setState({
        isFooterVisible: false
      })
    }
  }

  handleMenuClick() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
  }

  render() {
    const texts = [
      'Fugiat Lorem magna eu exercitation qui anim',
      'Id amet amet fugiat sit',
      'Aute fugiat proident velit amet est sit culpa cillum quis'
    ]
  
    return (
      <ScrollWrapper scrollHandler={this.handleScroll} render={() => (
        <Container>
          <HeroContainer ref={this.heroRef} isHeroVisible={this.state.isHeroVisible}>
            <SvgTextOverlay maskText="Hover me">
              <StyledVideo loop muted autoPlay poster="images/videoposter.jpg">
                <source src="videos/bgvideo2.mp4" type="video/mp4" />
              </StyledVideo>
              <div className={classnames(styles.heroText)}>
                <RandomizingText texts={texts} />
              </div>
            </SvgTextOverlay>
          </HeroContainer>
          <Content ref={this.contentRef}>
            {this.props.children}
          </Content>
          <Footer ref={this.footerRef} isFooterVisible={this.state.isFooterVisible}>
            <Text>Jotain</Text>
          </Footer>
          <Menu isMenuOpen={this.state.isMenuOpen}>
          </Menu>
          <Hamburger theme={HamburgerTheme.MINUS} className={classnames(styles.menuButton)} onClick={this.handleMenuClick} isMenuOpen={this.state.isMenuOpen} />
        </Container>
      )} />
    )
  }
}

export default Layout

const Container = styled.div`
  position: relative;
`

const HeroContainer = styled.div`
  display: ${({ isHeroVisible }) => isHeroVisible ? 'block' : 'none'};
  opacity: ${({ isHeroVisible }) => isHeroVisible ? 1 : 0};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const StyledVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;

  min-width: 100%;
  min-height: 100%;

  transform: translate(-50%, -50%);
`

const Content = styled.div`
  background-color: black;
  color: white;
  position: relative;
  
  margin-top: 100vh;
  margin-bottom: 50vh;
  width: 100%;

  z-index: 1;
`

const Footer = styled.div`
  background-color: white;

  display: ${({ isFooterVisible }) => isFooterVisible ? 'block' : 'none'};
  opacity: ${({ isFooterVisible }) => isFooterVisible ? 1 : 0};

  position: fixed;
  top: 50vh;


  width: 100%;
  height: 50vh;
`

const Text = styled.p`
  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`