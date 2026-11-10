import { Dialog } from 'radix-ui'
import { X, LogIn } from 'lucide-react'

function Login({ open, onOpenChange }) {

  function handleSubmit(e) {
    e.preventDefault()

    alert('Login functionality is not connected yet!')
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>

      <Dialog.Portal>

        <Dialog.Overlay className="login-overlay" />

        <Dialog.Content className="login-modal">

          <Dialog.Close asChild>
            <button className="close-button">
              <X size={20} />
            </button>
          </Dialog.Close>

          <div className="login-heading">
            <div className="login-icon">
              <LogIn size={24} />
            </div>

            <Dialog.Title>
              Welcome Back!
            </Dialog.Title>

            <Dialog.Description>
              Login to your StockUp account.
            </Dialog.Description>
          </div>

          <form onSubmit={handleSubmit}>

            <label htmlFor="email">Email Address</label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="password">Password</label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />

            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>

            <button type="submit" className="login-submit">
              Login
            </button>

          </form>

          <p className="register-text">
            Don't have an account? <a href="#contact">Contact us</a>
          </p>

        </Dialog.Content>

      </Dialog.Portal>

    </Dialog.Root>
  )
}

export default Login