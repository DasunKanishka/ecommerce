import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {urlFor} from '../lib/client';

const Product = ({product}) => {
    return (
        <>
            <Link href={`/product/${product.slug.current}`}>
                <div className="product-card">
                    <picture>
                        {product.image?.map(img => {
                            return (
                                <Image
                                    key={img._key}
                                    src={urlFor(img).url()}
                                    alt={product.name}
                                    width="250"
                                    height="250"
                                    className="product-image"
                                />
                            );
                            console.log(img);
                        })}
                    </picture>

                    <div className="product-name">{product.name}</div>

                    <div className="product-price">${product.price}</div>
                </div>
            </Link>
        </>
    );
};

export default Product;
