import { NavLink } from "react-router-dom";
import '../assets/sass/NoFound.scss'
function NotFound() {
    return (
        <div className="noFound">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas. </h2>
            <NavLink to="/">Retourner sur la page d’accueil</NavLink>
        </div>
    )
}

export default NotFound;