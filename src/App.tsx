import React, {useEffect, useState} from 'react';
import {Product} from './components/Product'
import {products} from './data/products'
import axios from "axios";
import {IProduct} from "./models";

function App() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(false);
    // https://youtu.be/OJ16BaPC6VI?t=3424
    // const [error, setError] = useState('');

    async function fetchProducts() {
        setLoading(true);
        const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5');
        setProducts(response.data);
        setLoading(false);
    }

    useEffect(() => {
        fetchProducts();
        }, []
    );

  return (
    <div
        className='container mx-auto max-w-2xl pt-5'
    >
        {loading && <p className='text-center'>Loading...</p>}
        {products.map( product => <Product product={product} key={product.id} /> )}
    </div>
  );
}

export default App;
