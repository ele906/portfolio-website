import React from 'react'

function Hobbies() {
  const hobbies = [
    {
      title: "Goose Enthusiast 🪿",
      description: "I have a genuine love for geese! Whether it's observing their behavior, learning about migration patterns, or just spending time with them, geese never fail to fascinate me. Fun fact: My project 'Honkonomics' was inspired by my interest in understanding flock dynamics!",
      images: [
        "/portfolio-website/images/geese1.jpg",
        "/portfolio-website/images/geese2.jpg",
        "/portfolio-website/images/geese3.jpg"
      ]
    },
    {
      title: "Geography Explorer 🗺️",
      description: "I love learning about geography - from traversing the highest mountains in the Urals to exploring mysterious plateaus in the Yilgarn Craton. I enjoy understanding the stories behind the land and how geography shapes our world.",
      images: []
    },
    {
      title: "Astronomy & Indigenous Advocacy 🌟",
      description: "I'm passionate about the intersection of astronomy and Indigenous communities. I've written about conflicts like the Thirty Meter Telescope on Mauna Kea, exploring how we can decolonize science and respect Indigenous knowledge.",
      images: []
    }
  ]

  return (
    <section id="hobbies" className="section">
      <h2>Beyond Code</h2>
      <p className="section-intro">
        I believe being a well-rounded engineer means having diverse interests and perspectives. 
        Here are some things I'm passionate about outside of software development!
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