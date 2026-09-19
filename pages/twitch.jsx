import Image from 'next/image';
import React from 'react';
import twitchImg from '../public/assets/projects/twitch.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import Head from 'next/head';

const twitch = () => {
  return (
    <>
    <Head>
      <title>Twitch UI | Mohammad Imran</title>
    </Head>
    <main id='main-content' className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={twitchImg}
          alt='Twitch UI screenshot'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h1 className='py-2 text-3xl sm:text-4xl'>Twitch UI</h1>
          <p className='text-xl font-bold'>Next JS / Tailwind / Next Auth</p>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This appplication was built using NEXT.JS and is styled with
            Tailwind CSS. The application is hosted statically using Vercel.
            This is a mobile responsive recreation of Twitch.tv and features
            Next/Auth.js for authentication. Users may choose to be
            authenticated with either a Github account or a Google account. A
            few features to note with this project are lazy loading images using
            the Image component, built in routing, and Next/Auth Context.
          </p>
          <a
            href='https://twitch-nextjs-tailwind.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-line rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-soft py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next.JS
              </p>
              <p className='text-soft py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-soft py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-soft py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next Auth
              </p>
              <p className='text-soft py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Github Auth
              </p>
              <p className='text-soft py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Google Auth
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects' className='underline'>Back</Link>
      </div>
    </main>
    </>
  );
};

export default twitch;
