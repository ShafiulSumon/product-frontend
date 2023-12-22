import { useEffect, useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function SignupLoginButton({ loggedIn, person, showDropdown }) {
    const [toggle, setToggle] = useState(false);

    useEffect(()=>{
        setToggle(false);
    }, [loggedIn]);

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
                <button className="bg-yellow-300 rounded px-2 py-1 hover:bg-yellow-400 w-20">Login</button>
                <button className="px-2 py-1 text-xs hover:font-semibold w-16">Singup</button>
            </div>
        );
    }
}

export default SignupLoginButton;