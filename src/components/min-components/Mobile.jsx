import { Box } from '@chakra-ui/react';
import { IoIosHome} from "react-icons/io";
import { SiAboutdotme } from "react-icons/si";
import { Link } from 'react-scroll';
import { TbCertificate } from "react-icons/tb";
import { MdContacts } from "react-icons/md";
import { SiMinds } from "react-icons/si";
import { GiSkills } from "react-icons/gi";


const Mobile = () => {
  return (
    <Box
      w={{ base: '360px', md: '360px' }}
      h={'50px'}
      borderRadius={{ base: '0', md: '30px' }}
      position={'fixed'}
      display={'flex'}
      justifyContent={'space-around'}
      alignItems={'center'}
      bottom={10}
      backdropFilter={'blur(5px)'}
      zIndex={10}  
    >
      <Link className='pointer'
        to="home" 
        smooth={true} 
        duration={500} 
        activeClass="active"  
        spy={true}
        offset={-70} 
      >
        <IoIosHome size={'23px'} />
      </Link>
      <Link className='pointer'
        to="about" 
        smooth={true} 
        duration={500} 
        activeClass="active"  
        spy={true}
        offset={-70} 
      >
        <SiAboutdotme size={'23px'}  />
      </Link>
      <Link className='pointer'
        to="skill" 
        smooth={true} 
        duration={500} 
        activeClass="active"  
        spy={true}
        offset={-70} 
      >
        <GiSkills size={'23px'}  />
      </Link>
      <Link className='pointer'
        to="project" 
        smooth={true} 
        duration={500} 
        activeClass="active"  
        spy={true}
        offset={-70} 
      >
        <SiMinds size={'23px'}  />
      </Link>
      <Link className='pointer'
        to="certificate" 
        smooth={true} 
        duration={500} 
        activeClass="active"  
        spy={true}
        offset={-70} 
      >
        <TbCertificate size={'23px'} />
      </Link>
      <Link className='pointer'
        to="contact" 
        smooth={true} 
        duration={500} 
        activeClass="active"  
        spy={true}
        offset={-70} 
      >
        <MdContacts size={'23px'}  />
      </Link>
    </Box>
  );
}

export default Mobile;
