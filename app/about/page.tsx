import {FaLinkedin, FaSquareGithub} from 'react-icons/fa6';
import { HiChevronLeft } from "react-icons/hi2";

import Image from 'next/image';
import SocialGroup from '@/components/SocialGroup';
import BackPage from '@/components/BackPage';

import profileImage from '../../public/assets/me.jpg';
import PageContainer from '@/layouts/PageContainer';

const AboutPage = () => {
  return (
  <PageContainer>
   <div className='flex gap-20'>
      <Image className='rounded-lg w-full md:w-[320px]' src={profileImage} alt={'profile-image'} width="417" height="626" sizes='100vw'/>
      <div className='full max-w-2xl flex justify-between flex-col'>
        <div id="content">
          <h1 className='text-4xl'>DISCOVERY TOP MOVIE 100 App</h1>
          <p className='mt-12'>Hello there 👋</p>
          <br/>
          <p>My name is Jay Lin, I make movie app is aimed for people who love to watch movies with top 100，They also are able to add movies into favourite list</p>
          <br/>
          <p>First of all, I sketch my general ideas and look for inspiration. Then, I make a muck up with some of colors. Finanlly, I transfer my design into coding with <strong>Next.js | React | TypeScript | TailwildCSS | HTML5</strong></p>
        </div>
        <div className='w-40 flex flex-col gap-2'>
          <SocialGroup title={"Contact Me"} href={"https://www.linkedin.com/in/cooloojayoo/"}>
            <FaLinkedin size={"2rem"} className='text-secondaryColor cursor-pointer'/>
          </SocialGroup>
          <SocialGroup title={"Source Code"} href={"https://github.com/TingChiehLin/top-movies"}>
            <FaSquareGithub size={"2rem"} className='text-secondaryColor cursor-pointer'/>
          </SocialGroup>
        </div>
      </div>
    </div>
  </PageContainer>)
};

export default AboutPage;
