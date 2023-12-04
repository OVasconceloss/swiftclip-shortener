import Home from "../pages/Home";
import About from "../pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router: React.FC = () =>  (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>  
    </BrowserRouter>
);

export default Router;