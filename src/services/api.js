import axios from "axios";

const API_URL = "https://hacker-news.firebaseio.com/v0";

export async function getArticle(id) {
    const response = await axios.get(`${API_URL}/item/${id}.json`);

    return response.data;
}

export async function getTopArticles() {
    const response = await axios.get(`${API_URL}/topstories.json`);

    const ids = response.data.slice(0,5);

    const articles = await Promise.all(
        ids.map(id => getArticle(id))
    );
    return articles;
}