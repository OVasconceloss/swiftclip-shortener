import "../styles/home.scss";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

const Home = () => {
    return (
        <>
        <Header />
        <main className="main">
            <section className="main-section-url">
                <div className="section-url-text">
                    <h1 className="section-url-title">Free URL Shortener</h1>
                    <h2 className="section-url-subtitle">Minimize Links, Maximize Convenience: Your Ultimate URL Shortening Solution</h2>
                </div>
                <div className="section-url-input">
                    <input type="url" name="url" id="url" className="url-input" placeholder="Ex: https://www.youtube.com/watch?v=b9eMGE7QtTk"/>
                    <button className="url-input-button">Shorten URL</button>
                </div>
            </section>
        </main>
        <Footer />
        </>
    );
};

export default Home;