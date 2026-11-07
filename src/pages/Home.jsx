import "../styles/Home.css";
// import { useState } from "react";
import { getTopArticles } from "../services/api";
import ArticleCard from "../components/ArticleCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);

    //  -------------------------//
    useEffect(() => {
        fetchArticles();
    }, []);

    async function fetchArticles() {
        setLoading(true);

        try {
            const data = await getTopArticles();
            setArticles(data.slice(0, 3));
        } catch (error) {
            console.log("Unable to load articles", error);
        } finally {
            setLoading(false);
        }
    }
    

    return (
        <div>
            <section className="hero">
                <div className="hero-content">
                    <span className="hero-tag">WELCOME TO TECHPULSE</span>

                    <h1>
                        Stay Ahead with the
                        <span>Latest Technology News</span>
                    </h1>

                    <p>Explore the latest updates in Artifical Intelligence, Programming, Cybersecurity and Technology</p>

                    <Link to="/articles" className="hero-button">
                        Explore Latest Articles
                    </Link>
                </div>
            </section>

            <section className="home-articles">
                <div className="home-articles-header">
                    <span>STAY INFORMED</span>

                    <h2>Latest Tech Artricles</h2>

                    <p>Discover whats's happening in the world of technology.</p>
                </div>

               

                <div className="home-articles-list">
                    
                    {loading ? (
                        <p>Loading latest articles...</p>
                    ) : (
                        articles.map(article => (
                            <ArticleCard key={article.id} article={article} />
                        ))
                    )}

                </div>

                {articles.length > 0 && (
                    <div className="view-all">
                        <Link to="/articles">
                            View All Articles →
                        </Link>
                    </div>
                )}

            </section>

        </div>
    );
}

export default Home;