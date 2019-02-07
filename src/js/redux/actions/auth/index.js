import axios from 'axios';
import ACTION_TYPE from '../index.js';

export const signUpActionCreator = data => ({
    type: ACTION_TYPE.SIGN_UP,
    payload: data
});

export const authAction = (requestData, URL) => (dispatch) => {
    const { username, email, contact, user_type, password } = requestData;
    const signUpData = {
        user_name: username,
        email,
        contact,
        user_type,
        password
    };

    return axios.post(URL, {...signUpData})
        .then(response => response.data)
        .then( response => {
            console.log(response);
            dispatch(signUpActionCreator(response))
        })
        .catch( error => {
            const { data } = error.response;
            console.log(data);
            dispatch(signUpActionCreator(data));
        })
};
