import React from "react";
import CustomComponent from './components/CustomComponent';
import Navbar from './layout/Navbar';

const Page: React.FC = () => { return (
     <div>
         <Navbar/>
        <CustomComponent />
    </div>
);
};

export default Page;