import { Link } from 'react-router-dom';

import logo from '../assets/img/argentBankLogo.png';

import { faCircleUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header(){
    return (
        <header className="header">
            <Link to="/">
                <img className="header__logo" src={logo} alt="Logo de argentBank" />
            </Link>
            <nav className="header__nav">
                <div>
                    <FontAwesomeIcon icon={faCircleUser} /><Link to="/sign-in" className="header__nav__link">Sign In</Link>
                </div>
                {/* <div>
                    <FontAwesomeIcon icon={faRightFromBracket} /><Link to="/" className="header__nav__link">Sign Out</Link>
                </div> */}
            </nav>
        </header>
    );
};

export default Header;