import "./App.css";
import Home from "./pages/Home/Home";
import Results from "./pages/Results/Results";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Results />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
