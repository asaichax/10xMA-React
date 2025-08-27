export function Services() {
  const services = [
    {
      title: "Video Production",
      description: "Professional video content for commercials, corporate videos, and social media.",
      icon: "🎬"
    },
    {
      title: "Podcast Production",
      description: "End-to-end podcast production including recording, editing, and distribution.",
      icon: "🎙️"
    },
    {
      title: "Social Media Content",
      description: "Engaging content for all major social media platforms.",
      icon: "📱"
    },
    {
      title: "Live Streaming",
      description: "Professional live streaming services for events and broadcasts.",
      icon: "📺"
    }
  ]

  return (
    <section id="services" className="gradient-bg-services section-padding">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h2 className="section-title text-dark-custom">Our Services</h2>
            <p className="section-subtitle text-muted-custom">
              We offer comprehensive media production services to bring your vision to life
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card-custom h-100 p-4 text-center">
                <div className="icon-large">{service.icon}</div>
                <h3 className="h4 fw-bold mb-3 text-dark-custom">{service.title}</h3>
                <p className="text-muted-custom">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8">
            <div className="card-custom p-5 text-center">
              <h3 className="h2 fw-bold mb-3 text-dark-custom">Ready to Get Started?</h3>
              <p className="text-muted-custom mb-4">
                Let's discuss your project and create something amazing together.
              </p>
              <a href="#contact" className="btn-gradient-primary text-decoration-none">
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
