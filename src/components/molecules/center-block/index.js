import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { breakpoints } from '../../../utils/variables'

const Block = ({ children, width, height}) => (
  <CenterBlock width={width} height={height}>
    {children}
  </CenterBlock>
)

Block.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string,
  height: PropTypes.string
}

Block.defaultProps = {
  children: '',
  width: '500px',
  height: '500px'
}

export default Block

const CenterBlock = styled.div`
  max-height: 100%;
  max-width: 100%;
  
  margin: auto;

  overflow: hidden;

  @media (min-width: ${() => breakpoints.bpMobile}) {
    max-height: ${({ width }) => width};
    max-width: ${({ height }) => height};
  }
`