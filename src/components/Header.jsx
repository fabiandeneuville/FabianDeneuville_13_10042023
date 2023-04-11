import logo from '../assets/img/argentBankLogo.png'

function Header(){
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Logo de argentBank" />
        </header>
    );
};

export default Header;