// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import { getArticle } from "../services/api";

// function ArticleDetails() {
//     const { id } = useParams();

//     const [article, setArticle] = useState(null);

//     async function fetchDetails() {
//         const data = await getArticle(id);
//         setArticle(data);
//     }
//     return(
//         <div>
//             <h1>Article Details</h1>
            
//             <button onClick={fetchDetails}>
//                 Load Details
//             </button>

//             {article && (
//                 <div>
//                     <h2>{article.title}</h2>
//                     <p>Author: {article.by}</p>
//                     <p>Score: {article.score}</p>
//                     <p>Article ID: {article.id}</p>

//                     {article.url && (
//                         <a href={article.url} target="_blank" rel="noreferrer">
//                             Read Original Article
//                         </a>
//                     )}

//                 </div>
//             )}

//         </div>
//     );
// }

// export default ArticleDetails;

// function ArticleDetails() {
//     return (
//         <div>
//             <h1>Article Details Page Working!</h1>
//             <p>React Router is working correctly.</p>
//         </div>
//     );
// }

// export default ArticleDetails;


import { useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../services/api"
import "../styles/ArticleDetails.css";

function ArticleDetails() {
    const { id } = useParams();

    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function fetchDetails() {
        setLoading(true);
        setError("");

        try {
            const data = await getArticle(id);
            setArticle(data);
        } catch(err) {
            setError("Unable to load article details.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="details-page">
            <div className="details-container">
                <span className="details-category">
                    Technology
                </span>

                <h1>Article Details</h1>

                <button onClick={fetchDetails} disabled={loading}>
                    {loading ? "Loading..." : "Load Details"}
                </button>

                {error && <p className="error-message">{error}</p>}

                {article && (
                    <div className="detail-card">

                        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200" alt="Technology" />

                        <div className="detail-content">
                            <h2>{article.title}</h2>

                            <div className="detail-meta">
                                <span>Author: {article.by}</span>
                                <span>Score: {article.score}</span>
                            </div>

                            <p>Article ID: {article.id}</p>

                            {article.url && (
                                <a href={article.url} target="_blank" rel="noreferrer" className="original-link">
                                    Read Full Original Article
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ArticleDetails;