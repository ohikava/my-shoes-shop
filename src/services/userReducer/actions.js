import {LOGIN, LOGOUT} from './actionsTypes';

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
};

export const register = (password, password2, name, surname, email) => async dispatch => {
  try {
      console.log('start');
      console.log(password);
      console.log(password2);
      console.log(name);
      console.log(surname);
      console.log(email)
      console.log(JSON.stringify({
        email: email,
        name: name,
        surname: surname,
        password: password,
        password2: password2
      }))
      const newUserJson = await fetch("http://localhost:5000/auth/register", {
        method: 'POST',
        header: {
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
      console.log('1');
      const newUser = await newUserJson.json();
      return dispatch({
        type: LOGIN,
        payload: newUser
      });
  } catch (error) {
      throw error;
  }
}
