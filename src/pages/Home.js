import Page from '../components/Page';
import { Container } from '@chakra-ui/react';
import { CtaLanding, Hero, HowItWorks } from '../components/LandingPage';

export default function Home() {
  return (
    <Page title='Welcome'>
      <Hero />
      <HowItWorks />
      <CtaLanding />
    </Page>
  );
}
