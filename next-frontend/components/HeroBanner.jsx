import React from 'react';

// client
import {urlFor} from '../lib/client';

// nextjs
import Link from 'next/link';
import Image from 'next/image';

const HeroBanner = ({banner}) => {
    return (
        <>
            <p className="beats-solo">{banner.smallText}</p>

            <h3>{banner.midText}</h3>

            <picture>
                <Image
                    src={urlFor(banner.image).url()}
                    alt={banner.product}
                    width="450"
                    height="300"
                    className="hero-banner-image"
                />
            </picture>

            <div>
                <Link href={`/product/${banner._id}`}>
                    <button>{banner.buttonText}</button>
                </Link>

                <div className="desc">
                    <h5>Description</h5>

                    <p>{banner.desc}</p>
                </div>
            </div>
        </>
    );
};

export default HeroBanner;
