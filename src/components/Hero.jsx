function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">

        <div className="hero-text">
          <span className="hero-label">
            BUSINESS MANAGEMENT MADE SIMPLE
          </span>

          <h1>
            Manage Your Business
            <span> Smarter with StockUp</span>
          </h1>

          <p>
            Track your inventory, manage sales, and monitor
            your profits with one simple platform.
          </p>

          <a href="#pricing" className="primary-button">
            Explore Plans
          </a>
        </div>

        <div className="hero-preview">
          <div className="preview-card">
            <h3>Business Overview</h3>

            <div className="preview-stat">
              <span>Total Products</span>
              <strong>1,250</strong>
            </div>

            <div className="preview-stat">
              <span>Monthly Sales</span>
              <strong>Rp15.500.000</strong>
            </div>

            <div className="preview-stat">
              <span>Total Profit</span>
              <strong>Rp4.250.000</strong>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero