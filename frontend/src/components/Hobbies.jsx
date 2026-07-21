import React from 'react'

function Hobbies() {
  const hobbies = [
    {
      title: "Goose Enthusiast 🪿",
      description: "I have a genuine love for geese! Whether it's observing their behavior, learning about migration patterns, or just spending time with them, geese never fail to fascinate me. In fact, my GooseGame project was inspired by my love for geese!",
      images: [
        "/portfolio-website/images/geese1.jpg",
        "/portfolio-website/images/geese2.jpg",
        "/portfolio-website/images/geese3.jpg"
      ]
    },
    {
      title: "Astronomy🌟",
      description: "I love physics and astronomy! Back in high school, I represented Canada and participated in the 16th International Olympiad of Astronomy and Astrophysics. Even though I'm now doing CS, I still love to nerd out about astro when I get the chance :).",
      images: [
        "/portfolio-website/images/ioaa_1.jpg",
        "/portfolio-website/images/ioaa_2.jpg",
      ]
    }
  ]

  return (
    <section id="hobbies" className="section">
      <h2>Beyond Code</h2>
      <p className="section-intro">
        Being a well-rounded engineer means having diverse interests and perspectives. 
        Here are some things I'm passionate about outside of software!
      </p>
      
      <div className="hobbies-list">
        {hobbies.map((hobby, index) => (
          <div key={index} className="hobby-card">
            <h3>{hobby.title}</h3>
            <p>{hobby.description}</p>
            
            {hobby.images.length > 0 && (
              <div className="hobby-gallery">
                {hobby.images.map((image, imgIndex) => (
                  <img 
                    key={imgIndex}
                    src={image} 
                    alt={`${hobby.title} ${imgIndex + 1}`}
                    className="hobby-image"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hobbies