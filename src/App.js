import "./App.css";
import {} from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Classer from "./components/Classer";
import AffecterCritere from "./components/AffecterCritere";
import Consulter from "./components/Consulter";
import Parametrer from "./components/Parametrer";
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/classer" element={<Classer></Classer>}></Route>
        <Route
          path="/affecter-critere"
          element={<AffecterCritere></AffecterCritere>}
        ></Route>
        <Route path="/consulter" element={<Consulter></Consulter>}></Route>
        <Route path="/parametrer" element={<Parametrer></Parametrer>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
