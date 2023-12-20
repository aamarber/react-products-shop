import React, { useEffect, useState } from 'react'

export default function Login({setToken, apiClient}) {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    // Uncomment this so the inputs are filled with the default user and password
    useEffect(() => {
      setLogin('admin');
      setPassword('admin');
    });

    const loginFunct = (event) => {
      event.preventDefault();

      apiClient.login(login, password)
        .then(token => setToken(token));
    };

  return (
    <>
        <div>
          <form className="loginForm">
            <div>
              <label htmlFor="login">Login:</label>
              <input type="text" id='login' value={login} onChange={e => setLogin(e.target.value)} />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id='password' value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <div>
              <button onClick={loginFunct}>Login</button>
            </div>
          </form>
        </div>
    </>
  )
}
