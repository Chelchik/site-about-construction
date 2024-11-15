import React from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='notFoundBox'>
    <h2>the site does not have such a page do you want to go <Link className='toGoHomeLink' to="/">Home</Link></h2>
    </div>
)
}

export default NotFound