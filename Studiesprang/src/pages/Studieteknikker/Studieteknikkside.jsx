import React, { useState, useEffect } from 'react';
import {
  FaBook,
  FaLightbulb,
  FaUsers,
  FaClock,
  FaClipboardCheck,
} from 'react-icons/fa';
import { Box, Heading, Text, VStack, HStack, Icon, Progress } from '@chakra-ui/react';

const Studieteknikkside = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;

      const scrolled = (scrollTop / (scrollHeight - windowHeight)) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='w-9/12'>

    <Box p="6" position="relative">
      <Progress
        value={scrollProgress}
        colorScheme="blue"
        size="lg"
        borderRadius="full"
        position="sticky"
        top="100"
        left="0"
        right="0"
        zIndex="1000"
      />

      <Heading as="h1" fontSize="3xl" mb="6" textAlign="left">
        Studieteknikker og Læremetoder
      </Heading>

      <VStack spacing="6" align="left">
        {renderStudyTechnique(
          'Lesingsteknikker',
          'Aktiv lesing handler om å engasjere seg mentalt med teksten. Notetaking bidrar til å strukturere informasjonen. Tidsstyring er viktig for å optimalisere lesetiden. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia repudiandae id, aspernatur ullam ratione officiis! Ipsam velit accusantium aperiam eveniet sint quisquam earum ipsa reprehenderit reiciendis porro modi minus, nesciunt temporibus quaerat aspernatur consequatur, unde illum, libero tempora aliquid pariatur?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia repudiandae id, aspernatur ullam ratione officiis! Ipsam velit accusantium aperiam eveniet sint quisquam earum ipsa reprehenderit reiciendis porro modi minus, nesciunt temporibus quaerat aspernatur consequatur, unde illum, libero tempora aliquid pariatur?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia repudiandae id, aspernatur ullam ratione officiis! Ipsam velit accusantium aperiam eveniet sint quisquam earum ipsa reprehenderit reiciendis porro modi minus, nesciunt temporibus quaerat aspernatur consequatur, unde illum, libero tempora aliquid pariatur?'
        )}

        {renderStudyTechnique(
          'Konsentrasjonstips',
          'Minimer distraksjoner ved å skape et stille studiemiljø. Bruk Pomodoro-teknikken for å jobbe i korte konsentrerte bolker. Finn din optimale arbeidstid.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia repudiandae id, aspernatur ullam ratione officiis! Ipsam velit accusantium aperiam eveniet sint quisquam earum ipsa reprehenderit reiciendis porro modi minus, nesciunt temporibus quaerat aspernatur consequatur, unde illum, libero tempora aliquid pariatur?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia repudiandae id, aspernatur ullam ratione officiis! Ipsam velit accusantium aperiam eveniet sint quisquam earum ipsa reprehenderit reiciendis porro modi minus, nesciunt temporibus quaerat aspernatur consequatur, unde illum, libero tempora aliquid pariatur?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia repudiandae id, aspernatur ullam ratione officiis! Ipsam velit accusantium aperiam eveniet sint quisquam earum ipsa reprehenderit reiciendis porro modi minus, nesciunt temporibus quaerat aspernatur consequatur, unde illum, libero tempora aliquid pariatur?'
        )}

        {renderStudyTechnique(
          'Gruppearbeid',
          'Delta i studiegrupper for å dele kunnskap og lære av andre. Diskuter ulike perspektiver og løsninger. Samarbeidet styrker forståelsen av faget. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia repudiandae id, aspernatur ullam ratione officiis! Ipsam velit accusantium aperiam eveniet sint quisquam earum ipsa reprehenderit reiciendis porro modi minus, nesciunt temporibus quaerat aspernatur consequatur, unde illum, libero tempora aliquid pariatur?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia repudiandae id, aspernatur ullam ratione officiis! Ipsam velit accusantium aperiam eveniet sint quisquam earum ipsa reprehenderit reiciendis porro modi minus, nesciunt temporibus quaerat aspernatur consequatur, unde illum, libero tempora aliquid pariatur?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia repudiandae id, aspernatur ullam ratione officiis! Ipsam velit accusantium aperiam eveniet sint quisquam earum ipsa reprehenderit reiciendis porro modi minus, nesciunt temporibus quaerat aspernatur consequatur, unde illum, libero tempora aliquid pariatur?'
        )}

        {renderStudyTechnique(
          'Effektiv Tidsstyring',
          'Sett realistiske mål for studieøkter. Bruk tidsblokker for å fokusere intensivt. Ta korte pauser for å opprettholde produktivitet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia repudiandae id, aspernatur ullam ratione officiis! Ipsam velit accusantium aperiam eveniet sint quisquam earum ipsa reprehenderit reiciendis porro modi minus, nesciunt temporibus quaerat aspernatur consequatur, unde illum, libero tempora aliquid pariatur?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia repudiandae id, aspernatur ullam ratione officiis! Ipsam velit accusantium aperiam eveniet sint quisquam earum ipsa reprehenderit reiciendis porro modi minus, nesciunt temporibus quaerat aspernatur consequatur, unde illum, libero tempora aliquid pariatur?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia repudiandae id, aspernatur ullam ratione officiis! Ipsam velit accusantium aperiam eveniet sint quisquam earum ipsa reprehenderit reiciendis porro modi minus, nesciunt temporibus quaerat aspernatur consequatur, unde illum, libero tempora aliquid pariatur?'
        )}

        {renderStudyTechnique(
          'Oppgavehåndtering',
          'Bryt ned oppgaver i mindre deler for å gjøre dem mer håndterbare. Prioriter oppgaver basert på viktighet og tidsfrister. Lag en plan for å strukturere arbeidet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia repudiandae id, aspernatur ullam ratione officiis! Ipsam velit accusantium aperiam eveniet sint quisquam earum ipsa reprehenderit reiciendis porro modi minus, nesciunt temporibus quaerat aspernatur consequatur, unde illum, libero tempora aliquid pariatur?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia repudiandae id, aspernatur ullam ratione officiis! Ipsam velit accusantium aperiam eveniet sint quisquam earum ipsa reprehenderit reiciendis porro modi minus, nesciunt temporibus quaerat aspernatur consequatur, unde illum, libero tempora aliquid pariatur?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia repudiandae id, aspernatur ullam ratione officiis! Ipsam velit accusantium aperiam eveniet sint quisquam earum ipsa reprehenderit reiciendis porro modi minus, nesciunt temporibus quaerat aspernatur consequatur, unde illum, libero tempora aliquid pariatur?'
        )}
        
      </VStack>
    </Box>
    </div>

  );
};

const renderStudyTechnique = (title, description) => (
  <Box textAlign="left" w="100%">
    <HStack spacing="4" align="flex-start">
      <Icon as={getIcon(title)} boxSize={6} />
      <Text fontWeight="bold">{title}</Text>
    </HStack>
    <Text>{description}</Text>
  </Box>
);

const getIcon = (title) => {
  switch (title) {
    case 'Lesingsteknikker':
      return FaBook;
    case 'Konsentrasjonstips':
      return FaLightbulb;
    case 'Gruppearbeid':
      return FaUsers;
    case 'Effektiv Tidsstyring':
      return FaClock;
    case 'Oppgavehåndtering':
      return FaClipboardCheck;
    default:
      return null;
  }
};

export default Studieteknikkside;
