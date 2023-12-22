import SignupLoginButton from "./SignupLoginButton";

function Header({ loggedIn, person, showDropdown }) {
    return (
        <div className="flex justify-between bg-white shadow-md shadow-gray-400 rounded-b-2xl">
            {/* left part */}
            <div className="Title-text text-3xl p-5 pl-16 my-auto">Product List</div>

            {/* right part */}
            <div className="my-auto mx-10">
                <SignupLoginButton loggedIn={loggedIn} person={person} showDropdown={showDropdown}/>
            </div> 
        </div>
    );
}

export default Header;