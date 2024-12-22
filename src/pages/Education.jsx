import React from 'react'
 import Header from '../common/Header'
import Footer from '../common/Footer'

export default function Education({ showLayout = true }) {
  return (
  <div>
      {showLayout && <Header />} 
      <div className="box">
          <h1>Education</h1>
          <p className='bold-center'>Bachelor of Science in Computer Science</p>
          <p>Lahore Garrison University, (2020 - 2024)</p>
          <p className='bold-center'>FSc. Intermediate Pre Engineering (A)</p>
          <p>Govt. College of Science Multan, (2018 - 2020)</p>
          <p className='bold-center'>Matriculation (Science) (A)</p>
          <p>Govt. Higher Secondary School Mitro, (2016- 2018)</p> 
      </div>
      {showLayout && <Footer />}   
  </div>
  )
}
