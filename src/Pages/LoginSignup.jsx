import './CSS/LoginSignUp.css'

const Loginsignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" name="" id="" placeholder="Your Name..." />
          <input type="email" name="" id="" placeholder="Email Address..." />
          <input type="password" name="" id="" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already had an account? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Loginsignup