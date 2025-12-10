import React from 'react';
import { Hero } from './Hero';
import { ProblemAgitate } from './ProblemAgitate';
import { Services } from './Services';
import { Methodology } from './Methodology';
import { Contact } from './Contact';
import { SEO } from './SEO';

export const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Competitive Intelligence | We Help Stuck Companies Scale"
        description="Unlock your next stage of growth. We help mid-market and enterprise companies fix sales, marketing, and culture issues to scale rapidly."
      />
      <Hero />
      <ProblemAgitate />
      <Services />
      <Methodology />
      <Contact />
    </>
  );
};