import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-n.png'
import './indexHome.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/indexLetters'
import Loader from 'react-loaders'


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = 'eo Fancellu'.split('')
  const jobArray = 'Fullstack developer.'.split('')
  const helloArray = 'Hello,'.split('')

  useEffect(() => {
    setLetterClass('text-animate-hover')
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={helloArray}
              idx={6}
            />
            <br />
            <span className={`${letterClass} _12`}>I</span>
            <span className={`${letterClass} _13`}>'</span>
            <span className={`${letterClass} _14`}>m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={25}
            />
          </h1>
          <h2>JavaScript // Nodejs // Reactjs // React Native // HTML+CSS</h2>
          <Link to="/contact" className="flat-button">
            MY CONTACT INFO
          </Link>
        </div>
      </div>
      <Loader type="cube-transition" />
    </>
  )
}

export default Home
