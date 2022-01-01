import './App.css';
import Home from './components/Home/Home/Home';
import RIQA from './components/RQA/RIQA';
import { Route, Routes } from "react-router-dom";

import NotMatch from './components/NotMatch/NotMatch';
import Blog from './components/Blog/Blog';
function App() {
  return (
    <div>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/blog" element={<Blog />} />
      <Route path="/riqa" element={<RIQA />} />
      <Route path="*" element={<NotMatch />} />
      </Routes>
    </div>
  );
}

export default App;
