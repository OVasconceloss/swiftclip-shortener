import "./Footer.scss";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <h2 className="footer-title">Switftclip</h2>
            <p className="footer-description">
                In the Swiftclip, you'll discover the essence of convenience in
                URL shortening. Our website, powered by modern web technologies 
                such as ReactJS, Typescript, and SCSS, provides efficient URL shortening 
                functionalities. We simplify lengthy addresses, offering a quick and 
                convenient way to share links on online platforms.
            </p>
            <div className="footer-contacts">
                

            </div>
            <div className="footer-copyright">
                <h3 className="copyright-text">Copyright &copy; {currentYear} Victor Vasconcelos</h3>
                <div className="copyright-menu">
                    <Link to={`/`} className="link-footer menu-footer-link">Home</Link>
                    <Link to={`/about`} className="link-footer menu-footer-link">About</Link>
                    <a 
                        href="https://github.com/OVasconceloss/swiftclip-shortener" 
                        target={`_blank`} 
                        className="menu-footer-link">
                        <button className="menu-footer-button">
                            <i className="fa-brands fa-github"></i>
                        </button>
                    </a>
                </div>
            </div>
        </footer>
    );
};