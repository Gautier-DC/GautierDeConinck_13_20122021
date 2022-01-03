import axios from 'axios';

const urlBase = 'http://localhost:3001/api/v1'

/**
 * Log the user
 * @param {string} userEmail 
 * @param {string} userPass 
 * @returns 
 */
const postLogin = async(userEmail,userPass) => {
    return axios({
        method: 'post',
        url: urlBase + "/user/login", 
        data: {
            email: userEmail,
            password: userPass
        },
    })
}

/**
 * Get user's token
 * @param {string} token 
 * @returns 
 */
const postToken = async(token) => {
    return axios({
        method: 'post',
        url: urlBase + "/user/profile",
        data: {
        },
        headers: {
            Authorization: "Bearer " + token, accept: "application/json"
        }
    })
}


/**
 * Update user's profile
 * @param {string} currentToken 
 * @param {string} currentFirstName 
 * @param {string} currentLastName 
 * @returns 
 */
const putEditProfil = async(currentToken, currentFirstName, currentLastName) => {
    return axios({
        method: 'put',
        url: urlBase + "/user/profile", 
        data: {
            firstName: currentFirstName,
            lastName: currentLastName
        },
        headers: {
            Authorization: "Bearer " + currentToken, accept: "application/json"
        }
    })
}

export { postLogin, postToken, putEditProfil };