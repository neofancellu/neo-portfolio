import Loader from 'react-loaders'
import './indexProject.scss'
import AnimatedLetters from '../AnimatedLetters/indexLetters'
import { useEffect, useState } from 'react'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setLetterClass('text-animate-hover')
  }, [])

  return (
    <>
      <div className="projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Projects'.split('')}
              idx={15}
            />
          </h1>
          <p>
            Game Hub: Game browser made using the rawg.io API and Chakra,
            programmed in TypeScript.{' '}
          </p>
          <a
            target="_blank"
            rel="norefferer noreferer noreferrer"
            href="https://game-hub-theta-eight.vercel.app/"
          >
            Live demo here
          </a>
          <br />
          <p>
            Background-Generator: Page where users can use two colourwheels to
            create a gradient background.{' '}
          </p>
          <a
            target="_blank"
            rel="norefferer noreferer noreferrer"
            href="https://neofancellu.github.io/background-generator/"
          >
            Live demo here
          </a>
          <br />
          <p>
            Quiz: Vue project where I create a small quiz that asks users
            questions and outputs whether they are correct.{' '}
          </p>
          <a
            target="_blank"
            rel="norefferer noreferer noreferrer"
            href="https://github.com/neofancellu/Quiz"
          >
            Repo here
          </a>
          <br />
          <p>
            Facial-Recognition-App: Project made with react that uses AI and an
            API to detected faces in pictures.
          </p>
          <a
            target="_blank"
            rel="norefferer noreferer noreferrer"
            href="https://github.com/neofancellu/Facial-Recognition-App"
          >
            Repo here
          </a>
          <br />
          <p>You can find more projects on my</p>
          <a
            target="_blank"
            rel="norefferer noreferer noreferrer"
            href="https://github.com/neofancellu"
          >
            Github
          </a>
        </div>
      </div>
      <Loader type="cube-transition" />
    </>
  )
}

export default Projects
