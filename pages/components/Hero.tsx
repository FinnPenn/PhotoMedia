// /pages/components/Navbar.tsx
// import React, { useEffect } from 'react';
import Image from 'next/image'

const CustomComponent: React.FC = () => {
         
      return (
        <div>
            <div className="w-screen">
                <Image className="w-full h-full" width={1920} height={1080} quality={100} sizes='100vw' src="/imgs/3.png" alt="1"/>
                <div className='absolute top-80 left-40 p-5'>
                    <div><h2 className='text-additional text-white text-9xl'>Headline</h2></div>
                </div>
            </div>
        </div>
    );
};

export default CustomComponent;
