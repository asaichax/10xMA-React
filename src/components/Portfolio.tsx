export function Portfolio() {
  const projects = [
    {
      title: "Corporate Brand Video",
      category: "Video Production",
      description: "A compelling brand story for a tech startup",
      image: "https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Video+Project"
    },
    {
      title: "Podcast Series",
      category: "Podcast Production",
      description: "Weekly podcast for a business consulting firm",
      image: "https://via.placeholder.com/400x300/10B981/FFFFFF?text=Podcast+Project"
    },
    {
      title: "Social Media Campaign",
      category: "Social Media",
      description: "Multi-platform campaign for a retail brand",
      image: "https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Social+Media+Project"
    },
    {
      title: "Live Event Stream",
      category: "Live Streaming",
      description: "Virtual conference for 500+ attendees",
      image: "https://via.placeholder.com/400x300/EF4444/FFFFFF?text=Live+Stream+Project"
    }
  ]

  return (
    <section id="work" className="gradient-bg-portfolio section-padding">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h2 className="section-title text-dark-custom">Our Work</h2>
            <p className="section-subtitle text-muted-custom">
              Recent projects we're proud of and excited to share
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card-custom overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-100 h-100 object-fit-cover"
                    style={{height: '200px'}}
                  />
                  <div className="position-absolute top-0 start-0 m-3">
                    <span className="badge bg-white bg-opacity-90 text-dark px-3 py-2 rounded-pill">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="h5 fw-bold text-dark-custom mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-custom">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Portfolio CTA */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8">
            <div className="card-custom p-5 text-center">
              <h3 className="h2 fw-bold text-dark-custom mb-3">
                Want to See More?
              </h3>
              <p className="text-muted-custom mb-4">
                We have many more projects to showcase. Let's discuss how we can create something amazing for your brand.
              </p>
              <a
                href="#contact"
                className="btn-gradient-primary text-decoration-none"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
