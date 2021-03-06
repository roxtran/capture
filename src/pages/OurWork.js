import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// Images
import athlete from '../img/athlete-small.png'
import theracer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'
// Framer Motion
import { motion } from 'framer-motion'
import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
  slider
} from '../animation'
import { useScroll } from '../components/useScroll'

const OurWork = () => {
  const [element, controls] = useScroll()
  const [element1, controls1] = useScroll()
  const [element2, controls2] = useScroll()
  return (
    <Work
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      // style={{ background: '#fff' }}
    >
      <Frame1 variants={slider} />
      <Frame2 variants={slider} />
      <Frame3 variants={slider} />
      <Frame4 variants={slider} />
      <Movie ref={element} initial='hidden' animate={controls}>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnimation} className='line'></motion.div>
        <Link to='/work/the-athlete'>
          <div className='hide'>
            <motion.img variants={photoAnimation} src={athlete} alt='athlete' />
          </div>
        </Link>
      </Movie>
      <Movie ref={element1} initial='hidden' animate={controls1}>
        <h2>The Racer</h2>
        <motion.div variants={lineAnimation} className='line'></motion.div>
        <Link to='/work/the-racer'>
          <div className='hide'>
            <motion.img
              variants={photoAnimation}
              src={theracer}
              alt='the racer'
            />
          </div>
        </Link>
      </Movie>
      <Movie ref={element2} initial='hidden' animate={controls2}>
        <h2>Good Times</h2>
        <motion.div variants={lineAnimation} className='line'></motion.div>
        <Link to='/work/good-times'>
          <div className='hide'>
            <motion.img
              variants={photoAnimation}
              src={goodtimes}
              alt='good times'
            />
          </div>
        </Link>
      </Movie>
    </Work>
  )
}

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  background-color: white;
  h2 {
    padding: 1rem 0rem;
  }

  @media (max-width: 1300px) {
    padding: 2rem;
  }
`
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`
// Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100%;
  background: #fffebf;
  z-index: 2;
`
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
  background: #8effa0;
`

export default OurWork
