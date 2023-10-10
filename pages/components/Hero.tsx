// /pages/components/Navbar.tsx
// import React, { useEffect } from 'react';
import Image from 'next/image'

const CustomComponent: React.FC = () => {
         
      return (
        <div>
            <div className="w-screen h-[calc(100vh-6vh)]">
                <Image className="w-full h-full" width={1920} height={1080} src="/imgs/1.png" alt="1"/>
            </div>
        </div>
    );
};

export default CustomComponent;
