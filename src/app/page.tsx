'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Loading from '@/components/Loading';
import { useScrollSections } from '@/hooks/useScrollSections';

// Lazy load non-critical components
const About = dynamic(() => import('@/components/About'), {
  loading: () => <Loading />,
});

const Skills = dynamic(() => import('@/components/skills'), {
  loading: () => <Loading />,
});

const Projects = dynamic(() => import('@/components/Project'), {
  loading: () => <Loading />,
});

const Work = dynamic(() => import('@/components/Works'), {
  loading: () => <Loading />,
});

const Certificate = dynamic(() => import('@/components/certificate'), {
  loading: () => <Loading />,
});

const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <Loading />,
});

const ResearchPublications = dynamic(() => import('@/components/Research'), {
  loading: () => <Loading />,
});

export default function Home() {
  const { currentSection, setCurrentSection, isScrollingProgrammatically } = useScrollSections();

  return (
    <>
      <Navbar
        activeSection={currentSection}
        setActiveSection={setCurrentSection}
        isScrollingProgrammatically={isScrollingProgrammatically}
      />
      <div id="home"><Hero /></div>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loading /></div>}>
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
        <div id="works"><Work /></div>
        <div id="research"><ResearchPublications /></div>
        <div id="certificate"><Certificate /></div>
        <div id="contact" className="contact-mobile-margin"><Contact /></div>
      </Suspense>
    </>
  );
}
