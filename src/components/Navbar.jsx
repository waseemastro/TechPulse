import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <nav>
            <Link to="/"><h2>TechPulse</h2></Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/articles">Article</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;