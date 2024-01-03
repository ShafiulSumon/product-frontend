function URL() {
    const baseURL = "http://localhost:3001/api/v1";

    // private
    const health = "/health";
    const auth = "/auth";
    const products = "/products";
    const cart = "/cart";


    //public
    const checkHealth = baseURL + health;
    const allProductsURL = baseURL + products;
    const signup = baseURL + auth + "/signup";
    const login = baseURL + auth + "/login";

    return {
        checkHealth,
        allProductsURL,
        signup,
        login
    }

}

export default URL;