export function Team() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      bio: "10+ years in video production and creative direction",
      image: "https://via.placeholder.com/200x200/3B82F6/FFFFFF?text=SJ"
    },
    {
      name: "Mike Chen",
      role: "Lead Producer",
      bio: "Expert in podcast production and audio engineering",
      image: "https://via.placeholder.com/200x200/10B981/FFFFFF?text=MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Social Media Specialist",
      bio: "Creating engaging content for digital platforms",
      image: "https://via.placeholder.com/200x200/F59E0B/FFFFFF?text=ER"
    },
    {
      name: "David Kim",
      role: "Technical Director",
      bio: "Specializing in live streaming and technical production",
      image: "https://via.placeholder.com/200x200/EF4444/FFFFFF?text=DK"
    }
  ]

  return (
    <section id="team" className="gradient-bg-team section-padding">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h2 className="section-title text-dark-custom">Our Team</h2>
            <p className="section-subtitle text-muted-custom">
              Meet the creative professionals behind our amazing work
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          {team.map((member, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card-custom text-center p-4">
                <div className="mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="rounded-circle mx-auto border border-4 border-white shadow"
                    style={{width: '120px', height: '120px', objectFit: 'cover'}}
                  />
                </div>
                <h3 className="h5 fw-bold text-dark-custom mb-2">
                  {member.name}
                </h3>
                <p className="text-primary fw-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-muted-custom small">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Team CTA */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8">
            <div className="card-custom p-5 text-center">
              <h3 className="h2 fw-bold text-dark-custom mb-3">
                Work With Our Team
              </h3>
              <p className="text-muted-custom mb-4">
                Our experienced team is ready to bring your creative vision to life. Let's collaborate on your next project.
              </p>
              <a
                href="#contact"
                className="btn-gradient-primary text-decoration-none"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
