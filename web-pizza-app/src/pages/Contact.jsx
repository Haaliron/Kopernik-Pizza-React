import React from 'react'
import '../styles/Contact.css'
import PizzaLeft from '../assets/cont.png'

export const Contact = () => 
{
  return (
    <div className='contact'>
        <div className='leftSide' style={{ backgroundImage: `url(${PizzaLeft})` }}>

        </div>
        <div className='rightSide'>
            <h1>Bize Ulaşın</h1>
            <form id='contoct-form' method='POST'>
                <label htmlFor='name'>Ad Soyad</label>
                <input name='name' placeholder='Adızı ve Soyadınız...' type='text'/>

                <label htmlFor='name'>E-Posta</label>
                <input name='name' placeholder='E-Postanız...' type='text'/>

                <label htmlFor='name'>Mesajınız</label>
                <textarea rows="6" placeholder='Mesajınız...'name='message' required></textarea>
                <button type='submit'>Mesajı Gönder</button>
            </form>
        </div>
    </div>
  )
}
