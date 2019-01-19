import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/organisms/layout/index'
import Block from '../components/molecules/center-block/index'

export default ({ data: { homepage, general } }) => {
  const heroTexts = homepage.heroTexts.map(text => text.text);

  return (
    <Layout heroImg={homepage.heroImage.fluid} heroTexts={heroTexts} companyName={general.companyName}>
      <Content>
        <Center>
          <Block>
            <p>
              Deserunt elit incididunt minim aute sint fugiat aliqua sint laboris. Adipisicing aliqua proident officia nostrud. Quis in qui cupidatat adipisicing sint nisi veniam commodo irure quis adipisicing velit occaecat. Ex adipisicing labore id nostrud id irure consequat ad nulla esse Lorem. Dolor sit nulla excepteur consequat sint quis veniam ad ex et laboris consequat Lorem fugiat.
            </p>
          </Block>
        </Center>
      </Content>
    </Layout>
  )
}

const Content = styled.div`
  position: relative;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  min-height: 100vh;
  width: 100%;
`

export const query = graphql`
  query HomepageQuery {
    homepage: datoCmsHomepage {
      heroTexts {
        text
      }
      heroImage {
        fluid(maxWidth: 1920, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
    general: datoCmsGeneralInfo {
      companyName
    }
  }
`