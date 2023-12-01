import "../styles/home.scss";
import { useState } from "react";
import shortenURL from "../services/api";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

interface URLData {
    id: string,
    link: string,
    long_url: string,
}

const Home: React.FC = () => {
    const [URL, setURL] = useState<string>("");
    const [data, setData] = useState<URLData>({id: "", link: "", long_url: ""});

    const handleShortenURL = async () => {
        try {
            const response = await shortenURL.post('/shorten', { long_url: URL });
            setData(response.data);
        } catch (error) {
            window.alert("We couldn't shorten your link! Try again");
            console.log(`Error: ${error}`);
        }

        setURL("");
    }

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
                    <input 
                        type="url" 
                        name="url" 
                        id="url" 
                        value={URL} 
                        onChange={(event) => setURL(event.target.value)} 
                        className="url-input" 
                        placeholder="Ex: https://www.youtube.com/watch?v=b9eMGE7QtTk"/>
                    <button className="url-input-button" onClick={handleShortenURL}>Shorten URL</button>
                </div>
                <div className="section-shortener-url">
                    <h3 className="shortener-url-link">{data.link}</h3>
                </div>
            </section>
        </main>
        <Footer />
        </>
    );
};

export default Home;