import './Header.css'

const Header = () => {
  return (
    <div className='navContainer' id='nav-text'>
        <a id='logo-text'>Ani<p id='logo-special-text'>Flix</p>.io</a>
        <div className='navList'>
            <a href='/'>Home</a>
            <a href='/dashboard'>Dashboard</a>
            <a target='/blank' href='https://9animetv.to/'>Watch</a>
            <a target='/blank' href='https://manganato.com/'>Read</a>
            <a href='/signup' id='sign-up-btn'>Sign up</a>
        </div>
    </div>
  )
}

export default Header;