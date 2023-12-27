import { useState } from "react";
import { Link } from "react-router-dom";

function SignupPage() {

    const inputDesign = 'mx-2 my-1 p-2 bg-gray-200 rounded outline-cyan-700';
    const errorDesign = 'mx-2 text-red-500 text-xm justify-start';

    const initialValue = {
        "username": "",
        "email": "",
        "password": ""
    };

    const [formValue, setFormValue] = useState(initialValue);
    const [error, setError] = useState(initialValue);

    const validate = (values) => {
        const errors = {};
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(!values.username){
            errors.username = "Username is required!";
        }
        if(!values.email) {
            errors.email = "Email is required!";
        }
        else if(!regex.test(values.email)) {
            errors.email = "Email is in wrong format.(e.g. XYZ@xyz.com)";
        }
        if(!values.password) {
            errors.password = "Password is required!";
        }
        return errors;
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValue({
            ...formValue,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setError(validate(formValue));
        console.log(formValue);
    }

    return (
        <div className="mx-auto my-auto w-1/4">
            <form className="flex flex-col bg-gray-300 rounded-lg" onSubmit={handleSubmit}>
                <label className="text-3xl text-center text-cyan-700 p-2">Signup Here</label>
                <input 
                    className={inputDesign}
                    placeholder="Username"
                    type="text"
                    name="username"
                    value={formValue.username}
                    onChange={handleChange}
                />
                <p className={errorDesign}>{error.username}</p>
                <input 
                    className={inputDesign}
                    placeholder="Email" 
                    type="text"
                    name="email"
                    value={formValue.email}
                    onChange={handleChange}
                />
                <p className={errorDesign}>{error.email}</p>
                <input 
                    className={inputDesign} 
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={formValue.password}
                    onChange={handleChange}
                />
                <p className={errorDesign}>{error.password}</p>
                <button className="m-2 p-2 bg-cyan-700 rounded text-white">Signup</button>
            </form>
            <h2 className="text-center mt-2">Already have an account! <Link to="/login" className="text-blue-500 underline hover:text-blue-600">Login here.</Link></h2>
        </div>
    );
}

export default SignupPage;