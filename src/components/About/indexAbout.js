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
          I am a very ambitious Fullstack developer looking for a role in an IT
          company as to work with the newest of technologies on diverse
          projects.
        </p>
        <p>
          {' '}
          I'm confident with a good grasp of communication skills as well as
          being effective with contributing to a team environment and analysing
          and solving problems.
          {' '}
          I have also made a plethora of projects that you can find on my Github.
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
    <Loader type='cube-transition'/>
    </>
  )
}

export default About
