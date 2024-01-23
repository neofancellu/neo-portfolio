import Layout from './components/Layout/indexLayout'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/indexHome'
import About from './components/About/indexAbout'
import Contact from './components/Contacts/indexContact'
import CV from './components/CV/CV-index'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='cv' element={<CV />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
