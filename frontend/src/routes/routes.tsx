import { Routes, Route, BrowserRouter} from "react-router-dom";

import Home from "../pages/Home";
import NotFound404 from "../pages/NotFound404";
import Cadaster from "../pages/Cadaster";
import Cars from "../pages/Cars";

export default function RoutesApp() {
  return (

    <BrowserRouter>
      <Routes >
        
          <Route path="/" element={<Home />} />
          <Route path="/cadaster" element={<Cadaster />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="*" element={<NotFound404 />} />

      </Routes>

    </BrowserRouter>

  )
}

