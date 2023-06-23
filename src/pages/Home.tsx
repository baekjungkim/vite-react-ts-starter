import { Flex, Heading } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

function Home() {
  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Heading as="u" pb="10">
        Hello World
      </Heading>
      <Link as={ReactLink} to="about">
        About
      </Link>
    </Flex>
  );
}

export default Home;
