import { Routes, Route } from 'react-router-dom'
import { GithubProvider } from './context/github/GithubContext'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <GithubProvider>
      <div className='flex flex-col justify-between h-screen align-center'>
        <Navbar title='GitHub Finder' />
        <main className='container px-5 pb-12 mx-auto'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/notfound' element={<NotFound />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </GithubProvider>
  )
}

export default App
