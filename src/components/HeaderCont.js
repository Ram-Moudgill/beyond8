import React from 'react'
import { Link } from 'react-router-dom'
const HeaderCont = () => {
  return (
    <>
      <div className='col-md-6 order-md-0 d-flex justify-content-center  flex-column'>
        <h1 className='text-black header__h1 pb-4'>
          Welcome to <span className='name'>Beyond8</span>
          <br />
          Develop anything.
        </h1>
        <p className='text-gray header_text'>
          Build a beautiful, modern website with flexible design components
          built from scratch.
        </p>
        <div className='button__div pt-4'>
          <Link className='btn nav__btn' to='/'>
            Explore <i className='fas fa-arrow-right' aria-hidden='true'></i>
          </Link>
        </div>
      </div>
    </>
  )
}

export default HeaderCont
