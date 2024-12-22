import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
 

export default function Language({ showLayout = true }) {
  return (
    <div>
      {showLayout && <Header />} 
      <div className='box'>
        <h1>Language</h1>
        <ul className='box1'>
          <li>Urdu</li>
          <li>English</li>
        </ul>
      </div>
      {showLayout && <Footer />} 
    </div>
  )
}
