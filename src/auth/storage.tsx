import jwtDecode from "jwt-decode";
import Cookies from "universal-cookie";


interface DecodedToken {
  sessionObject?: {
    email?: string;
    userName?: string;
  };
};


const setToken = (authToken: string) => {
    const cookie = new Cookies();
    try {
        cookie.set('token', authToken);
    } catch (error) {
        console.log("Storing token is error");
    }
};

const getToken = () => {
    const cookie = new Cookies();
    try {
        return cookie.get('token');
    } catch (error) {
        console.log("Getting token is error");
    }
};

const getUser = () => {
    const token = getToken();
    const decodedToken:DecodedToken | null = (token) ? jwtDecode(token) : null;
    const { email, userName } = decodedToken?.sessionObject || {};

    return { email, userName };
}

const removeToken = () => {
    const cookie = new Cookies();
    try {
        cookie.remove('token');
    } catch (error) {
        console.log("Removing token is error");
    }
};


const authStorage = { setToken, getToken, removeToken, getUser };

export default authStorage;