import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Divisions, { Theme } from './context';
import projectImage1 from './websiteImage/project-1-480x361.jpg'
import projectImage2 from './websiteImage/project-2-480x361.jpg'
import projectImage3 from './websiteImage/project-3-480x361.jpg'
import projectImage4 from './websiteImage/project-4-480x361.jpg'
import projectImage5 from './websiteImage/project-5-480x361.jpg'
import projectImage6 from './websiteImage/project-6-480x361.jpg'
import projectImage7 from './websiteImage/project-7-480x361.jpg'
import projectImage8 from './websiteImage/project-8-480x361.jpg'

const divisionsArr = [
  {
    id: Math.random(),
    title: "COMMERCIAL",
    description: "It’s probably the most diverse category of construction to work in. But we’ve got experience…",
    url: projectImage1
  },

  {
    id: Math.random(),
    title: "CULTURAL / LIFESTYLE",
    description: "Working on a socially important building, such as a park involves additional landscape construction expertise.…",
    url: projectImage2
  },

  {
    id: Math.random(),
    title: "DATA / TECHNOLOGY",
    description: "While building a headquarters building for an IT company is relatively easy, we’ve also…",
    url: projectImage3
  },

  {
    id: Math.random(),
    title: "EDUCATIONAL",
    description: "Educational institutions can be much more creative than your regular school or a college campus!…",
    url: projectImage4
  },

  {
    id: Math.random(),
    title: "GOVERNMENT / MILITARY",
    description: "The US military and States governments used our expertise and manpower to build numerous military-grade…",
    url: projectImage5
  },

  {
    id: Math.random(),
    title: "HEALTHCARE",
    description: "We can build any type of healthcare buildings. From a small private medical clinic to…",
    url: projectImage6
  },

  {
    id: Math.random(),
    title: "MANUFACTURING / INDUSTRIAL",
    description: "Building a manufacturing facility or a factory house can be much more challenging than building…",
    url: projectImage7
  },

  {
    id: Math.random(),
    title: "WAREHOUSE / LOGISTICS",
    description: "While building a warehouse for an e-store is no easy feat itself, think about building…",
    url: projectImage8
  },
]


function CallSite() {
  const divisions = useContext(Divisions);
  const [theme, setTheme] = useState(false)

  return (
    <Divisions.Provider value={divisionsArr}>
      <Theme.Provider value={{theme, setTheme}}>
         <App />
      </Theme.Provider>
    </Divisions.Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CallSite />
);