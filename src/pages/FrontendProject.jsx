import React from 'react'
import Header from '../common/Header' 
import Footer from '../common/Footer'

export default function FrontendProject({ showLayout = true }) {
  return (
    <div>
      {showLayout && <Header />}  
      <div className='box'>
        <h1>Frontend Project</h1>
        <ul className='box1'>
          <li>University Website</li>
          <li>Student admission portal</li>
          <li>Car Navigation Route</li>
          <li>Currency Converter</li>
          <li>Rock Paper Scissors Game</li>
          <li>Password generator app</li>
          <li>Loan Calculator</li>
          <li>Love Calculator</li>
          <li>BMI Calculator</li>
        </ul>
      </div>
      {showLayout && <Footer />} 
    </div>
  )
}
