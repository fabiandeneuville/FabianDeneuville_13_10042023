import { Link } from 'react-router-dom';

import logo from '../assets/img/argentBankLogo.png';

import { faCircleUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useSelector, useDispatch } from 'react-redux';

import { logoutStarted } from '../store/action';

function Header(){

    const user = useSelector(state => state.user);

    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutStarted());
    };

    return (
        <header className="header">
            <Link to="/">
                <img className="header__logo" src={logo} alt="Logo de argentBank" />
            </Link>
            {user ? (
                <nav className="header__nav">
                    <div className="header__nav__item">
                        <FontAwesomeIcon icon={faCircleUser} /> <Link className="header__nav__link" to="/user">{user.firstName}</Link>
                    </div>
                    <div className="header__nav__item">
                        <FontAwesomeIcon icon={faRightFromBracket} /><span className="header__nav__link" onClick={() => logout()}>Sign Out</span>
                    </div>

                </nav>
            ) : (
                <nav className="header__nav">
                    <div className="header__nav__item">
                        <FontAwesomeIcon icon={faCircleUser} /><Link className="header__nav__link" to="/sign-in">Sign In</Link>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;