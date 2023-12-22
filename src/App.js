import { useState } from "react";
import FloatLogout from "./components/FloatLogout";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {

    const loggedIn = true;
    const [dropdownFlag, setDropdownFlag] = useState(false);
    const showDropdown = (flag) => {
        setDropdownFlag(flag);
    }

    return (
        <div className="flex flex-col bg-gray-200 w-full min-h-screen relative">
            <Header loggedIn={loggedIn} person={"Shafiul Alam"} showDropdown={showDropdown}/>
            {(dropdownFlag) && <FloatLogout/>}
            <Footer/>
        </div>
    );
}

export default App;