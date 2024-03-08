import React, { useEffect, useState } from 'react'
import ErrorMessage from './ErrorMessage/ErrorMessage';

export default function Login({setToken, apiClient}) {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Uncomment this so the inputs are filled with the default user and password
    useEffect(() => {
      setLogin('admin');
      setPassword('admin');
    });

    const loginFunct = (event) => {
      event.preventDefault();

      apiClient.login(login, password)
        .then(
          token => setToken(token),
          error => {
            const myModalAlternative = new bootstrap.Modal('#errorMessage')
            myModalAlternative.show();
          });
    };

  return (
    <>
        <div className="col-4 offset-4 row align-items-center vh-100">
          <form className="loginForm">
            <div className="row mb-3">
              <label className="form-label" htmlFor="login">Login:</label>
              <input className="form-control" type="text" id='login' value={login} onChange={e => setLogin(e.target.value)} />
            </div>
            <div className="row mb-3">
              <label className="form-label" htmlFor="password">Password:</label>
              <input className="form-control" type="password" id='password' value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className="row mb-3">
              <button className="btn btn-primary" onClick={loginFunct}>Login</button>
            </div>
          </form>
        </div>
        <ErrorMessage message="Ha habido un error en la API"></ErrorMessage>
    </>
  )
}
