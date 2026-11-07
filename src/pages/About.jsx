import "../styles/About.css";


function About() {
    return(
        <div className="about-page">
            <section className="about-hero">
                <span>ABOUT TECHPULSE</span>

                <h1>Technology News for <br /> Curious Minds</h1>

                <p>TechPulse brings you the latest updates
                    in technology, programming, artificial
                    intelligence and cybersecurity.</p>
            </section>

            <section className="about-content">
                <div>
                    <h2>our Mission</h2>

                    <p> Our mission is to make technology news
                        accessible and easy to explore. We help
                        readers stay informed about the latest
                        innovations and developments.</p>
                </div>
                <div>
                    <p>From Artificial Intelligence and sofware development to cybersecuroty and emerging technologies, TechPulse explores stories that matter in the digital world.</p>
                </div>
            </section>
        </div>
    )
}

export default About;