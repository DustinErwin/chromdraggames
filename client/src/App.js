import "./App.css";
import HomePage from "./pages/HomePage";
import RpgPage from "./pages/RpgPage";
import BoardGamesPage from "./pages/BoardGamesPage";
import MtgPage from "./pages/MtgPage";
import { Routes, Route } from "react-router-dom";
import TableTopPage from "./pages/TableTopPage";
import AboutPage from "./pages/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/RoleplayingGames" element={<RpgPage />} />
        <Route path="/BoardGames" element={<BoardGamesPage />} />
        <Route path="/MagicTheGathering" element={<MtgPage />} />
        <Route path="/TableTopGames" element={<TableTopPage />} />
        <Route path="/About" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
