import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Page404 from "../404/404";
import Kasa from "../Kasa/Kasa";
import Sophie_Bluel from '../Sophie_Bluel/Sophie_Bluel'


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Page404 />} />
          <Route path="/Kasa" element={<Kasa />} />
          <Route path="/SophieBluel" element={<Sophie_Bluel/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
