import './Header.css';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <div className='navContainer' id='nav-text'>
      <a id='logo-text'>
        Datte<span id='logo-special-text'>Bayo</span>.io
      </a>
      <div className='navList'>
        <a href='/' className={location.pathname === '/' ? 'active' : ''}>
          Home
        </a>
        <a href='/dashboard' className={location.pathname === '/dashboard' ? 'active' : ''}>
          Dashboard
        </a>
        <a target='/blank' href='https://aniwave.to/filter?keyword=naruto' className={location.pathname === '/watch' ? 'active' : ''}>
          Watch
        </a>
        <a target='/blank' href='https://manganato.com/search/story/naruto' className={location.pathname === '/read' ? 'active' : ''}>
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