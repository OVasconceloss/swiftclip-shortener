import "./Header.scss";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
    return (
        <header className="header">
            <h1 className="header-title">Switftclip</h1>
            <nav className="header-nav">
                <Link to={`/`} className="link-header nav-link">Home</Link>
                <Link to={`/about`} className="link-header nav-link">Abut</Link>
                <a href="https://github.com/OVasconceloss/swiftclip-shortener" target={`_blank`} className="nav-link">
                    <button className="nav-button">
                        <i className="fa-brands fa-github"></i>
                    </button>
                </a>
            </nav>
        </header>
    );
};