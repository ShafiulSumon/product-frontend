import { useEffect, useState } from "react";
import FloatLogout from "./components/FloatLogout";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {

    const [loggedIn, setLoggedIn] = useState(true);
    const [dropdownFlag, setDropdownFlag] = useState(false);
    
    useEffect(() => {
        
    }, [dropdownFlag]);
    
    const showDropdown = (flag) => {
        setDropdownFlag(flag);
    }
    return (
        <div className="flex flex-col bg-gray-200 w-full min-h-screen relative">
            <Header loggedIn={loggedIn} person={"Shafiul Alam"} showDropdown={showDropdown} dropdownFlag={dropdownFlag}/>
            {dropdownFlag && <FloatLogout showDropdown={showDropdown} setLoggedIn={setLoggedIn}/>}

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/admin" element={<AdminPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/signup" element={<SignupPage/>}/>
            </Routes>

            <Footer/>
        </div>
    );
}

export default App;
