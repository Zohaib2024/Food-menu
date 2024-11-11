import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TiSocialFacebookCircular, TiSocialYoutubeCircular, TiSocialTwitterCircular } from "react-icons/ti";

const Hero = () => {
  return (
    <div className='grid lg:grid-cols-2  grid-cols-1  items-center mt-16  lg:ml-72 lg:mr-52 lg:items-center  md:mr-20 md:ml-20 sm:mr-20 sm:ml-20'>
      <div className=''>
        <h1 className='text-4xl md:text-6xl font-bold text-center lg:text-start '>We provide the best food for you</h1>
        <p className='mt-4 text-gray-700 text-center lg:text-start'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere nostrum dolorem exercitationem debitis velit! 
          Corrupti asperiores voluptatibus, quibusdam dolor consequuntur aliquam doloribus.
        </p>

        <div className='flex space-x-4 mt-10 justify-center '>
          <button aria-label="View Menu" className='w-36 h-10 hover:bg-red-300 hover:text-black bg-red-600 shadow-lg rounded-xl text-white '>
            Menu
          </button>
          <button aria-label="Book Table" className='w-36 h-10 hover:bg-red-300 hover:text-black bg-red-600 shadow-lg rounded-xl text-white'>
            Book Table
          </button>
        </div>

        <div className='flex justify-center gap-5 items-center mt-10'>
         <Link href="/" > <TiSocialFacebookCircular aria-label="Facebook" size={40} /> </Link>
         <Link href="/" >  <TiSocialYoutubeCircular aria-label="YouTube" size={40} /></Link>
         <Link href="/" >   <TiSocialTwitterCircular aria-label="Twitter" size={40} /></Link>
        </div>
      </div>

      <div className='text-center mt-10 hidden  lg:block'>
        <Image
          src="/Food-hero.png"
          width={500}
          height={500}
          alt="Picture of delicious food"
        />
      </div>
    </div>
  );
}

export default Hero;
