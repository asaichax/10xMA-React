export function Footer() {
  return (
    <footer className="gradient-bg-footer text-white py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="d-flex align-items-center gap-3 mb-4">
              <h3 className="h2 fw-bold text-white mb-0">10XMA</h3>
            </div>
            <p className="text-light mb-4">
              Creative Production & Media Agency based in Toronto, creating compelling content that drives results 
              and tells your story in the most impactful way.
            </p>
            <div className="d-flex gap-3">
              <div className="bg-white bg-opacity-20 rounded p-2 text-white">
                <span className="fw-bold">📧</span>
              </div>
              <div className="bg-white bg-opacity-20 rounded p-2 text-white">
                <span className="fw-bold">📱</span>
              </div>
              <div className="bg-white bg-opacity-20 rounded p-2 text-white">
                <span className="fw-bold">💼</span>
              </div>
            </div>
          </div>
          
          <div className="col-md-3">
            <h4 className="h5 fw-semibold mb-4 text-white">Services</h4>
            <ul className="list-unstyled text-light">
              <li className="mb-2">Video Production</li>
              <li className="mb-2">Podcast Production</li>
              <li className="mb-2">Social Media Content</li>
              <li className="mb-2">Live Streaming</li>
              <li className="mb-2">Brand Storytelling</li>
            </ul>
          </div>
          
          <div className="col-md-3">
            <h4 className="h5 fw-semibold mb-4 text-white">Contact</h4>
            <ul className="list-unstyled text-light">
              <li className="d-flex align-items-center gap-2 mb-2">
                <span>📧</span>
                <span>10XMAinc@gmail.com</span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-2">
                <span>📍</span>
                <span>Toronto, Ontario</span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-2">
                <span>🌍</span>
                <span>Canada</span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-2">
                <span>⏰</span>
                <span>24/7 Support</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-top border-white border-opacity-25 mt-4 pt-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="text-light small">
                © 2024 10XMA Creative Production & Media Agency. All rights reserved.
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex gap-4 justify-content-md-end small text-light">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
                <span>Cookie Policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
