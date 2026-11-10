
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

function Contact() {
  function handleSubmit(e) {
    e.preventDefault()
    alert('Your message has been submitted!')
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-heading">
          <h2>Get in Touch</h2>
          <p>
            Have questions about StockUp? We'd love to hear from you.
            Send us a message and we'll get back to you.
          </p>
        </div>

        <div className="contact-content">
          {/* Left Column - Contact Information */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              Reach out to our team through any of the following channels.
            </p>

            <div className="contact-info-item">
              <div className="contact-icon">
                <Mail size={20} />
              </div>
              <div>
                <h4>Email</h4>
                <p>johndoe@stockup.com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <Phone size={20} />
              </div>
              <div>
                <h4>Phone</h4>
                <p>+62 812-3456-7890</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <MapPin size={20} />
              </div>
              <div>
                <h4>Address</h4>
                <p>Jakarta, Indonesia</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <Clock size={20} />
              </div>
              <div>
                <h4>Working Hours</h4>
                <p>Monday - Friday, 09:00 - 17:00</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="contact-form-wrapper">
            <h3>Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="contact-form">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                required
              />

              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="Your email"
                required
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="How can we help you?"
                rows="5"
                required
              />

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
