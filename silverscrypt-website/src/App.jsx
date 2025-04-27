import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import WorkPage from "./pages/Work.jsx";
import ContactPage from "./pages/Contact.jsx";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
