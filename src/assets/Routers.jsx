import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Landing";
import Login from "./Pages/Login";
import Tiptap from "./Components/Editor";
import User from "./Pages/User";
import Absen from "./Pages/Absen";

const Navigation = () => {
    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/create-article' element={<Tiptap />} />
            <Route path='/user' element={<User />} />
            <Route path='/absen' element={<Absen />} />
        </Routes>
    )
}
export default Navigation