// imports
import React, { useState } from 'react';
import './Account.css';
import Button from '../../components/Button/Button.jsx';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';

// compopnent 
const Account = () => {
  // state managment
  const [slide, setSlide] = useState(false);
  const [headerText, setHeaderText] = useState('Welcome Back!');
  const [signInText, setSignInText] = useState('Already a member? Please sign in to reconnect with your anime profile.');
  const [showSignInButton, setShowSignInButton] = useState(true);
  const [signUpButtonText, setSignUpButtonText] = useState('SIGN UP');
  const [createAccountHeaderText, setCreateAccountHeaderText] = useState('Create Account');
  const [showEmailInput, setShowEmailInput] = useState(true);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // func to handle sign in button press
  const handleSignInClick = () => {
    if (!slide) {
      // first click on "sign in" just slide div animation and update text boxes
      setSlide(true);
      setHeaderText('Did you know?');
      setSignInText('The symbol of the Hidden Leaf Village, known as the "Konoha" symbol, is actually based on a leaf design that Masashi Kishimoto, the creator of Naruto, sketched during the early stages of the mangas development. This simple yet iconic symbol has become one of the most recognizable emblems in anime and manga culture.');
      setShowSignInButton(false);
      setSignUpButtonText('SIGN IN');
      setCreateAccountHeaderText('Login');
      setShowEmailInput(false);
    } else {
      // after animation is done collect login info
      console.log("Logging in with:");
      console.log("Username:", username);
      console.log("Password:", password);
    }
  };

  // func to handle signup button pressed
  const handleSignUpClick = () => {
    // collect sign up info
    console.log("Signing up with:");
    console.log("Email:", email);
    console.log("Username:", username);
    console.log("Password:", password);
  };

  // return 
  return (
    <div>
      <Header />
      <div className="container">
        <div className={`sliding-div ${slide ? 'slide-right' : ''}`}></div>
        <div className='box'>
          <div className='content'>
            <div id='header' className='text-no-bg'>{headerText}</div>
            <div id='content-text' className='introText text-no-bg'>{signInText}</div>
            {showSignInButton && <Button text='SIGN IN' onClick={handleSignInClick} />}
          </div>
          <div className='content'>
            <div id='header' className='text-no-bg'>{createAccountHeaderText}</div>
            {showEmailInput && <input placeholder="Email" id='content-text' value={email} onChange={(e) => setEmail(e.target.value)} />}
            <input placeholder="Username" id='content-text' value={username} onChange={(e) => setUsername(e.target.value)} />
            <input placeholder="Password" id='content-text' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button text={signUpButtonText} onClick={slide ? handleSignInClick : handleSignUpClick} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// export component
export default Account;