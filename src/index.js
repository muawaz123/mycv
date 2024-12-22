import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import InterPersonal from './pages/InterPersonal';
import Language from './pages/Language';
import Skill from './pages/Skill';
import FrontendProject from './pages/FrontendProject';
import Education from './pages/Education';
import Objective from './pages/Objective';
import PersonalProject from './pages/PersonalProject';
import Home from './pages/Home';
  
 
const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoutes=createBrowserRouter(
  [
    {
      path:'/',
      element:<Education showLayout={true} />
    },
    {
      path:'objective',
      element:<Objective showLayout={true} />
    },
    {
      path:'skill',
      element:<Skill showLayout={true} />
    },
    {
      path:'language',
      element:<Language showLayout={true} />
    },
    {
      path:'inter-personal',
      element:<InterPersonal showLayout={true} />
    },
    {
      path:'frontend-project',
      element:<FrontendProject showLayout={true} />
    },
    {
      path:'personal-project',
      element:<PersonalProject showLayout={true} />
    },
    {
      path:'home',
      element:<Home />
    }
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*  <Education />
    <Objective />
    <Skill />
    <Language />
    <InterPersonal />
    <FrontendProject />
    <PersonalProject />*/

