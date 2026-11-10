function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <h2>Choose Your Plan</h2>

        <div className="pricing-list">

          <div className="pricing-card">
            <h3>Basic</h3>
            <h2>Rp49.000/month</h2>
            <p>Incoming and outgoing inventory records.</p>
            <p>Daily profit tracking.</p>
            <button>Choose Basic</button>
          </div>

          <div className="pricing-card">
            <h3>Business</h3>
            <h2>Rp99.000/month</h2>
            <p>Everything in Basic.</p>
            <p>Sales analytics charts.</p>
            <p>24/7 Support.</p>
            <button>Choose Business</button>
          </div>

          <div className="pricing-card">
            <h3>Entrepreneur</h3>
            <h2>Rp199.000/month</h2>
            <p>Everything in Business.</p>
            <p>Excel export.</p>
            <p>AI income prediction.</p>
            <button>Choose Entrepreneur</button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Pricing