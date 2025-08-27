export function Hero() {
  return (
    <section className="gradient-bg-hero text-white section-padding hero-section">
      <div className="container">
        <div className="row justify-content-center text-center hero-content">
          <div className="col-lg-10">
            <div className="badge bg-dark bg-opacity-50 px-4 py-2 mb-4 rounded-pill">
              <span className="text-white">🎬 Creative Production & Media Agency</span>
            </div>
            
            <h1 className="display-3 fw-bold mb-4 text-white">
              We Create
              <span className="d-block text-white">Amazing Content</span>
            </h1>
            
            <p className="lead mb-5 text-white">
              Professional video production, podcasts, and digital media that tells your story 
              and drives real results for your business.
            </p>
            
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <a href="#contact" className="btn-gradient-primary text-decoration-none">
                Start Your Project
              </a>
              <a href="#work" className="btn-gradient-secondary text-decoration-none">
                View Our Work
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-5 d-flex flex-wrap justify-content-center align-items-center gap-4 text-white">
              <div className="d-flex align-items-center gap-2">
                <div className="d-flex">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="rounded-circle bg-white bg-opacity-30 border border-white" style={{width: '32px', height: '32px', marginLeft: i > 1 ? '-8px' : '0'}}></div>
                  ))}
                </div>
                <span className="small text-white">Toronto-based team</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <div className="d-flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-warning">★</span>
                  ))}
                </div>
                <span className="small text-white">5-star rated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
