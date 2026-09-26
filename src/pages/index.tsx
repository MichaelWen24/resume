import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import AboutSection from '../components/Sections/AboutSection';
import ContactSection from '../components/Sections/ContactSection';
import HeroSection from '../components/Sections/HeroSection';
import ProjectsSection from '../components/Sections/ProjectsSection';
import ResumeSection from '../components/Sections/ResumeSection';
import SiteFooter from '../components/Sections/SiteFooter';
import {homePageMeta} from '../data/profile';

const SiteHeader = dynamic(() => import('../components/Sections/SiteHeader'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <ProjectsSection />
      <ContactSection />
      <SiteFooter />
    </Page>
  );
});

export default Home;
