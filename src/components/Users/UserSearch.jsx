import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'

const UserSearch = () => {
  const [text, setText] = useState('')

  const { users, searchUsers, clearUsers } = useContext(GithubContext)

  const handleChange = e => setText(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()

    if (!text) {
      window.alert('Please enter a username')
    } else {
      searchUsers(text)
      setText('')
    }
  }

  const handleClear = () => clearUsers()

  return (
    <div className='grid grid-cols-1 gap-8 mb-8 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                value={text}
                placeholder='Enter a username...'
                onChange={handleChange}
                className='w-full pr-40 text-black bg-gray-200 input input-lg'
              />
              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className='btn btn-ghost btn-lg' onClick={handleClear}>
            Clear
          </button>
        </div>
      )}
    </div>
  )
}

export default UserSearch
