import React from 'react'
import clock from '../img/clock.svg'
import teamwork from '../img/teamwork.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import home2 from '../img/home2.png'
// Styled Components
import styled from 'styled-components'
import { About, Description, Image } from '../styles'
// Animation
import { scrollReveal } from '../animation'
import { useScroll } from './useScroll'

const ServicesSection = () => {
  const [element, controls] = useScroll()
  return (
    <Services
      variants={scrollReveal}
      initial='hidden'
      animate={controls}
      ref={element}
    >
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className='icon'>
              <img src={clock} alt='clock' />
              <h4>Efficient</h4>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={teamwork} alt='teamwork' />
              <h4>Teamwork</h4>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={diaphragm} alt='diaphragm' />
              <h4>Diaphragm</h4>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={money} alt='money' />
              <h4>Affordable</h4>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt='home2' />
      </Image>
    </Services>
  )
}

// Styled
const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  @media (max-width: 1300px) {
    justify-content: center;
  }
`
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h4 {
      font-size: 1.2rem;
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`

export default ServicesSection
