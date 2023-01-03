import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Des from "./des";
import Home from "./home";
import Login from "./login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/des" element={<Des />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
