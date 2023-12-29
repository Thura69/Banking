import client from '../Constant/client';

const login = async(email: string, password: string, passwordComfirmation: string) => {
    
const {response,error} = await client.post('/user/auth/login', { email, password, passwordComfirmation })
        .then((response) => {
            return {response:response.data,error:null};
        })
        .catch((error) => {
           return {response:null,error: error.response.data[0].message}
        })

    return {response,error};

};

const authApi = {
    login
};

export default authApi;