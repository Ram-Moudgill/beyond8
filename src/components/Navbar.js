import React, { useState } from 'react'
import '../css/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = ({ brand }) => {
  const [position, setposition] = useState(false)
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 40) {
      setposition(true)
    } else {
      setposition(false)
    }
  })
  return (
    <>
      <div
        className={
          position ? 'row nav__row p-2 m-0 scroll' : 'row nav__row p-2 m-0'
        }
      >
        <div className='col-md-10 col-lg-9  mx-auto'>
          <nav className='navbar navbar-expand-lg px-0 mx-0'>
            <div className='container-fluid p-0'>
              <Link className='navbar-brand' to='/'>
                {brand}
              </Link>
              <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <i className='fas fa-bars' aria-hidden='true'></i>
              </button>
              <div
                className='collapse navbar-collapse'
                id='navbarSupportedContent'
              >
                <ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
                  <li className='nav-item'>
                    <Link
                      className='nav-link active'
                      aria-current='page'
                      to='/'
                    >
                      Home
                    </Link>
                  </li>
                  <li className='nav-item dropdown'>
                    <button
                      className='nav-link dropdown-toggle drop_btn'
                      id='navbarDropdown'
                      role='button'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      Docs
                    </button>
                    <ul
                      className='dropdown-menu'
                      aria-labelledby='navbarDropdown'
                    >
                      <li>
                        <Link className='dropdown-item' to='/'>
                          Icons
                        </Link>
                      </li>
                      <li>
                        <Link className='dropdown-item' to='/'>
                          Themes
                        </Link>
                      </li>
                      <li>
                        <hr className='dropdown-divider' />
                      </li>
                      <li>
                        <Link className='dropdown-item' to='/'>
                          Components
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/'>
                      Blog
                    </Link>
                  </li>
                  <li className='nav-item me-5'>
                    <Link className='nav-link me-3' to='/'>
                      About
                    </Link>
                  </li>
                </ul>
                <Link to='/' className='btn nav__btn'>
                  Purchase
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar
