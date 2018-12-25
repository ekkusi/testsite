import React from 'react'
import styled from 'styled-components'

import '../utils/fontawesome'
import Layout from '../templates/layout/index'
import TwoSidedCard from '../components/molecules/two-sided-card/index'
import Card from '../components/atoms/card/index'
import Row from '../components/atoms/row/index'
import TitledButton from '../components/molecules/titled-button/index'
import Icon, { HoverTheme } from '../components/atoms/icon/index'
import Feature from '../components/organisms/feature/index'

export default () => {
  return (
    <Layout>
      <Content>
        <Feature title="Heading">
          <TwoSidedCard imageUrl="/images/hero-image.jpeg" frontTitle="Title">
            <TitledButton titleText="Hello World" buttonClick={() => {}} buttonText="Button" />
            <Row>
              <Icon theme="circle" iconName={["fab", "facebook-f"]} isLink={true} hoverTheme={HoverTheme.OPACITY} />
              <Icon theme="circle" iconName={["fab", "twitter"]} isLink={true} hoverTheme={HoverTheme.OPACITY} />
              <Icon theme="circle" iconName={["fab", "instagram"]} isLink={true} hoverTheme={HoverTheme.OPACITY} />
            </Row>
          </TwoSidedCard>
          <TwoSidedCard imageUrl="/images/hero-image.jpeg" frontTitle="Title">
            <TitledButton titleText="Hello World" buttonClick={() => {}} buttonText="Button" />
            <Row>
              <Icon theme="circle" iconName={["fab", "facebook-f"]} isLink={true} hoverTheme={HoverTheme.OPACITY} />
              <Icon theme="circle" iconName={["fab", "twitter"]} isLink={true} hoverTheme={HoverTheme.OPACITY} />
              <Icon theme="circle" iconName={["fab", "instagram"]} isLink={true} hoverTheme={HoverTheme.OPACITY} />
            </Row>
          </TwoSidedCard>
          <TwoSidedCard imageUrl="/images/hero-image.jpeg" frontTitle="Title">
            <TitledButton titleText="Hello World" buttonClick={() => {}} buttonText="Button" />
            <Row>
              <Icon theme="circle" iconName={["fab", "facebook-f"]} isLink={true} hoverTheme={HoverTheme.OPACITY} />
              <Icon theme="circle" iconName={["fab", "twitter"]} isLink={true} hoverTheme={HoverTheme.OPACITY} />
              <Icon theme="circle" iconName={["fab", "instagram"]} isLink={true} hoverTheme={HoverTheme.OPACITY} />
            </Row>
          </TwoSidedCard>
        </Feature>
      </Content>
      <Content>
        <Feature title="Heading">
          <Card>
            <TitledButton titleText="Hello World" buttonClick={() => {}} buttonText="Button" />
            <Row>
              <Icon theme="circle" iconName={["fab", "facebook-f"]} isLink={true} hoverTheme={HoverTheme.OPACITY} />
              <Icon theme="circle" iconName={["fab", "twitter"]} isLink={true} hoverTheme={HoverTheme.OPACITY} />
              <Icon theme="circle" iconName={["fab", "instagram"]} isLink={true} hoverTheme={HoverTheme.OPACITY} />
            </Row>
          </Card>
          <Card>
            <TitledButton titleText="Hello World" buttonClick={() => {}} buttonText="Button" />
            <Row>
              <Icon theme="circle" iconName={["fab", "facebook-f"]} isLink={true} hoverTheme={HoverTheme.OPACITY} />
              <Icon theme="circle" iconName={["fab", "twitter"]} isLink={true} hoverTheme={HoverTheme.OPACITY} />
              <Icon theme="circle" iconName={["fab", "instagram"]} isLink={true} hoverTheme={HoverTheme.OPACITY} />
            </Row>
          </Card>
          <Card>
            <TitledButton titleText="Hello World" buttonClick={() => {}} buttonText="Button" />
            <Row>
              <Icon theme="circle" iconName={["fab", "facebook-f"]} isLink={true} hoverTheme={HoverTheme.OPACITY} />
              <Icon theme="circle" iconName={["fab", "twitter"]} isLink={true} hoverTheme={HoverTheme.OPACITY} />
              <Icon theme="circle" iconName={["fab", "instagram"]} isLink={true} hoverTheme={HoverTheme.OPACITY} />
            </Row>
          </Card>
        </Feature>
      </Content>
    </Layout>
  )
}



const Content = styled.div`
  position: relative;
`