import { useEffect, useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

function SignupLoginButton({ loggedIn, person, showDropdown, dropdownFlag }) {
    const [toggle, setToggle] = useState(dropdownFlag);

    useEffect(()=>{
        setToggle(dropdownFlag);
    }, [dropdownFlag]);

    const handleClick = () => {
        showDropdown(!toggle);
        setToggle((t) => !t);
    }

    if(loggedIn) {
        return (
            <button className="flex flex-row items-center" onClick={handleClick}>
                <span>Hello, {person}</span>
                {toggle ? <IoIosArrowUp/> : <IoIosArrowDown/>}
            </button>
        );
    }
    else {
        return (
            <div>
                <Link to="/login" className="bg-yellow-300 rounded px-2 py-1 hover:bg-yellow-400 w-20">Login</Link>
                <Link to="/signup" className="px-2 py-1 text-xs hover:font-semibold w-16">Singup</Link>
            </div>
        );
    }
}

export default SignupLoginButton;