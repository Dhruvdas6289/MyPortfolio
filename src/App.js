import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Review1 from "./components/Review1";

import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/Review1.scss"; // Ensure the stylesheet matches the component name

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<Review1 />} /> {/* Use Review1 component */}
      </Routes>
    </Router>
  );
}

export default App;
