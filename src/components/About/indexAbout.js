import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/indexLetters'
import './indexAbout.scss'
import '../Layout/indexLayout.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBootstrap,
  faCss3,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setLetterClass('text-animate-hover')
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am an ambitious Fullstack developer looking for a role in IT,
            looking to work with both back end and front end tech stacks.
          </p>
          <p>
            {' '}
            I'm confident, with good communication skills, and enjoy being effective, by myselfor in a team. You can find my Github <a target="_blank" rel='norefferer noreferer' href='https://github.com/neofancellu'>here</a>  
          </p>
          
          <br />
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['W', 'h', 'a', 't', ' ', 'I', ' ', 'd', 'o']}
              idx={22}
            />
          </h1>
          <p className="s">
            JavaScript, TypeScript, HTML5 + CSS, Bootstrap, React, React Native,
            Nodejs, Python
          </p>
        </div>

        <div className="iconContainer">
          <div className="icons">
            <div className="icon">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faBootstrap} color="#62406F" />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faNodeJs} color="#32CD32" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="cube-transition" />
    </>
  )
}

export default About
