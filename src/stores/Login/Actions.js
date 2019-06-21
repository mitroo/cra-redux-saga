import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    login: ['username', 'password'],
    loginLoading: null,
    loginSuccess: ['user'],
    loginFail: ['errors']
});

export const LoginTypes = Types;
export default Creators;
