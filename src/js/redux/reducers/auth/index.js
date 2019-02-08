/* eslint-disable camelcase */
import ACTION_TYPE from '../../actions';

const initialState = {
    status: '',
    message: '',
    data: ''
};

const authReducer = (state = initialState, action) => {
    const {status, message, data} = action.payload || {};

    switch (action.type) {
        case ACTION_TYPE.SIGN_UP:
            return {
                ...state,
                user: data,
                message: message,
                status: status
            };

        case ACTION_TYPE.LOG_OUT:
            return { ...initialState };

        default:
            return { ...state, user: data };
    }
}

export default authReducer


