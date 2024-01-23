import Loader from 'react-loaders'
import './indexContact.scss'
import AnimatedLetters from '../AnimatedLetters/indexLetters'
import { useEffect, useState } from 'react'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setLetterClass('text-animate-hover')
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <h2>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['L', 'o', 'c', 'a', 't', 'i', 'o', 'n', ':']}
              idx={25}
            />
          </h2>
          <p> Epsom,UK </p> <br />

          <h2>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E', 'm', 'a', 'i', 'l', ':']}
              idx={33}
            />{' '}
          </h2>
          <p>neo@felstar.com </p> <br />

          <h2>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'P',
                'h',
                'o',
                'n',
                'e',
                ' ',
                'n',
                'u',
                'm',
                'b',
                'e',
                'r',
                ':',
              ]}
              idx={38}
            />{' '}
          </h2>
          <p>+447434674405 </p> <br />

          <a
            target="_blank"
            rel="norefferer noreferrer"
            href="https://github.com/neofancellu"
          >
            MY GITHUB
          </a>
        </div>
      </div>
      <Loader type="cube-transition" />
    </>
  )
}

export default Contact
