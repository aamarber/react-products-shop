import React, { useState, useEffect } from 'react'

export default function ProductsList({apiClient, openProductDetail}) {

  const [products, setProducts] = useState(null);

  useEffect(() => {

    if(products){
      return;
    }

    setProducts([]);

    apiClient.getProducts()
    .then(productsList => setProducts(productsList));
  });

  return (
    <div className="container-fluid">
      <div className="shop-container">
        <h1>Shop</h1>
          <table className='table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {!products ? <tr></tr> :
              products.map((product) => {
                return <>
                  <tr>
                    <td>
                      <a href="#" onClick={() => openProductDetail(product.id)}>
                        {product.id}
                      </a>
                    </td>
                    <td>
                      {product.name}
                    </td>
                    <td>
                      {product.price}
                    </td>
                  </tr>
                </>
              })}
            </tbody>
          </table>
      </div>
    </div>
  )
}
