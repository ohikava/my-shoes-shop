import {LOGIN, LOGOUT} from './actionsTypes';

export const login = (email, password) => async dispatch => {
  try {
    const userJson = await fetch("/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });
    const user = await userJson.json();
    return dispatch({
      type: LOGIN,
      payload: user
    });
  } catch (error) {
      throw error;
  };
};

export const logout = () => async dispatch => {
  try {
    await fetch("/auth/logout");
    return dispatch({
      type: LOGOUT
    })

  } catch (error) {
      throw error;
  }
};

export const register = (password, password2, name, surname, email) => async dispatch => {
  try {
      const newUserJson = await fetch("/auth/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          name: name,
          surname: surname,
          password: password,
          password2: password2
        })
      });
      const newUser = await newUserJson.json();
      return dispatch({
        type: LOGIN,
        payload: newUser
      });
  } catch (error) {
      throw error;
  }
}
