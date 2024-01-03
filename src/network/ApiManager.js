import URL from '../network/URL';
import { FetchData, PostData } from './NetworkManager';
import { decode_getAllProducts } from './DecodingService';

const apiIsLive = async () => {
    const url = URL().checkHealth;
    const data = await FetchData(url);

    console.log(data);
}

const getAllProducts = async () => {
    const url = URL().allProductsURL;
    const data = await FetchData(url);
    const decodedData = decode_getAllProducts(data);
    return decodedData;
}

const signup = async (data) => {
    const url = URL().signup;
    const response = await PostData(url, data);
    return response;
}

const login = async (data) => {
    const url = URL().login;
    const response = await PostData(url, data); // response will be your token
    if(response.token !== undefined) {
        return response.token;
    }
    else {
        return -1;
    }
}

export {
    apiIsLive,
    getAllProducts,
    signup,
    login
};