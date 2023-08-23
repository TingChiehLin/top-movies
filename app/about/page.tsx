import {FaLinkedin, FaSquareGithub} from 'react-icons/fa6';

import Image from 'next/image';
import SocialGroup from '@/components/SocialGroup';

import profile_image from '../../public/assets/me.jpg';

const AboutPage = () => {
  return (
  <div className='w-full max-w-7xl mx-auto h-auto py-32 flex gap-20'>
   <Image className='rounded-lg w-[164px] md:w-[417px]' src={profile_image} alt={'profile-image'} width="417" height="626" sizes='100vw'/>
   <div className='full max-w-2xl flex justify-between flex-col'>
      <div id="content">
        <h1 className='text-4xl'>DISCOVERY TOP MOVIE 100</h1>
        <p className='mt-12 leading-loose'>Hello there 👋</p>
        <p className='leading-loose'>My name is Jay Lin, I make movie app is aimed for people who love to watch movies with top 100，They also are able to add movies into favourite list</p>
        <br/>
        <p className='leading-loose'>First of all, I sketch my general ideas and look for inspiration. Then, I make a muck up with some of colors. Finanlly, I transfer my design into coding with <strong>Next.js | React | TypeScript | TailwildCSS | HTML5</strong></p>
      </div>
      <div className='w-40'>
        <SocialGroup title={"Contact Me"}>
          <FaLinkedin size={"2rem"}  className='text-secondaryColor'/>
        </SocialGroup>
        <SocialGroup title={"Source Code"}>
          <FaSquareGithub size={"2rem"} className='text-secondaryColor'/>
        </SocialGroup>
     </div>
    </div>
  </div>)
};

export default AboutPage;
