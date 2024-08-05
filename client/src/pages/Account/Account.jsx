import React, { useState } from 'react';
import './Account.css';
import Button from '../../components/Button/Button.jsx';

const Account = () => {
  const [slide, setSlide] = useState(false);
  const [headerText, setHeaderText] = useState('Welcome Back!');
  const [signInText, setSignInText] = useState('Already a member? Please sign in to reconnect with your anime profile.');
  const [showSignInButton, setShowSignInButton] = useState(true);
  const [signUpButtonText, setSignUpButtonText] = useState('SIGN UP');
  const [createAccountHeaderText, setCreateAccountHeaderText] = useState('Create Account');
  const [showEmailInput, setShowEmailInput] = useState(true);

  const handleSignInClick = () => {
    console.log("clicked");
    setSlide(true);
    setHeaderText('Did you know?');
    setSignInText('The symbol of the Hidden Leaf Village, known as the "Konoha" symbol, is actually based on a leaf design that Masashi Kishimoto, the creator of Naruto, sketched during the early stages of the mangas development. This simple yet iconic symbol has become one of the most recognizable emblems in anime and manga culture.');
    setShowSignInButton(false);
    setSignUpButtonText('SIGN IN');
    setCreateAccountHeaderText('Login');
    setShowEmailInput(false);
  };

  return (
    <div className="container">
      <div className={`sliding-div ${slide ? 'slide-right' : ''}`}></div>
      <div className='box'>
        <div className='content'>
          <div id='header' className='text-no-bg'>{headerText}</div>
          <div id='content-text' className='introText text-no-bg'>{signInText}</div>
          {showSignInButton && <Button text='SIGN IN' onClick={handleSignInClick} />}
        </div>
        <div className='content'>
          <div id='header' className='text-with-bg'>{createAccountHeaderText}</div>
          {showEmailInput && <input placeholder="Email" id='content-text' />}
          <input placeholder="Username" id='content-text' />
          <input placeholder="Password" id='content-text' />
          <Button text={signUpButtonText} />
        </div>
      </div>
    </div>
  );
}

export default Account;