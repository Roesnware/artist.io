import './Header.css';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <div className='navContainer' id='nav-text'>
      <a id='logo-text'>
        Ani<p id='logo-special-text'>Flix</p>.io
      </a>
      <div className='navList'>
        <a href='/' className={location.pathname === '/' ? 'active' : ''}>
          Home
        </a>
        <a href='/dashboard' className={location.pathname === '/dashboard' ? 'active' : ''}>
          Dashboard
        </a>
        <a target='/blank' href='https://9animetv.to/' className={location.pathname === '/watch' ? 'active' : ''}>
          Watch
        </a>
        <a target='/blank' href='https://manganato.com/' className={location.pathname === '/read' ? 'active' : ''}>
          Read
        </a>
        <a href='/signup' id='sign-up-btn' className={location.pathname === '/signup' ? 'active' : ''}>
          Sign up
        </a>
      </div>
    </div>
  );
};

export default Header;