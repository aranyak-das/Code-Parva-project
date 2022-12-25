import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AdoptForm from "./components/AdoptForm";
import GiveAwayForm from "./components/GiveAwayForm";
import ShowPets from "./components/ShowPets";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="pageContainer">
        <Header />
        <Routes>
          <Route path="/showPets" element={[<ShowPets />]} />
          <Route path="/adoptForm" element={[<AdoptForm />]} />
          <Route path="/giveawayForm" element={[<GiveAwayForm />]} />
          <Route path="/" element={[<Home />]} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
