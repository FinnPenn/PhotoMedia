import React from "react";
import Navbar from "@/pages/layout/Navbar";

const Upload: React.FC = () => { return (
    <div>
        <Navbar/>
        <div className="flex justify-center items-center w-full h-full pt-32">
            <div className="grid grid-cols-4 grid-rows-2 gap-3">
                <div className="col-start-1 row-start-1">
                    <img className="w-96 aspect-video rounded-xl object-cover object-center" src="../imgs/1.png" draggable="false"/>
                </div>
                <div className="col-start-2 row-start-1">
                    <img className="w-96 aspect-video rounded-xl object-cover object-center" src="../imgs/2.png" draggable="false"/>
                </div>    
                <div className=" col-start-3 row-start-1">
                    <img className="w-96 aspect-video rounded-xl object-cover object-center" src="../imgs/3.png" draggable="false"/>
                </div>    
                <div className="col-start-4 row-start-1">
                    <img className="w-96 aspect-video rounded-xl object-cover object-center" src="../imgs/4.png" draggable="false"/>
                </div>    
                <div className="col-start-1 row-start-2">
                    <img className="w-96 aspect-video rounded-xl object-cover object-center" src="../imgs/5.png" draggable="false"/>
                </div>    
                <div className="col-start-2 row-start-2">
                    <img className="w-96 aspect-video rounded-xl object-cover object-center" src="../imgs/6.png" draggable="false"/>
                </div>    
                <div className="col-start-3 row-start-2">
                    <img className="w-96 aspect-video rounded-xl object-cover object-center" src="../imgs/7.png" draggable="false"/>
                </div>    
                <div className="rcol-start-4 row-start-2">
                    <img className="w-96 aspect-video rounded-xl object-cover object-center" src="../imgs/8.png" draggable="false"/>
                </div>        
                
            </div>
        </div>
    </div>
);
};

export default Upload;