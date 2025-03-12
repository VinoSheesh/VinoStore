import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import GameList from "./pages/GameList.jsx";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4 bg-blue-700 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<GameList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
