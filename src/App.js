import { Routes,Route } from "react-router-dom";
import Atmosfera from "./pages/Atmosfera";
import Home from "./pages/Home";

export default function App() {
  return (
    <div>
      
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="Atmosfera" element={<Atmosfera />} />
    </Routes>
    </div>
  );
}