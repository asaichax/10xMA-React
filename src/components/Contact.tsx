import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budgetRange: '',
    projectType: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="gradient-bg-contact section-padding">
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <h2 className="section-title text-dark-custom">Get In Touch</h2>
            <p className="section-subtitle text-muted-custom">
              Ready to start your next project? Let's create something amazing together!
            </p>
          </div>
        </div>
        
        <div className="row g-5">
          {/* Contact Info */}
          <div className="col-lg-6">
            <div className="mb-5">
              <h3 className="h2 fw-bold text-dark-custom mb-4">
                Let's Start a Conversation
              </h3>
              <p className="text-muted-custom">
                Whether you're ready to get started or just want to learn more, our team is here to help. 
                We'll work with you to understand your needs and show you how we can bring your creative vision to life.
              </p>
            </div>
            
            <div className="mb-5">
              <div className="d-flex align-items-start gap-3 mb-4">
                <div className="bg-primary rounded p-3 text-white">
                  <span className="fw-bold">📧</span>
                </div>
                <div>
                  <h4 className="fw-semibold text-dark-custom">Email Us</h4>
                  <p className="text-muted-custom">10XMAinc@gmail.com</p>
                  <p className="small text-muted">We'll respond within 24 hours</p>
                </div>
              </div>
              
              <div className="d-flex align-items-start gap-3">
                <div className="bg-success rounded p-3 text-white">
                  <span className="fw-bold">📍</span>
                </div>
                <div>
                  <h4 className="fw-semibold text-dark-custom">Visit Us</h4>
                  <p className="text-muted-custom">Toronto, Ontario</p>
                  <p className="small text-muted">Based in Toronto, serving clients worldwide</p>
                </div>
              </div>
            </div>
            
            {/* Process Steps */}
            <div className="card-custom p-4">
              <h4 className="fw-semibold text-dark-custom mb-4">Our Process</h4>
              <div>
                {[
                  "Email us with your project requirements",
                  "Schedule a call to discuss goals and budget",
                  "Get a tailored quote that fits your needs",
                  "Start production with our full-service team",
                ].map((step, index) => (
                  <div key={index} className="d-flex align-items-center gap-3 mb-3">
                    <div className="bg-primary rounded-circle text-white small fw-bold d-flex align-items-center justify-content-center" style={{width: '24px', height: '24px'}}>
                      {index + 1}
                    </div>
                    <span className="small text-muted-custom">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="card-custom p-5">
              <h3 className="h2 fw-bold text-dark-custom mb-4">Request a Quote</h3>
              <p className="text-muted-custom mb-4">
                Tell us about your project and we'll get back to you with a custom quote.
              </p>
              
              <form onSubmit={handleSubmit}>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label fw-semibold text-dark-custom">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-control form-control-custom"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label fw-semibold text-dark-custom">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-control form-control-custom"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="company" className="form-label fw-semibold text-dark-custom">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-control form-control-custom"
                    placeholder="Your company name"
                  />
                </div>
                
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label htmlFor="budgetRange" className="form-label fw-semibold text-dark-custom">
                      Budget Range *
                    </label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      required
                      className="form-select form-control-custom"
                    >
                      <option value="">Select budget range</option>
                      <option value="Under $5,000">Under $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                      <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                      <option value="Over $50,000">Over $50,000</option>
                    </select>
                  </div>
                  
                  <div className="col-md-6">
                    <label htmlFor="projectType" className="form-label fw-semibold text-dark-custom">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="form-select form-control-custom"
                    >
                      <option value="">Select project type</option>
                      <option value="Video Production">Video Production</option>
                      <option value="Podcast Production">Podcast Production</option>
                      <option value="Social Media Content">Social Media Content</option>
                      <option value="Live Streaming">Live Streaming</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-semibold text-dark-custom">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="form-control form-control-custom"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn-gradient-primary w-100"
                >
                  Send Quote Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
