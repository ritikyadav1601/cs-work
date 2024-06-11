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
import PandaCal from "./Components/PandaCal";
import PandaRes from "./Components/PandaRes";
import PuzzleCal from "./Components/PuzzleCal";
import PuzzleRes from "./Components/PuzzleRes";
import ShadowBox from "./Components/ShadowBox";
import ShadowBoxRes from "./Components/ShadowBoxRes";

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

        <Route path="/shadowbox" element={<ShadowBox />} />
        <Route path="/shadowbox-results" element={<ShadowBoxRes />} />

        <Route path="/panda" element={<PandaCal />} />
        <Route path="/panda-results" element={<PandaRes />} />

        <Route path="/puzzle" element={<PuzzleCal />} />
        <Route path="/puzzle-results" element={<PuzzleRes />} />

      </Routes>
    </Router>
  );
};

export default App;
