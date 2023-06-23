import { Flex, Heading } from '@chakra-ui/react';
import AboutSection from './components/AboutSection';
import { Link } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

function About() {
  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Heading as="h2" pb="10">
        About Page!
      </Heading>
      <AboutSection />
      <AboutSection />
      <AboutSection />
      <Link as={ReactLink} to="/" pt="10">
        Go Home
      </Link>
    </Flex>
  );
}

export default About;
