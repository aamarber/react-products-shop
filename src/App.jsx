import React, { useState } from 'react'
import ApiClient from './Services/ApiClient';

export default function App() {

  const [token, _setToken] = useState(null);

  const setToken = (tokenValue) => {
    _setToken(tokenValue);

    apiClient.setToken(tokenValue);
  }

  const apiURL = 'http://localhost:9988/';

  const [apiClient, setApiClient] = useState(new ApiClient(apiURL));

    return (
    <>
    </>
  )
}