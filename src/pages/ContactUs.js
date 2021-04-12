import React from 'react'
import styled from 'styled-components'
// Animation
import { motion } from 'framer-motion'
import { pageAnimation, titleAnimation } from '../animation'

const ContactUs = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <Title>
        <div className='hide'>
          <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
        </div>
      </Title>
      <div className='hide'>
        <Social variants={titleAnimation}>
          <Circle />
          <h3>Send us a message</h3>
        </Social>
      </div>
      <div className='hide'>
        <Social variants={titleAnimation}>
          <Circle />
          <h3>Send us an email</h3>
        </Social>
      </div>
      <div className='hide'>
        <Social variants={titleAnimation}>
          <Circle />
          <h3>Social media</h3>
        </Social>
      </div>
    </StyledContact>
  )
}

const StyledContact = styled(motion.div)`
  background: white;
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;

  @media (max-width: 1200px) {
    padding: 2rem;
    font-size: 1rem;
  }
`
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;

  @media (max-width: 1300px) {
    margin-top: 2rem;
  }
`
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h3 {
    margin: 2rem;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`
const Circle = styled.div`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background: #353535;
`

export default ContactUs
