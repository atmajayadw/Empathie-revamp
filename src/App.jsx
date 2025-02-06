// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from './pages/Homepage'
import Portfolio from './pages/Portfolio'
import NoPage from "./pages/NoPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="Portfolio" element={<Portfolio />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);