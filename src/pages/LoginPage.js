import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../network/ApiManager";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

const ErrorPopup = () => {
    toast.error("Wrong email or password", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
}

const SuccessPopup = (name) => {
    toast.success(`Welcome, ${name}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
}

function LoginPage() {
    const inputDesign = 'mx-2 my-1 p-2 bg-gray-200 rounded outline-cyan-700';
    const errorDesign = 'mx-2 text-red-500 text-xm justify-start';

    const initialValue = {
        "email": "",
        "password": ""
    };

    const [formValue, setFormValue] = useState(initialValue);
    const [error, setError] = useState(initialValue);

    const validate = (values) => {
        const errors = {};
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(validate(formValue));
        if(formValue.email !== "" && formValue.password !== "") {
            const token = await login(formValue);
            console.log(token);

            
            if(token === -1) {
                ErrorPopup();
            }
            else {
                const decoded = jwtDecode(token);
                SuccessPopup(decoded.username);
            }
        }
    }

    return (
        <div className="w-1/4 mx-auto my-auto">
            <form className="flex flex-col bg-gray-300 rounded-lg" onSubmit={handleSubmit}>
                <label className="text-3xl text-center text-cyan-700 p-2">Login Here</label>
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
                <button className="m-2 p-2 bg-cyan-700 rounded text-white">Login</button>
            </form>
            <h2 className="text-center mt-2">Don't have any account? <Link to="/signup" className="text-blue-500 underline hover:text-blue-600">Signup here.</Link></h2>
        </div>
    );
}

export default LoginPage;