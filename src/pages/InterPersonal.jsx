import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
 

export default function InterPersonal({ showLayout = true }) {
  return (
    <div>
      {showLayout && <Header />} 
      <div className='box'>
        <h1>Inter Personal</h1>
        <ul className='box1'>
          <li>Hard working</li>
          <li>Team Work</li>
          <li>Honest </li>
        </ul>
      </div>
      {showLayout && <Footer />}    
    </div>
  )
}
