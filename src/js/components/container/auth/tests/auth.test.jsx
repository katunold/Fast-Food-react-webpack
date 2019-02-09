import React from 'react';
import {shallow, mount} from 'enzyme';
import thunk from "redux-thunk";
import configureStore from 'redux-mock-store';
import Authentication, { AuthenticationTest } from "../index.jsx";
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

let wrapper;
const mockStore = configureStore([thunk]);
let store;
const props = {
    match: {params: {endpoint: 'signup'}}
};

const userData = {
    username: 'Arnold',
    email: 'katunold94@gmail.com',
    contact: '0706180674',
    password: '1qaz2wsx'
};

const loginData = {
    username: 'Arnold',
    password: '1qaz2wsx'
};

describe('Auth container', () => {
    beforeEach(() => {
        store = mockStore({
            authReducer: {
                data: {}
            }
        });
        wrapper = shallow(<AuthenticationTest {...props} dispatch={jest.fn} />)
    });

    it('renders auth form without crashing', () => {
        expect(wrapper).toHaveLength(1);
        wrapper.setProps({ auth: {
            status: 'success',
                message: "Successfully registered",
                data: {
                    contact: "0706180670",
                    email: "kabo@mail.com",
                    user_name: "Kabody",
                    user_type: "client"
                }
        }});
        wrapper.setProps({ auth: {
                status: 'fail',
                message: "email already exists",
                data: false
            }});
    });


    it('renders auth form without messages', () => {
        wrapper.setProps({ auth: {
                status: '',
                message: "",
                data: {}
            }});
    });

    it('should check for functions', () => {
        const func = wrapper.instance().onChange('username');
        expect(func).toBeInstanceOf(Function);
        func({ target: { value: 'val' } });
        const func1 = wrapper.instance().onChange('email');
        expect(func1).toBeInstanceOf(Function);
        func1({ target: { value: 'val' } });
        const func2 = wrapper.instance().onChange('contact');
        expect(func2).toBeInstanceOf(Function);
        func2({ target: { value: 'val' } });
        const func3 = wrapper.instance().onChange('password');
        expect(func3).toBeInstanceOf(Function);
        func3({ target: { value: 'val' } });

        wrapper.instance().handleSnackClose({}, 'reason');
        wrapper.instance().handleSignUp({ preventDefault: jest.fn });

        wrapper.setState(userData);
        wrapper.instance().handleSignUp({ preventDefault: jest.fn });
    });

    it('should sign-up an admin user', () => {
        const props = {
            match: {params: {endpoint: 'admin'}}
        };
       const wrap = shallow(<AuthenticationTest {...props} dispatch={jest.fn} />);
        wrap.setState(userData);
        wrap.instance().handleSignUp({ preventDefault: jest.fn });
        wrap.instance().handleSignUp({ preventDefault: jest.fn });
    });

    it('should login a user', () => {
        const wrap = shallow(<AuthenticationTest {...props} dispatch={jest.fn} />);
        wrap.setState(loginData);
        wrap.instance().handleLogin({ preventDefault: jest.fn });
        wrap.instance().handleLogin({ preventDefault: jest.fn });
    });

    it('mount the component ', () => {
        expect(
            mount(
                <MemoryRouter>
                    <Provider store={store}>
                        <Authentication {...props} dispatch={jest.fn}/>
                    </Provider>
                </MemoryRouter>
            )
        ).toHaveLength(1);
    });

});
