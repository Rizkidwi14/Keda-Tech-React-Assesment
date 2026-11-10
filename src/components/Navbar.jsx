import { useState } from 'react'
import Login from './Login'

function Navbar() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      <nav className="navbar">
        <div className="container navbar-content">

          <a href="#home" className="logo">
            StockUp
          </a>

          <div className="nav-links">
            <a href="#home"><strong>Home</strong></a>
            <a href="#about"><strong>About</strong></a>
            <a href="#features"><strong>Features</strong></a>
            <a href="#pricing"><strong>Pricing</strong></a>
            <a href="#contact"><strong>Contact</strong></a>
          </div>

          <button
            className="login-button"
            onClick={() => setShowLogin(true)}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#0056b3'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#007bff'
            }}
          >
            Login
          </button>

        </div>
      </nav>

      <Login
        open={showLogin}
        onOpenChange={setShowLogin}
      />
    </>
  )
}

export default Navbar