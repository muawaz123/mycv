import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

export default function Objective({ showLayout = true }) {
  return (
    <div>
      {showLayout && <Header />}   
        <div className="box">
          <h1>Objective</h1>
            <p className='box5'>
            I am a front-end developer with hands-on experience in building innovative applications,
            including anAutonomous Serving Bot using AI and sensors for efficient item serving,
            a Currency Converter for real-timecurrency exchange,
            and a Rock Paper Scissors game to enhance my programming skills.
            I am now looking toleverage my skills in a professional environment.
            </p>  
        </div>
      {showLayout && <Footer />}   
      </div>
  )
}
