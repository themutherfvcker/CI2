import React from 'react';
import { Hero } from './Hero';
import { ProblemAgitate } from './ProblemAgitate';
import { Services } from './Services';
import { Methodology } from './Methodology';
import { Contact } from './Contact';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ProblemAgitate />
      <Services />
      <Methodology />
      <Contact />
    </>
  );
};