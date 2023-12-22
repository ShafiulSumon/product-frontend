function FloatLogout() {
    const options = ["Cart", "Logout"];

    return (
        <ul className="bg-white mt-1 p-2 w-24 rounded fixed top-20 right-5">
            {options.map((item, key) => {
                return <li key={key} className="hover:bg-yellow-200 rounded cursor-pointer py-2 text-center">{item}</li>
            })}
        </ul>
    );
}

export default FloatLogout;