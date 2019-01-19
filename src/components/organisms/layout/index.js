import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'

import '../../../utils/fontawesome'

import styles from './layout.module.scss'
import SvgTextOverlay from '../svg-text-overlay/index'
import BgImg, { ImageTheme } from '../../atoms/image/index'
import RandomizingText from '../../molecules/randomizing-text/index'
import Menu from '../full-screen-menu/index'
import MenuButton, { HamburgerTheme } from '../../atoms/hamburger/index'
import ScrollWrapper from '../../eventlisteners/ScrollWrapper'

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
    const heroHeight = this.heroRef.current.clientHeight;
    const contentHeight = this.contentRef.current.clientHeight;
    if (window.pageYOffset > heroHeight + contentHeight / 5) {
      this.setState({
        isHeroVisible: false
      })
    } else {
      this.setState({
        isHeroVisible: true
      })
    }
    if (window.pageYOffset > heroHeight * 0.7) {
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
    const {
      heroImg,
      heroTexts,
      companyName,
    } = this.props;

    return (
      <ScrollWrapper scrollHandler={this.handleScroll} render={() => (
        <Container>
          <HeroContainer ref={this.heroRef} isHeroVisible={this.state.isHeroVisible}>
            <BgImg theme={ImageTheme.BACKGROUND} img={heroImg} />
            <SvgTextOverlay maskText={companyName}>
              <StyledVideo loop muted autoPlay>
                <source src="videos/bgvideo2.mp4" type="video/mp4" />
              </StyledVideo>
              <div className={classnames(styles.heroText)}>
                <RandomizingText texts={heroTexts} />
              </div>
            </SvgTextOverlay>
          </HeroContainer>
          <Content ref={this.contentRef}>
            {this.props.children}
          </Content>
          <Footer ref={this.footerRef} isFooterVisible={this.state.isFooterVisible}>
            <Text>Jotain</Text>
          </Footer>
          <Menu isMenuOpen={this.state.isMenuOpen} />
          <MenuButton theme={HamburgerTheme.MINUS} className={classnames(styles.menuButton)} onClick={this.handleMenuClick} isMenuOpen={this.state.isMenuOpen} />
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
  opacity: ${({ isHeroVisible }) => isHeroVisible ? 1 : 0};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const StyledVideo = styled.video`
  background-image: url(${({ bgImg }) => bgImg});
  background-size: cover;
  background-position: center center;

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