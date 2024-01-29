import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import UtilitiesPage from "./Pages/UtilitiesPage";
import GamesPage from "./Pages/GamesPage";
import TemplatesPage from "./Pages/TemplatesPage";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/utilities" element={<UtilitiesPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
