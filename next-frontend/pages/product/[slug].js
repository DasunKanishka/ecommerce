import React, { useState } from 'react';
import Image from 'next/image';

import { client, urlFor } from '../../lib/client';
import {
    AiOutlineMinus,
    AiOutlinePlus,
    AiFillStar,
    AiOutlineStar,
} from 'react-icons/ai';

import { Product } from '../../components';

const ProductDetails = ({ productData, productsData }) => {
    const [index, setIndex] = useState(0);

    return (
        <>
            <div className="product-detail-container">
                <div>
                    <picture className="image-container">
                        <Image
                            src={urlFor(
                                productData.image && productData.image[index]
                            ).url()}
                            alt={productData.name}
                            width="400"
                            height="250"
                            className="product-detail-image"
                        />
                    </picture>

                    <div className="small-images-container">
                        {productData.image?.map((img, i) => (
                            <Image
                                key={img._key}
                                src={urlFor(img).url()}
                                alt={productData.name}
                                width="60"
                                height="60"
                                onMouseEnter={() => setIndex(i)}
                                className={`small-image ${
                                    i === index && 'selected-image'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                <div className="product-detail-desc">
                    <h1>{productData.name}</h1>

                    <div className="reviews">
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>

                        <p>(20)</p>
                    </div>

                    <h4>Details: </h4>

                    <p>{productData.details}</p>

                    <p className="price">${productData.price}</p>

                    <div className="quantity">
                        <h3>Quantity: </h3>

                        <p className="quantity-desc">
                            <span className="minus">
                                <AiOutlineMinus />
                            </span>
                            <span className="num">0</span>
                            <span className="plus">
                                <AiOutlinePlus />
                            </span>
                        </p>
                    </div>

                    <div className="buttons">
                        <button className="add-to-cart">Add to Cart</button>

                        <button className="buy-now">Buy Now</button>
                    </div>
                </div>
            </div>

            <div className="maylike-products-wrapper">
                <h2>You may also like</h2>

                <div className="marquee">
                    <div className="maylike-products-container track">
                        {productsData?.map(product => (
                            <Product key={product._id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export const getStaticPaths = async () => {
    const productQuery = `*[_type == "product"] {
        slug {
            current
        }
    }`;

    const productData = await client.fetch(productQuery);

    const paths = productData.map(product => ({
        params: {
            slug: product.slug.current,
        },
    }));

    return {
        paths,
        fallback: 'blocking',
    };
};

export const getStaticProps = async ({ params: { slug } }) => {
    const productQuery = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productData = await client.fetch(productQuery);

    const productsQuery = '*[_type == "product"]';
    const productsData = await client.fetch(productsQuery);

    return {
        props: { productData, productsData },
    };
};

export default ProductDetails;
