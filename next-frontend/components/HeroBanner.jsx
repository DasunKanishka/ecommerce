import React from 'react';

// client
import {urlFor} from '../lib/client';

// nextjs
import Link from 'next/link';

const HeroBanner = ({banners}) => {
    return (
        <div className="hero-banner-container">
            {banners.map(banner => {
                return (
                    <div key="{banner.id}">
                        <p className="beats-solo">{banner.smallText}</p>

                        <h3>{banner.midText}</h3>

                        <img
                            src={urlFor(banner.image).url()}
                            alt={banner.product}
                            className="hero-banner-image"
                        />

                        <div>
                            <Link href={`/product/${banner._id}`}>
                                <button>{banner.buttonText}</button>
                            </Link>

                            <div className="desc">
                                <h5>Description</h5>

                                <p>{banner.desc}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default HeroBanner;
