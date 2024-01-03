import { Link } from "react-router-dom";

function FloatLogout({ showDropdown, setLoggedIn }) {
    const options = [
        {
            "name": "Cart",
            "link": "/cart"
        },
        {
            "name": "Logout",
            "link": "/login"
        }
    ];

    const handleClick = (name) => {
        showDropdown(false)
        if(name === "Logout") {
            setLoggedIn(false);
        }
    }


    return (
        <ul className="bg-white mt-1 p-2 w-24 rounded fixed top-20 right-5">
            {options.map((item, key) => {
                return ( 
                <Link to={item.link} key={key}>
                    <li 
                        onClick={() => handleClick(item.name)}
                        className="hover:bg-yellow-200 rounded cursor-pointer py-2 text-center"
                    >
                        {item.name}
                    </li>
                </Link>
                )
            })}
        </ul>
    );
}

export default FloatLogout;