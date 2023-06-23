import { Flex, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Heading as="h1" pb="10">
        Not Found
      </Heading>
      <Link to="/">Go Home</Link>
    </Flex>
  );
}

export default NotFound;
