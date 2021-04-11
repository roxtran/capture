import styled from 'styled-components'
import {motion} from 'framer-motion'

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`
export const Description = styled.div`
  flex: 1;
  z-index: 2;
  padding-right: 5rem;
`
export const Image = styled.div`
  flex: 1;
  z-index: 2;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`
