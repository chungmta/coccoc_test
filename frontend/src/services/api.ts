const BaseURL = 'http://localhost:9000';
const PATCH = {
  login: 'auth/login',
};
interface LoginBody {
  email: string;
  password: string;
}
export const login = async (body: LoginBody) => {
  try {
    const response = await fetch(`${BaseURL}/${PATCH.login}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
