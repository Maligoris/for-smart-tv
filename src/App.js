import './App.css';
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import GetDoggy from "./pages/getDoggy/GetDoggy";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path="/getDoggy" element={<GetDoggy />} /> 
      </Routes>
    </div>
  );
}

export default App;
