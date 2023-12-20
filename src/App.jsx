import React, { useState } from 'react'
import ProductsList from './ProductsList/ProductsList';
import Login from './Login';
import ApiClient from './Services/ApiClient';
import ProductsDetail from './ProductsDetail/ProductsDetail';

export default function App() {

  const [token, _setToken] = useState(null);

  const setToken = (tokenValue) => {
    _setToken(tokenValue);

    apiClient.setToken(tokenValue);
  }

  const apiURL = 'http://localhost:9988/';

  const [apiClient, setApiClient] = useState(new ApiClient(apiURL));

  const [productId, setProductId] = useState(null);

  const openProductDetail = (productId) => {
    setProductId(productId);
  }

  const goToProducts = () => {
    setProductId(null);
  }

    return (
    <>
      <div>
        {!token ? 
          <Login apiClient={apiClient} setToken={setToken}></Login>
          :
          (
            !productId ? 
            <ProductsList apiClient={apiClient} openProductDetail={openProductDetail}></ProductsList>
            :
            <ProductsDetail apiClient={apiClient} productId={productId} goToProducts={goToProducts}></ProductsDetail>
          )
        }
      </div>
    </>
  )
}