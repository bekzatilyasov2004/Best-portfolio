import { Box, Link, Text, Heading, Flex } from '@chakra-ui/react';
import { CertificateData } from '../constant/CertificateData';
import { Image } from 'antd';
import { Fade } from 'react-awesome-reveal';

const Certificate = () => {
  return (
    <Box p={5}>
      <Text textAlign={'center'} fontWeight={700} fontSize={{ base: '26px', md: '48px' }} color="white">
        <Fade direction='down' duration={400} cascade>
          Certificate
        </Fade>
      </Text>
      <Flex flexWrap="wrap" justify="center" gap={6}>
        {CertificateData.map((certificate) => (
          <Box
            key={certificate.id}
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            boxShadow="md"
            maxW={{ base: "100%", md: "45%", lg: "30%" }}
            minW={{ base: "100%", md: "45%", lg: "30%" }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
          >
            <Heading size="md" mb={2}>{certificate.name}</Heading>
            <Image 
              src={certificate.image} 
              alt={certificate.name} 
              style={{ marginBottom: '10px', maxHeight: '200px', objectFit: 'contain' }} 
            />
            <Text mb={4}>{certificate.description}</Text>
            <Link href={certificate.link} color="teal.500" isExternal>
              View Certificate
            </Link>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Certificate;
