import { Link } from "react-router-dom";
import SignupLoginButton from "./SignupLoginButton";

function Header({ loggedIn, person, showDropdown, dropdownFlag }) {
    return (
        <div className="flex justify-between bg-white shadow-md shadow-gray-400 rounded-b-2xl">
            {/* left part */}
            <Link to="/" className="Title-text text-3xl p-5 pl-16 my-auto">Product List</Link>

            {/* right part */}
            <div className="my-auto mx-10">
                <SignupLoginButton loggedIn={loggedIn} person={person} showDropdown={showDropdown} dropdownFlag={dropdownFlag}/>
            </div> 
        </div>
    );
}

export default Header;