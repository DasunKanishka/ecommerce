import React from 'react';

// client
import {client, urlFor} from '../lib/client';

// components
import {Footer, FooterBanner, HeroBanner, Product} from '../components';

const Index = ({bannerData, productData}) => {
    return (
        <>
            <HeroBanner banners={bannerData.length && bannerData} />

            <div className="products-heading">
                <h2>Best Selling Products</h2>

                <p>Speakers of many variations</p>
            </div>

            <div className="products-container">Loop products</div>

            <Footer />
        </>
    );
};

export const getStaticProps = async () => {
    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    const productQuery = '*[_type == "product"]';
    const productData = await client.fetch(productQuery);

    return {
        props: {bannerData, productData},
    };
};

export default Index;
