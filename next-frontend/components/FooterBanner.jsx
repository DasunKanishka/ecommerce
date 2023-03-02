import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {urlFor} from '../lib/client';

const FooterBanner = ({banner}) => {
    return (
        <div className="footer-banner-container">
            <div className="banner-desc">
                <div className="left">
                    <p>{banner.discount}</p>

                    <h3>{banner.largeText1}</h3>

                    <h3>{banner.largeText2}</h3>

                    <p>{banner.saleTime}</p>
                </div>

                <div className="right">
                    <p>{banner.smallText}</p>

                    <h3>{banner.midText}</h3>

                    <p>{banner.desc}</p>

                    <Link href={`/product/${banner.product}`}>
                        <button>{banner.buttonText}</button>
                    </Link>
                </div>

                <picture>
                    <Image
                        src={urlFor(banner.image).url()}
                        alt={banner.product}
                        width="300"
                        height="200"
                        className="footer-banner-image"
                    />
                </picture>
            </div>
        </div>
    );
};

export default FooterBanner;
