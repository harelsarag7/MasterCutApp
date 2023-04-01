import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import photo1 from "./1.jpg";
import photo2 from "./2.jpg";
import photo3 from "./3.jpg";

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box >{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      marginTop={"30px"}
      boxShadow={'lg'}
      
      p={8}
      rounded={'xl'}
      align={'center'}
      
      pos={'relative'}
      
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading  as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src}  mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};



export default function Testimonials() {
  return (
    <ChakraProvider >

    <Box bg={useColorModeValue('white.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12} marginTop={"90px"}> 
        <Stack spacing={0} align={'center'}>
          <Heading>Testimonials from Our Users</Heading>
          <Text>Serving clients globally with our background removal tool1 </Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Top Choice</TestimonialHeading>
              <TestimonialText>
              "I've tried many image background removal tools, but this one is by far the fastest and most accurate. Highly recommended!"
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={photo1}
              name={'Samantha Lee'}
              title={''}
            />
          </Testimonial>
          <Testimonial >
            <TestimonialContent>
              <TestimonialHeading>Easy & Efficient</TestimonialHeading>
              <TestimonialText>
              "This background remover tool is a game-changer. It's super easy to use and saves me so much time. Love it!"
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={photo2}
              name={'Rachel Chen'}
              title={''}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Mindblowing Service</TestimonialHeading>
              <TestimonialText>
              "I was blown away by how quickly and easily the background was removed from my images using this tool. Highly recommend it!"              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={photo3}
              name={'David Kim'}
              title={''}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
    </ChakraProvider>

  );
}