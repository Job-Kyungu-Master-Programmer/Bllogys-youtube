import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="errorpage">
        <div className="errorpage__container">
            <Link to='/' className="errorpage__link">Return Home</Link>
            <h1 className="errorpage__title">page not found</h1>
        </div>
    </div>
  )
}

export default ErrorPage