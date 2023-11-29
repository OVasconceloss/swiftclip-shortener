import Home from "../pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router: React.FC = () =>  (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>  
    </BrowserRouter>
);

export default Router;