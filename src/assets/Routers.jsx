import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Landing";
import Login from "./Pages/Login";

const Navigation = () => {
    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}
export default Navigation