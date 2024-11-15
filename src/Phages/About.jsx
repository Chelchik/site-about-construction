import React, { useContext } from 'react'
import images1 from '../websiteImage/imagesAbout.png'
import images2 from '../websiteImage/imagesAbout2.png'
import images3 from '../websiteImage/imagesAbout4.png'
import images4 from '../websiteImage/imagesAbout3.png'
import manager1 from '../websiteImage/manager1.jpg'
import manager2 from '../websiteImage/manager2.jpg'
import manager3 from '../websiteImage/manager3.jpg'
import manager4 from '../websiteImage/manager4.jpg'
import manager5 from '../websiteImage/manager5.jpg'
import manager6 from '../websiteImage/manager6.jpg'
import Divisions, { Theme } from '../context'
import userComment1 from '../websiteImage/deborah-quagmire-120x120.jpg'
import userComment2 from '../websiteImage/benedict-arnold-120x120.jpg'
import quotes from '../websiteImage/quotes.png'

function About() {
  const {theme, setTheme} = useContext(Theme)

  const cardInfo = [
    {
      id: Math.random(),
      icon: images1,
      title: "Core Values",
      description: "Construction's core values have been shaped over more than 10 years of delivering the finest construction services to our clients. They stood to the test of time and these principles remain our bedrock lynchpins. We never tried to cut on either quality, the pace of work or any other construction aspect. We stay true to our full promise of efficiency!"
    },

    {
      id: Math.random(),
      icon: images2,
      title: "Pace",
      description: "Our love for detailed, bullet-point preparations, as well as to open and clear project management and communication is what makes us faster than the competition. Recently we compared a technically similar 10-stories building that we built, and the other built by our main competitor. Their price and pace was 2 times lower than hours!",
    },

    {
      id: Math.random(),
      icon: images3,
      title: "Quality",
      description: "Quality is focal in every little aspect of the construction. The mindset of both our senior employees and all the way to our on-site contractors and construction workers centers on attention. It's out attention to details that allows us to work on a multitude of projects simultaneously, while staying on schedule!"
    },

    {
      id: Math.random(),
      icon: images4,
      title: "Projects Completed",
      description: "Besides valuing your time, your money and your vision for the project, we also value the Mother Nature as well...It cannot be denied anymore, that even the small construction implements the nature in a bad way... That's why we're leading the effort to use only eco-friendly materials and comply with keeping the environment unpollluted by the work we do!",
    },
  ]

  const divisions = useContext(Divisions)

  const managers = [
    {
      id: Math.random(),
      url: manager1,
      name: "Calvin Fitzgerald",
      description: "Calvin Fitzgerald is an established and well-respected expert in the construction industry. With more than 35 years of practical experience in the business, Calvin has built his career on bringing the most outlandish conceptual visions from blueprints to a street next to yours... His leadership skills cemented Construction's dominating positions among our competitors.",
      jobTitle: "President"
    },

    {
      id: Math.random(),
      url: manager2,
      name: "Taylor Wilson",
      description: "Taylor's been involved in the construction business since the 1970's... His profound experience in building miscellaneous types of projects and his innovative mindset makes him the leading force in our company. The BIM and Db methods that he implemented are now the lynchpins of our business operations with all of our clients...",
      jobTitle: "Chief Executive Officer"
    },

    {
      id: Math.random(),
      url: manager3,
      name: "Josh Wagner",
      description: "Josh leads our creative team of designers and engineers...His proven ability to manage the most complex projects and bring the craziest concepts to life is what makes him as efficient as he is. Together, this creative team can be the launchpad of any project, giving it a head start at the earliest stages of the construction project's planning.",
      jobTitle: "Chief Design Officer"
    },

    {
      id: Math.random(),
      url: manager4,
      name: "Luis Maxwell",
      description: "While we do all the pre-construction planning and sketching, scheduling and managing on an in-house basis, we hire a lot of 3rd party contractors for the actual on-site work. Luis Maxwell is the person to manage all our contractors across all of our projects being currently in development.",
      jobTitle: "Contractors Operations Head"
    },

    {
      id: Math.random(),
      url: manager5,
      name: "Ken Ferguson",
      description: "Ken's been working as a chief financial analyst for Bechtel; Fluor Corp.; CB&I and Kiewit Corp. During those years he excelled in this field, efficiently cutting the side expenses that were bringing those top contractors down. Few years ago we managed to get him onboard, and not even a full year later we've had a our returns in a form of an optimized expenses budget!",
      jobTitle: "Chief Financial Officer"
    },

    {
      id: Math.random(),
      url: manager6,
      name: "Edward Elliott",
      description: "Previously Edward owned his own mid-sized contracting company. That kind of a first hand, entrepreneurial experience in managing all the processes and operations for a construction company got our attention. Last year we invited him to join our team, which he fortunately did...",
      jobTitle: "Vice President of Operations"
    },
  ]

  const usersComments = [
    {
      id: Math.random(),
      userAvatar: userComment1,
      name: "Deborah Quagmire",
      comment: "As an official fro North Dakota's state government, I want to thank Our construction company. On behalf of the citizens of the state, we're so grateful for this new, innovative building! This allows North Dakota to hold its legislative operations in a contemporary, progressive architectural environment!"
    },
    {
      id: Math.random(),
      userAvatar: userComment2,
      name: "Benedict Arnold",
      comment: "This bridge project was funded by small and medium business of Rhode Island, as well as by its private citizens. After the hurricane hit our shores recently, we all were concerned for the Okaloppo river not having a proper landline connection. But now, after Construction company finished the project, the county can enjoy its new, beautiful infrastructure!"
    },
  ]

  return (
    <>
      <div className='about'>
        <div className="line2">

        </div>

        <h3>About</h3>

        <span>During all this time we stayed true to one and the same principles of business operations.</span>
      </div>

      <div className='cardBox'>
        {
          cardInfo.map((card) => {
            return (
              <div className='card2' key={card.id} style={{color: theme ? "#fff" : "#000", border: theme ? "1px solid #141414" : "1px solid #eeeeee"}}>
                <div className='titleAndIconBox'>
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

      <div className='information-about-the-company'>
        <div className='information-box'>
          <h4>250</h4>

          <p>Projects Completed</p>
        </div>

        <div className='information-box'>
          <h4>302</h4>

          <p>Staff members</p>
        </div>

        <div className='information-box'>
          <h4>15</h4>

          <p>Million Man-hours</p>
        </div>

        <div className='information-box'>
          <h4>99</h4>

          <p>Awards won</p>
        </div>
      </div>

      <div className='managers-box' style={{color: theme ? "#fff" : "#000"}}>
        <div className="line2">

        </div>

        <h3>Executive managers</h3>

        <div className='managers'>
          {
            managers.map((manager) => {
              return (
                <div className='mamnager-card' key={manager.id}>
                  <img src={manager.url} alt="" />

                  <div className="manager-info">
                    <h4 className='manager-name'>{manager.name}</h4>

                    <p className='manager-job'>{manager.jobTitle}</p>

                    <span className='manager-text'>
                      {manager.description}
                    </span>
                  </div>
                </div>
              )
            })
          }
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

      <div className='usersComments' style={{color: theme ? "#fff" : "#000"}}>
        {
          usersComments.map((comment) => {
            return (
              <div className='comments' key={comment.id}>
                <img src={comment.userAvatar} alt="" className='userAvatar' />

                <div className='comment-info'>
                  <img src={quotes} alt="" className='quotes' />

                  <span className='info-span2'>{comment.comment}</span>

                  <h4>{comment.name}</h4>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default About;