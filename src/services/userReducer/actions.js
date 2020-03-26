import {LOGIN, LOGOUT } from './actionsTypes';

export const login = (email, password) => async dispatch => {
  try {
    const userJson = await fetch("http://localhost:5000/auth/login", {
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
    await fetch("http://localhost:5000/auth/logout");
    return dispatch({
      type: LOGOUT
    })

  } catch (error) {
      throw error;
  }
}
