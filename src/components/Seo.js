import React from 'react';
import Helmet from 'react-helmet';
import appleTouchIcon from '../img/apple-touch-icon.png';
import favicon3232 from '../img/favicon-32x32.png';
import favicon1616 from '../img/favicon-16x16.png';
import safariPinnedTab from '../img/safari-pinned-tab.svg';

export const Seo = () => {
  return (
    <Helmet>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={appleTouchIcon}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={favicon3232}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={favicon1616}
      />
      <link rel="mask-icon" href={safariPinnedTab} color="#ffffff" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  )
}
