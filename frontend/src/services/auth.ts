/**
 * This represents some generic auth provider API, like Firebase.
 */
import { login } from './api';
// import users from './mock/users.json';

const fakeAuthProvider = {
  isAuthenticated: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  signin(email: string, password: string): Promise<Error | any> {
    fakeAuthProvider.isAuthenticated = true;

    return login({
      email,
      password,
    });

    // const i = users.findIndex((user) => user.email === email);

    // if (i >= 0) {
    //   return Promise.resolve(users[i]);
    // } else {
    //   return Promise.reject(new Error('login failure'));
    // }
  },
  signout(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export { fakeAuthProvider };
