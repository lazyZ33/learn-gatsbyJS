import * as React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import { use } from 'react';

const Seo = ( {title} ) => {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }
    `);
    return (
        <title>{title ? `${title} | ${data.site.siteMetadata.title}` : data.site.siteMetadata.title}</title>
    );
}

export default Seo;