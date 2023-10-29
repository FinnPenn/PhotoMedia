// /pages/components/Navbar.tsx
// import React, { useEffect } from 'react';
import Image from 'next/image'

const Hero: React.FC = () => {
         
      return (
        <div>
            <div className="w-screen h-auto z-10 absolute top-0">
                <div className='w-full h-full bg-[#030712]/50 absolute'></div>
                <Image className="w-full h-full" width={1920} height={1080} quality={100} sizes='100vw' src="/imgs/3.png" alt="1"/>
                <div className='absolute top-80 right-1/2 p-5'>
                    <div><h2 className='text-additional text-white text-9xl'>Headline</h2></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
