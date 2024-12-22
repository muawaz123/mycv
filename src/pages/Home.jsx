import React from 'react'
import Education from './Education'
import FrontendProject from './FrontendProject'
import Objective from './Objective'
import Skill from './Skill'
import Language from './Language'
import InterPersonal from './InterPersonal'
import PersonalProject from './PersonalProject'
import Header from '../common/Header'
import Footer from '../common/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <div className='box6'>
           <Education  showLayout={false}  />
           <Objective  showLayout={false} />
           <Skill  showLayout={false} />
           <Language  showLayout={false} />
           <InterPersonal showLayout={false} />
           <FrontendProject  showLayout={false} />
           <PersonalProject  showLayout={false} />
        </div>
      <Footer />
    </div>
  );
}




  