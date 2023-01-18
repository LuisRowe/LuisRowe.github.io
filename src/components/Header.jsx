import { Link } from 'react-router-dom';
import Logo from '../img/LogoHeader.png';

function Header() {
  return (
    <nav className="Header">
      <ul>
        <li>
          <Link to="/">
            <img className="logo_header" src={ Logo } alt="logo" />
          </Link>
        </li>
        <li><Link to="/projects">PROJECTS</Link></li>
        <i
          className="fa-solid fa-circle-half-stroke fa-2x"
          role="presentation"
          onClick={ () => alert('O dark-mode ainda não foi implementado. Desculpa.') }
        />
      </ul>
    </nav>
  );
}

export default Header;
