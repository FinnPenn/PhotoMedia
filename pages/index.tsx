import React from "react";
import Hero from './components/main/Hero';
import Navbar from './layout/Navbar';

const Page: React.FC = () => { return (
     <div>
         <Navbar/>
         <Hero />
    </div>
);
};

export default Page;