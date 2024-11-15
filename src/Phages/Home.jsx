import React, { useContext, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Slide from '../components/Slide';
import slideImg from '../websiteImage/slider-slide-1-1920x1080.jpg'
import slideImg2 from '../websiteImage/slider-slide-2-1920x1080.jpg'
import slideImg3 from '../websiteImage/slider-slide-3-1920x1080.jpg'
import images1 from '../websiteImage/images.png'
import images2 from '../websiteImage/images2.png'
import images3 from '../websiteImage/images3.png'
import images4 from '../websiteImage/images4.png'
import images5 from '../websiteImage/images5.png'
import images6 from '../websiteImage/images6.png'
import siteImage from '../websiteImage/home-1-652x491.jpg'
import recent1 from '../websiteImage/home-post-1-418x315.jpg'
import recent2 from '../websiteImage/home-post-2-418x315.jpg'
import recent3 from '../websiteImage/home-post-3-418x315.jpg'
import Divisions, { Theme } from '../context';

function Home() {
  const {theme, setTheme} = useContext(Theme)

  const images = [
    {
      id: Math.random(),
      url: slideImg,
      title: "Construction",
      description: "See how a 10-stories tower's being built, in a time-lapse!"
    },
    {
      id: Math.random(),
      url: slideImg2,
      title: "Discounts",
      description: "Summer discounts for big construction projects!"
    },
    {
      id: Math.random(),
      url: slideImg3,
      title: "Projects",
      description: "This year we took more complex constructions than ever before..."
    },
  ]

  const cardInfo = [
    {
      id: Math.random(),
      icon: images1,
      title: "Pre-construction Services",
      description: "We take our time on initial planning before any construction begins, to balance all the financial and efficiency issues beforehand..."
    },

    {
      id: Math.random(),
      icon: images2,
      title: "General Contracting",
      description: "We have a long list of professional contractors, whom our engineers and architects enjoy to work with on a majority of our projects!",
    },

    {
      id: Math.random(),
      icon: images3,
      title: "Construction Services",
      description: "Our customers love the pace/quality tempo that we show during each of the principal construction processes!"
    },

    {
      id: Math.random(),
      icon: images4,
      title: "Construction Management",
      description: "Construction project management is essential. We're using the most time and iterations efficient life cycles methods for that.",
    },

    {
      id: Math.random(),
      icon: images5,
      title: "Building Information Modeling (BIM)",
      description: "Oftentimes physical and functional essence of any construction project needs to be represented digitally, in a 3D model format.",
    },

    {
      id: Math.random(),
      icon: images6,
      title: "Design-Build",
      description: "If a project is not too complex, we may hire a designer-builder type of contractor, to make the longevity of the construction shorte",
    }
  ]

  const divisions = useContext(Divisions)

  const recents = [
    {
      id: Math.random(),
      url: recent1,
      title: "Future proofing hospitals",
      description: "By improving the physical layout of hospitals and medical facilities, we can enhance and increase safety mechanisms, improve care, and…"
    },

    {
      id: Math.random(),
      url: recent2,
      title: "Bike parts warehouse, DE",
      description: "Delaware proved to be a very friendly place to work at… While invited there for completing a mid-sized warehouse for…"
    },

    {
      id: Math.random(),
      url: recent3,
      title: "Joy Hotel & Casino",
      description: "This hotel & casino complex is our most recent completed building… The whole structure that took us 6 months to…"
    }
  ]


  return (
    <>
      <div className='home'>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {
            images.map((image) => {
              return <SwiperSlide key={image.id}><Slide slide={image} /></SwiperSlide>
            })
          }
        </Swiper>
      </div>

      <div className='services'style={{backgroundColor:theme ? "#1d1d1d" : "#f8f8f8"}} >
        <div className='line'>

        </div>

        <h3 style={{color: theme ? "#fff" : "#000"}}>Our Services</h3>

        <div className='cardBox'>
          {
            cardInfo.map((card) => {
              return (
                <div className='card' key={card.id} style={{border: theme ? "1px solid #141414" : "1px solid #eeeeee"}}>
                  <div className='titleAndIconBox' style={{color: theme ? "#fff" : "#000"}}>
                    <div className='cardImgBox'>
                      <div className='bacground'></div>
                      <img src={card.icon} alt="" className='cardImg' />
                    </div>

                    <h4 className='cardTitle'>{card.title}</h4>
                  </div>

                  <span className='card-description'>
                    {card.description}
                  </span>
                </div>
              )
            })
          }
        </div>

      </div>
        
        <div className='history-box'  style={{backgroundColor:theme ? "#1d1d1d" : "#fff" , color: theme ? "#fff" : "#000"}}>
      <div className='history'>
        <div className="leftBlock">
          <div className="line2">

          </div>

          <h3 className='history-title'>Our History</h3>

          <span className='info-span'>Our construction company has been founded 10 years ago, at the very peak of the building frenzy in the US...</span>

          <span className='info-span2'>Since then we've built hundreds of commercial, government and private buildings and facilities. It may not sound like a lot, but if you estimate the manpower, working hours, materials, planning and correlating that were all involved in completing each separate project, then our productivity is immense!</span>

          <button className='read-more-bth'>READ MORE</button>
        </div>

        <div className="rightBlock">
          <img src={siteImage} alt="" />
        </div>
      </div>
      </div>

      <div className='companyDivisions'>
        <div className="divisions-box">
          {
            divisions.map((division) => {
              return (
                <div className='division' key={division.id} style={{ backgroundImage: `url(${division.url})` }}>
                  <h3>{division.title}</h3>
                  <div className='blackout'></div>

                  <div className='hiddenCard'>
                    <h3>{division.title}</h3>

                    <span>
                      {division.description}
                    </span>

                    <a href="">VIEW PROJECTS</a>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className='recentNews' style={{color: theme ? "#fff" : "#000"}}>
        <div className="line2">

        </div>

        <h3>Recent News</h3>

        <div className='recents'>
          {
            recents.map((recent) => {
              return (
                <div className='recent' key={recent.id}>
                  <img src={recent.url} alt="" />

                  <div className="info">
                    <h4>{recent.title}</h4>

                    <span className='data-box'><a href="">Jan.20, 2024</a><p>by Brian Williamson</p></span>

                    <span className='text'>
                      {recent.description}
                    </span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home;