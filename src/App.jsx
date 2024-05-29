import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculation from "./Components/Calculation";
import Results from "./Components/Results";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Calculation />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
