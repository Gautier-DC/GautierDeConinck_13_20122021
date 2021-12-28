import axios from 'axios';

const urlBase = 'http://localhost:3001/api/v1'

const postLogin = async(userEmail,userPass) => {
    return axios.post(urlBase + "/user/login", {
        email: userEmail,
        password: userPass
    })
}

export { postLogin };