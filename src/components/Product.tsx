import React, {useState} from 'react'
import {IProduct} from "../models";

interface ProductProps {
    product: IProduct
}

export function Product({ product }: ProductProps) {
    const [details, setDetails] = useState(false);
    const btnBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400';
    const btnClasses = ['py-2 px-4 mb-2 border', btnBgClassName];

    return(
        <div
            className='border px-4 py-2 rounded flex flex-col items-center mb-2'
        >
            <img
                src={product.image}
                alt={product.title}
                className='w-1/6'
            />
            <p>{product.title}</p>
            <span className='font-bold'>
                {product.price}
            </span>

            <button
                className={btnClasses.join(' ')}
                onClick={() => setDetails(currentState => !currentState)}
            >
                { details ? 'Hide details' : 'Show details' }
            </button>

            {details && <div>
                <p>{ product.description }</p>
                <p>Rate: <span style={{ fontWeight: 'bold'}}>{ product.rating?.rate }</span></p>
            </div> }
        </div>
    )
}
