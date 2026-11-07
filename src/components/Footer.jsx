import { Link } from "react-router-dom";
import "../styles/Footer.css";


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h2>TechPulse</h2>
                    <p>Your daily source for technology, programming, AI and cybersecurity news.</p>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>

                    <Link to="/">Home</Link>
                    <Link to="/articles">Articles</Link>
                    <Link to="/about">About</Link>
                </div>

                <div className="footer-topics">
                    <h3>Explore Topics</h3>
                    <p>Artificial Topics</p>
                    <p>Programming</p>
                    <p>Cubersecurity</p>
                    <p>Technology</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2026 TechPulse. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;