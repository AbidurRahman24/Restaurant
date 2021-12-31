import './App.css';
import Home from './components/Home/Home/Home';
import RIQA from './components/RQA/RIQA';
import { Route, Routes } from "react-router-dom";

import NotMatch from './components/NotMatch/NotMatch';
function App() {
  return (
    <div>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/riqa" element={<RIQA />} />
      </Routes>
    </div>
  );
}

export default App;
