import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../img/LogoHeader.png';

function Header({ changeTheme }) {
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
          onClick={ changeTheme }
        />
      </ul>
    </nav>
  );
}

Header.propTypes = {
  changeTheme: PropTypes.func.isRequired,
};

export default Header;
