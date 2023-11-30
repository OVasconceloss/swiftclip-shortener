import "./Header.scss";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="header">
            <h1 className="header-title">Switftclip</h1>
            <nav className="header-nav">
                <Link to={`/`} className="link-header">
                    <a href="/" className="nav-link">Home</a>
                </Link>
                <Link to={`/about`} className="link-header">
                    <a href="#" className="nav-link">About</a>
                </Link>
                <a 
                    href="https://github.com/OVasconceloss/swiftclip-shortener" 
                    target={`_blank`} 
                    className="nav-link"
                >
                    <button className="nav-button">
                        <i className="fa-brands fa-github"></i>
                    </button>
                </a>
            </nav>
        </header>
    );
};