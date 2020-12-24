import React from 'react'

const Footer = () => {
  return (
    <div className='row m-0 mt-5 p-2'>
      <div className='col-md-10 col-lg-9  mx-auto'>
        <footer className='bg-light text-black  text-lg-start'>
          <div className='container p-0'>
            <div className='row p-0'>
              <div className='col-lg-6 col-md-12 mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Footer Content</h5>

                <p className='card__text'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                  atque ea quis molestias. Fugiat pariatur maxime quis culpa
                  corporis vitae repudiandae aliquam voluptatem veniam, est
                  atque cumque eum delectus sint!
                </p>
              </div>

              <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Links</h5>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='#!' className='text-black'>
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-black'>
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-black'>
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-black'>
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>

              <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
                <h5 className='text-uppercase mb-0'>Links</h5>

                <ul className='list-unstyled'>
                  <li>
                    <a href='#!' className='text-black'>
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-black'>
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-black'>
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='text-black'>
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='text-center p-3'>
            © 2020 Copyright:
            <a className='text-black' href='#'>
              Beyond 8
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
