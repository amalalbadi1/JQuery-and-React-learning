import React, { useState, useEffect } from 'react';
import axios from 'axios';


const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchProducts();
    }, []);
    const fetchProducts = () => {
        axios.get('https://fakestoreapi.com/products').then((res) => {
            console.log(res);
            setProducts(res.data);
        })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <h1> Products</h1>
            <div className='item-container'>
                {products.map((product) => (
                    <div className='card'>
                        <img src={product.image} alt='' />
                        <h6>title : {product.title}</h6>
                        <p>price :{product.price}</p>

                    </div>
                ))}
            </div>
        </div>
    );
};
export default FeaturedProducts;