import React from 'react'
import home1 from '../img/home1.png'
// Styled
import { About, Description, Image } from '../styles'
// Framer Motion
import { motion } from 'framer-motion'
import { titleAnimation, fade, photoAnimation } from '../animation'
import Wave from './Wave'

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <div className='hide'>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </div>
          <div className='hide'>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </div>
          <div className='hide'>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </div>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image className='hide'>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt='guy with camera'
        />
      </Image>
      <Wave />
    </About>
  )
}

// Styled Components

export default AboutSection
