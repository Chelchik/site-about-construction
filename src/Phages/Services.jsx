import React, { useContext, useState } from 'react'
import infoImg1 from '../websiteImage/service-1-652x491.jpg'
import infoImg2 from '../websiteImage/service-2-652x491.jpg'
import infoImg3 from '../websiteImage/service-3-652x491.jpg'
import infoImg4 from '../websiteImage/service-4-652x491.jpg'
import infoImg5 from '../websiteImage/service-5-652x491.jpg'
import infoImg6 from '../websiteImage/service-6-652x491.jpg'
import { Theme } from '../context';

function Services() {
  const { theme, setTheme } = useContext(Theme)
  const [screen, setScreen] = useState(window.matchMedia("(max-width:1480px)").matches);
  const [screenPhone, setScreenPhone] = useState(window.matchMedia("(max-width:500px)").matches);

  const leftBlock = {
    width: screen ? "100%" : "50%",
    display: "flex",
    flexDirection: "column",
    gap: "40px"
  }

  const rightBlock = {
    width: screen ? "100%" : "50%",
  }

  const servicesInfo = {
    width: "100%",
    padding: screenPhone ? "40px" : "150px",
    display: "flex",
    flexDirection: screen ? "column" : "row",
    gap: "30px",
    backgroundColor: theme ? "#1d1d1d" : "#f8f8f8",
    color: theme ? "#fff" : "#000"
  }

  const servicesInfo2 = {
    width: "100%",
    padding: screenPhone ? "40px" : "150px",
    display: "flex",
    flexDirection: screen ? "column" : "row-reverse",
    gap: "30px",
    bacgroundColor: theme ? "#141414" : "#fff",
    color: theme ? "#fff" : "#000"
  }

  const servicesInfoArr = [
    {
      id: Math.random(),
      title: "General Contracting",
      description: "We have a long list of professional contractors, whom our engineers and architects enjoy to work with on a majority of our projects!",
      description2: "Throughout our years in business, we've accumulated a strong expertise both in managing and completing any type of a construction, as well as in choosing the right vendors and sub-contractors... We understand how vital it is to coordinate the project in a timely, cost-efficient way. As of now we've alreeady dealt with numerous mid and large scale constructions, so we've mastered the art of minimizing the extra expenses, completing each project's stage on schedule and implementing a live project intact with both original engineering solutions and the client's initial vision...",
      url: infoImg1,
      class: servicesInfo
    },

    {
      id: Math.random(),
      title: "Construction Management",
      description: "Construction project management is essential. We're using the most time and iterations efficient life cycles for that.",
      description2: "As you may know, the construction planning process has always been far from perfect... In the past, project schedules were unrealistically optimistic... That resulted in an average of 45% of work promised in a week actually being completed at a later date than its deadline dictated. This kind of protraction left subcontractors waiting for the previous task to be completed, even before the next stage of work could have proceeded further... To fix that issue, our construction bureau have implemented the Pull Planning process, coordinated with the trade contractors on a weekly basis. Pull Planning method estimates the scheduling in reverse.",
      url: infoImg2,
      class: servicesInfo2
    },

    {
      id: Math.random(),
      title: "Design-Build",
      description: "If a project is not too complex, we may hire a designer-builder type of contractor, to make the longevity of the construction shorter.",
      description2: "With the help of such project delivery method, we'll be able to overlap the design and the construction part, to eliminate any kind of postponing or schedule delays... Also, while many people think that this fast-paced kind of project delivery can be led by architect only, we practiced a designer, engineer and a contractor as team leaders and it proved to be just as efficient. By using this work method, we'll be able to complete your project much faster!",
      url: infoImg3,
      class: servicesInfo
    },

    {
      id: Math.random(),
      title: "Pre-construction Services",
      description: "We take our time on initial planning before any construction begins, to balance all the financial and efficiency issues beforehand...",
      description2: "This traditional type of construction management works great for big scale buildings and structures. The fact that in this scenario the design stage is done before the actual on-site construction even begins, allows us to estimate all the resources and man-hours needed fort project's completion. That kind of a step-by-step, preliminary construction planning will allow you to be right on schedule while your big project will get built.",
      url: infoImg4,
      class: servicesInfo2
    },

    {
      id: Math.random(),
      title: "Construction Services",
      description: "Our customers love the pace/quality tempo that we show during each of the principal construction processes!",
      description2: "We're comfortable with any kind of a project that you want us to build! As long as it's technically possible to convert your vision to a standing structure, we'll be more than glad to do it. These are not mere words, as since 2006 we've been building both small, private and commercial buildings like houses and shops, as well as huge, complex megastructures like a military warehouse, a commercial high-rise business centre or a university's campus are...",
      url: infoImg5,
      class: servicesInfo
    },

    {
      id: Math.random(),
      title: "Building Information Modeling",
      description: "Oftentimes physical and functional essence of any construction project needs to be represented digitally, in a 3D model format.",
      description2: "In short, the construction industry is undergoing fundamental changes, not comparable in impact with anything before it, not even with the rise of lean manufacturing in auto-making in the 1980s. An innovative and time-saving tool called Building Information Modeling, or BIM, is the reason for that revolution. BIM technology rapidly enhances complex building processes, shortcutting any project completion date, cutting the expenses and improving the overall quality of the construction. Our construction company is the leading industry exponent, with approximately $30 billion in BIM project experience. We want clients to understand the incredible advantages that the BIM offers and we want them to get prepared to embrace this new technology.",
      url: infoImg6,
      class: servicesInfo2
    },

  ]

  return (
    <>
      <div className='services-site'>
        <div className="line">

        </div>

        <h3>Our Services</h3>

        <span>
          The size of our team and our protracted expertise allow us to accomplish absolutely any type of a building, regardless of its height and/or complexity!
        </span>
      </div>

      <div className='services-departments'>
        {
          servicesInfoArr.map((department) => {
            return (
              <div style={department.class} key={department.id}>
                <div style={leftBlock}>
                  <div className="line2">

                  </div>

                  <h3 className='info-title'>{department.title}</h3>

                  <span><h4>{department.description}</h4></span>

                  <span className='info-span2'>
                    {department.description2}
                  </span>

                  <button className='read-more-bth'>READ MORE</button>
                </div>

                <div style={rightBlock}>
                  <img src={department.url} alt="" className='services-info-rightBlock-img' />
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Services;