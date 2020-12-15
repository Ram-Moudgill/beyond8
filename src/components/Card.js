import React from 'react'
import cards from '../carddata'
const Card = () => {
  return (
    <>
      {cards.map((item) => (
        <div key={item.id} className='col-lg-4 col-md-6'>
          <div className='card'>
            <div className='card__icon'>
              <i className={item.icon}></i>
            </div>
            <p className='card-title'>{item.title}</p>
            <div className='card_body'>
              <p className='text-gray card__text'>{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Card
