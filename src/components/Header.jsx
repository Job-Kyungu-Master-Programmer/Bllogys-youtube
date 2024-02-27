import React from 'react'
import { Link } from 'react-router-dom'
import { Fabars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

const Header = () => {
  return (
    <div className="header">
        <div className="container header__container">
            <Link to='/' className='header__logo'>B-log</Link>
            <div className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                 <Link to='/profile' className="header__link">
                    Jeancy Dalos
                 </Link>
              </li>
              <li className="header__item">
                 <Link to='/create' className="header__link">
                    Create Post
                 </Link>
              </li>
              <li className="header__item">
                 <Link to='/authors' className="header__link">
                    Authors
                 </Link>
              </li>
              <li className="header__item">
                 <Link to='/logout' className="header__link">
                    Logout
                 </Link>
              </li>
            </ul>
            <button className="header__btn">
                <AiOutlineClose />
            </button>
            </div>
        </div>
    </div>
  )
}

export default Header