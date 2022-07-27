import { Link } from 'react-router-dom'
import { IoHome } from 'react-icons/io5'

const NotFound = () => {
  return (
    <div className='hero'>
      <div className='text-center hero-content'>
        <div className='max-w-lg'>
          <h1 className='mb-8 font-bold text-8xl'>Oops!</h1>
          <p className='mb-8 text-5xl'>404 - Page Not Found</p>
          <Link to='/' className='btn btn-primary btn-lg'>
            <IoHome className='mr-3' />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
export default NotFound
