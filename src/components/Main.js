import React from 'react'
import Avatar from './Avatar'
import CardSection from './CardSection'
import HeaderCont from './HeaderCont'
const Main = () => {
  return (
    <>
      <div className='row main__row p-2 pt-5 pb-3 m-0'>
        <div className='col-md-10 col-lg-9 pt-5 mx-auto '>
          <div className='row'>
            <Avatar></Avatar>
            <HeaderCont></HeaderCont>
          </div>
        </div>
      </div>
      <CardSection></CardSection>
    </>
  )
}

export default Main
