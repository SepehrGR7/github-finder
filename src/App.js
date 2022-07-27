import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <div className='flex flex-col justify-between h-screen align-center'>
      <Navbar title='GitHub Finder' />
      <main>Main Contnet</main>
    </div>
  )
}

export default App
