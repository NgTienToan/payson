import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
function Trailer() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <>
      <p className="hero__subtitle">{siteConfig.tagline}</p>
    </>
  )
}

export default Trailer
