import React, { useState, useEffect } from 'react'

export default function ProductsDetail({apiClient, productId, goToProducts}) {

    const [product, setProduct] = useState(null);

    useEffect(() => {

        if(product){
          return;
        }
    
        apiClient.getProduct(productId)
        .then(productDetail => setProduct(productDetail));
      });

      const buildImageUrl = (imageName) => `${apiClient.apiUrl}images/${imageName}`;

  return (
    <>
    <a href='#' onClick={goToProducts}>Go to products list</a>
    <section className="product-detail">
        { !product ?
            ''
        : <>
            <h1>{product?.name}</h1>
            <section className='product-info row'>
                <picture className='col-6'>
                    <source srcSet={buildImageUrl(product?.big_image)} media="(min-width: 600px)" />
                    <img className='w-100' src={buildImageUrl(product?.medium_image)} alt="MDN" />
                </picture>
            </section>
        </>
        }
        
    </section>
    </>
  )
}
