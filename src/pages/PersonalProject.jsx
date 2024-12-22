import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
 

export default function PersonalProject({ showLayout = true }) {
  return (
    <div>
      {showLayout && <Header />} 
      <div className="box">
          <h1>Personal Projects</h1>
          <p className='bold-center'>Blood Bank Management System (BBMS)</p>
          <p className='box5'>The Blood Bank Management System (BBMS) streamlines the interaction between blood
             donors and blood banks while providing patients with an intuitive platform to 
             quickly locate their needed blood type.
          </p>
          <p className='bold-center'>FYP Autonomous Serving Bot</p>
          <p className='box5'>An innovative autonomous serving bot designed to
                        efficiently navigate and deliver items in dynamic
                        environments. Equipped with advanced sensors and AI, it
                        ensures precise, timely service with minimal human
                        intervention. Ideal for enhancing service automation in
                        restaurants, offices, and hospitality settings.
          </p>
      </div>
      {showLayout && <Footer />} 
    </div>
  )
}
