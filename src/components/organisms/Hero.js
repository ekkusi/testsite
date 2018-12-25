import React from 'react'
import styled from 'styled-components'

import styles from './hero.module.scss'
import TwoSidedCard from '../molecules/two-sided-card/index'
import Row from '../atoms/row/index'
import TitledButton from '../molecules/titled-button/index'
import Icon, { HoverTheme } from '../atoms/icon/index'

const Hero = ({ imgUrl }) => (
  <Container imgUrl={imgUrl}>
      <InnerContainer>
        <TwoSidedCard className={styles.card} imageUrl="/images/hero-image.jpeg" frontTitle="Title">
          <TitledButton titleText="Hello World" buttonClick={() => {}} buttonText="Button" />
          <Row>
            <Icon theme="circle" iconName={["fab", "facebook-f"]} isLink={true} hoverTheme={HoverTheme.OPACITY} />
            <Icon theme="circle" iconName={["fab", "twitter"]} isLink={true} hoverTheme={HoverTheme.OPACITY} />
            <Icon theme="circle" iconName={["fab", "instagram"]} isLink={true} hoverTheme={HoverTheme.OPACITY} />
          </Row>
        </TwoSidedCard>
      </InnerContainer>
  </Container>
)

export default Hero

const Container = styled.div`
  background-color: black;
  background-image: url('${props => props.imgUrl}');
  background-size: cover;

  height: 100vh;

  position: relative;

  width: 100%;
`

const InnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  text-align: center;
  transform: translate(-50%, -50%);
`