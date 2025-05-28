import { Helmet } from 'react-helmet-async';
import { useLocation } from "react-router-dom";

const SEO = ({ title, description, keywords, canonical }) => {
    const location = useLocation();
    const fullCanonical = canonical || `https://slneng.com${location.pathname}`;
    console.log("SEO mounted with title:", title);
  return (
    <Helmet>
      <title>{title}</title>

      {description && (
        <>
          <meta name="description" content={description} />
          <meta name="dcterms.description" content={description} />
        </>
      )}

      {keywords && <meta name="keywords" content={keywords} />}
      
      <meta name="dcterms.title" content={title} />
      <meta name="dcterms.publisher" content="S.L.N Engineering Limited" />
      <meta name="dcterms.contributor" content="S.L.N Engineering Limited" />
      <meta name="dcterms.creator" content="slneng.com" />

      <meta name="application-name" content="slneng.com" />
      <meta name="robots" content="index, follow" />
      <meta name="rating" content="General" />

      {canonical && <link rel="canonical" href={fullCanonical} />}
    </Helmet>
  );
};

export default SEO;


