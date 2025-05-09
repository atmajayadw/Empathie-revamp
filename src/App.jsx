// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from './pages/Homepage'
import Portfolio from './pages/Portfolio'
import Client from './pages/Client'
import Detail from './pages/Detail'
import About from './pages/About'
import Contact from './pages/Contact'
import NoPage from "./pages/NoPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar />}/>
            <Route index element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="portfolio/client" element={<Client />} />
            <Route path="portfolio/client/detail" element={<Detail />} />
            <Route path="about-us" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);