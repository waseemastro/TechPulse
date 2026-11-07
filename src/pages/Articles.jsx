import { useState } from "react";
import { getTopArticles } from "../services/api";
import ArticleCard from "../components/ArticleCard";
import "../styles/Articles.css";


function Articles() {
    const [articles, setArticles] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function fetchArticles() {
        setLoading(true);
        setError("");

        try {
            const data = await getTopArticles();
            setArticles(data);
        } catch (err) {
            setError("Articles load nahi ho sake, Please try again.");
        } finally {
            setLoading(false);
        }    
    }

    const filteredArticles = articles.filter(articles => articles.title.toLowerCase().includes(search.toLowerCase()));

    return(
        <div className="article-page">
            <div className="articles-header">
                <span>TECHPULSE NEWS</span>
                <h1>Explore Latest Articles</h1>
                <p>
                    Discover the latest stories in technology, AI and cybersecurity.
                </p>
            </div>

            <div className="articles-controls">
                <input type="text" placeholder="Search by title.." value={search} onChange={event => setSearch(event.target.value)} />

                <button onClick={fetchArticles} disabled={loading}>
                    {loading ? "Loading..." : "Load Articles"}
                </button>
            </div>

            {error && <p className="error-message">{error}</p>}

            {loading && <p>Fetching latest articles...</p>}

            <div className="articles-list">
                {filteredArticles.map(article => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>

            {!loading && !error && articles.length > 0 && filteredArticles.length === 0 && (
                <p>No matchingarticles found.</p>
            )}

        </div>
    );
}

export default Articles;