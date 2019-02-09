import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {API} from "../../../../constants/index.js";
import {authAction} from "../index.js";

const mockStore = configureStore([thunk]);
let store;

const userData = {
    username: 'Arnold',
    email: 'katunold94@gmail.com',
    user_type: 'client',
    contact: '0706180674',
    password: '1qaz2wsx'
};

const userDataIncomplete = {
    username: 'Arnold',
    email: 'katunold94@gmail.com',
    contact: '0706180674',
    password: '1qaz2wsx'
};

describe('Auth actions', () => {
    beforeEach(() => {
        store = mockStore({
            authReducer: {
                data: {}
            }
        });
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('is a successful sign-up', () => {
        moxios.stubRequest(API.SIGN_UP_URL, {
            status: 200,
            response: {
                message: "Successfully registered",
                status: "success",
                data: {}
            }
        });

        store.dispatch(authAction(userData, API.SIGN_UP_URL)).then(() => {
            expect(store.getActions()).toEqual(
                [{
                    payload: { message: "Successfully registered",status: "success", data: {} },
                    type: 'SIGN_UP'
                }]
            );
        });
    });

    it('failed sign-up with missing data', () => {
        moxios.stubRequest(API.SIGN_UP_URL, {
            status: 400,
            response: {
                message: "unsuccessful",
                status: "fail",
                data: false
            }
        });

        store.dispatch(authAction(userDataIncomplete, API.SIGN_UP_URL)).then(() => {
            expect(store.getActions()).toEqual(
                [{
                    payload: { message: "unsuccessful",status: "fail", data: false },
                    type: 'SIGN_UP'
                }]
            );
        });
    });

});
