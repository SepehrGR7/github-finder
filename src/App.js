import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className='flex flex-col justify-between h-screen align-center'>
      <Navbar title='GitHub Finder' />
      <main>Main Content</main>
      <Footer />
    </div>
  )
}

export default App
