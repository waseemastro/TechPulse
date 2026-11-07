import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ArticleDetails from "./pages/ArticleDetails";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles/>}/>
        <Route path="/articles/:id" element={<ArticleDetails/>} />
        <Route path="/about" element={<About/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;