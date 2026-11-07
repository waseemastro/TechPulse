import { Link } from "react-router-dom";
import "../styles/ArticleCard.css";

const articleImages = [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800"
]

function ArticleCard({ article }) {

    const imageIndex = article.id % articleImages.length;

    return (
        <div className="article-card">

            <img className="article-image" src={articleImages[imageIndex]} alt="Technology" onError={(event) => {
                event.target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800";
            }} />

            <div className="article-content">
                <span className="article-category">Technology</span>

                <h3>{article.title}</h3>

                <div className="article-meta">
                    <span>By {article.by}</span>
                    <span>Score: {article.score}</span>
                </div>

                <div className="article-actions">
                    <Link to={`/articles/${article.id}`}>
                        View Details
                    </Link>

                    {
                        article.url && (
                            <a href={article.url} target="blank" rel="noreferrer">
                                Read Original
                            </a>
                        )
                    }

                </div>
            </div>
        </div>
    );
}

export default ArticleCard;