import React from 'react'
import muawaz from '../Images/muawaz.jpg'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="header">
        <div className="top">
            <div className="pic">
               <img src={muawaz} alt="muawaz"/>
            </div>
            <div className="info">
                  <h1>Hello</h1>
                <div className="name">
                  <p>I'm <strong>Muhammad Muawaz</strong></p>
                  <h2>Front End Developer</h2>
                </div>
               <p><strong class="age">AGE</strong>22</p>
               <p><strong class="address">ADDRESS</strong>Lahore</p>
               <p><strong class="email">E-MAIL</strong>muawaz.official@gmail.com</p>
               <p><strong class="phone">Phone</strong>+92 3139204177</p>
               <p><strong class="job">Front End Developer</strong> till August 25,2023</p>
            </div>
         </div>
         <div className="links">
           <FontAwesomeIcon icon={faFacebook}/>
           <FontAwesomeIcon icon={faLinkedin}/>
           <FontAwesomeIcon icon={faTwitter}/>
           <FontAwesomeIcon icon={faGithub}/>
           <FontAwesomeIcon icon={faYoutube}/>
        </div>
        <nav className='box2'>
            <ul className='box3'>
                <li className='box4'><Link to={'/'}>Education</Link></li>
                <li className='box4'><Link to={'/objective'}>Objective</Link></li>
                <li className='box4'><Link to={'/skill'}>Skill</Link></li>
                <li className='box4'><Link to={'/language'}>Language</Link></li>
                <li className='box4'><Link to={'/inter-personal'}>InterPersonal</Link></li>
                <li className='box4'><Link to={'/frontend-project'}>FrontendProject</Link></li>
                <li className='box4'><Link to={'/personal-project'}>PersonalProject</Link></li>
                <li className='box4'><Link to={'/home'}>Home</Link></li>
            </ul>
       </nav>
    </div>
  ) 
}

          

 
        
        
 /*       <nav>
            <ul>
                <li> <Link to={'/'}>Home</Link></li>
                <li> <Link to={'/about-us'}>About</Link></li>
                <li> <Link to={'/course'}>Course</Link></li>
            </ul>
        </nav>*/