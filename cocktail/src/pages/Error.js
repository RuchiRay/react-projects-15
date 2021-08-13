import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error-page'>
      <h2>OOoops!! Its a dead end</h2>
      <Link to='/' className='back-btn'>Back to home page</Link>
    </div>
  )
}

export default Error
