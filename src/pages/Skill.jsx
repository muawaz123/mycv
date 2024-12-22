import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
 

export default function Skill({ showLayout = true }) {
  return (
    <div>
      {showLayout && <Header />} 
      <div className='box'>
        <h1>Skills</h1>
        <ul className='box1'>
          <li>JavaScript</li>
          <li>HTML & CSS</li>
          <li>react js</li>
          <li>basic office</li>
          <li>Front-End developer</li>
        </ul>
      </div>
      {showLayout && <Footer />}  
    </div>
  )
}
