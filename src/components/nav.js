import { NavLink } from 'react-router-dom';
import LogoKasa from './logo';
import '../assets/sass/Nav.scss';
function Nav() {
    return (
        <div className='header'>
            <header className="nav-header">
                <div className="logo">
                <LogoKasa color='#FF6060'/>
                </div>
                <nav className="navBar">
                    <NavLink to="/" >Accueil</NavLink>
                    <NavLink to="/About">A Propos</NavLink>
                </nav>
            </header>
        </div>
    );
};

export default Nav;