import './Account.css'

const Account = () => {
  return (
    <div className="container">
      <div className='box'>
        <div className='content' id='background-div-orange'>
          <div id='header'>Welcome Back!</div>
          <div id='content-text' className='introText'>Already a member? Please sign in to reconnect with your anime profile.</div>
          <a className='button'>SIGN IN</a>
        </div>
        <div className='content'>
          <div className='text-with-bg-orange' id='header'>Create Account</div>
          <input placeholder="Email" id='content-text'/>
          <input placeholder="Username" id='content-text'/>
          <input placeholder="Password" id='content-text'/>
          <a className='button'>SIGN UP</a>
        </div>
      </div>
    </div>
  )
}

export default Account