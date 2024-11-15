import React from 'react'

function Slide({slide}) {  
    const imgStyle = {
        width: "100%",
        height: "100%",
        backgroundImage: `url(${slide.url})`,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px"
      }  

  return (
    <div style={imgStyle}>
        <h3 className='title'>{slide.title}</h3>

        <span className='description'>{slide.description}</span>

        <button className='seeMoreBtn'>See Our Recent Projects</button>
    </div>
  )
}

export default Slide