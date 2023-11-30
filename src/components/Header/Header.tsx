import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="header">
            <h1 className="header-title">Switftclip</h1>
            <nav className="header-nav">
                <Link to={`/`}>
                    <a href="/" className="nav-link">Home</a>
                </Link>
                <Link to={`/about`}>
                    <a href="#" className="nav-link">About</a>
                </Link>
                <a href="#" className="nav-link">
                    <button className="nav-button">
                        <i className="fa-brands fa-github"></i>
                    </button>
                </a>
            </nav>
        </header>
    );
};