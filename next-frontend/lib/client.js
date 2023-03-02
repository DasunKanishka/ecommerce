import {createClient} from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    useCdn: process.env.NEXT_PUBLIC_SANITY_USE_CDN,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

const urlFor = source => builder.image(source);

export {client, urlFor};
