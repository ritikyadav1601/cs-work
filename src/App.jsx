import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calculation from "./Components/Calculation";
import Results from "./Components/Results";
import PencilCal from "./Components/PencilCal";
import FirstPage from "./Components/FirstPage";
import WalletCal from "./Components/WalletCal";
import WalletRes from "./Components/WalletRes";
import PencilResult from "./Components/PencilResult";
import Geometry from "./Components/Geometry";
import GeometryRes from "./Components/GeometryRes";

const App = () => {

  return (
    <Router>
      <Routes>

        <Route path="/" element={<FirstPage/>} />

        <Route path="/nameslip" element={<Calculation />} />
        <Route path="/results" element={<Results />} />
        
        <Route path="/pencil" element={<PencilCal />} />
        <Route path="/pencil-results" element={<PencilResult />} />

        <Route path="/wallet" element={<WalletCal />} />
        <Route path="/wallet-results" element={<WalletRes />} />

        <Route path="/geometry" element={<Geometry />} />
        <Route path="/geometry-results" element={<GeometryRes />} />

        <Route path="/shadowBox" element={<Geometry />} />
        <Route path="/shadowbox-results" element={<GeometryRes />} />

      </Routes>
    </Router>
  );
};

export default App;
