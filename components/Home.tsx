import React from 'react';
import { Hero } from './Hero';
import { ProblemAgitate } from './ProblemAgitate';
import { Services } from './Services';
import { Methodology } from './Methodology';
import { Contact } from './Contact';
import { SEO } from './SEO';

export const Home: React.FC = () => {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Competitive Intelligence",
    "image": "https://www.competitiveintelligence.com.au/favicon.ico",
    "url": "https://www.competitiveintelligence.com.au",
    "telephone": "+61 4 2426 4928",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sydney",
      "addressCountry": "AU"
    },
    "priceRange": "$$$",
    "description": "Helping stuck mid-market and enterprise companies unlock their next stage of growth through rigorous analysis and structural optimization.",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <>
      <SEO 
        title="Competitive Intelligence | We Help Stuck Companies Scale"
        description="Unlock your next stage of growth. We help mid-market and enterprise companies fix sales, marketing, and culture issues to scale rapidly."
        schema={businessSchema}
      />
      <Hero />
      <ProblemAgitate />
      <Services />
      <Methodology />
      <Contact />
    </>
  );
};