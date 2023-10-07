import React, { useEffect } from "react";
import Navbar from "@/pages/layout/Navbar";


const Upload: React.FC = () => { 

    useEffect(() => {
        
        const hover_more = document.getElementById('hover_more')!,
              hover_items = document.getElementById('hover_items')!;

              hover_more.addEventListener("mouseover", (event) => {
                hover_items.style.display = "flex";
              });

              hover_more.addEventListener("mouseout", (event) => {
                hover_items.style.display = "none";
              });

    }, []);
    return (
    <div>
        <Navbar/>
        {/* <div className="flex justify-center items-center w-full h-full pt-32">
            <div className="grid grid-cols-4 grid-rows-2 gap-3">
                <div className="col-start-1 row-start-1 col-span-2 row-span-2">
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
        </div> */}
        <div className="flex justify-center items-center w-full h-full pt-32">
            <div className="grid grid-cols-2 grid-rows-1 w-5/6 h-auto gap-4 p-4">
                <img className="w-full h-full col-start-1 col-span-1 rounded-3xl" src="../imgs/1.png" />
                <div className="w-full h-full col-start-2 col-span-1 grid grid-cols-2 grid-rows-2 gap-2">
                    <img className="col-start-1 row-start-1 rounded-2xl object-cover h-full w-full bg-white" src="../imgs/2.png" alt="" />
                    <img className="col-start-1 row-start-2 rounded-2xl object-cover h-full w-full bg-white" src="../imgs/3.png" alt="" />
                    <img className="col-start-2 row-start-1 rounded-2xl object-cover h-full w-full bg-white" src="../imgs/4.png" alt="" />
                    <div id="hover_more" className="col-start-2 row-start-2 grid grid-cols-2 grid-rows-2 gap-1">
                        <div id="hover_items" className="hidden justify-center items-center col-start-1 rounded-xl col-span-2 row-start-1 row-span-2 h-full w-full bg-[#030712] opacity-75 blur-lg">
                            <h4>more ...</h4>
                        </div>
                        <img className="col-start-1 row-start-1 rounded-xl object-cover h-full w-full bg-white" src="../imgs/5.png" alt="" />
                        <img className="col-start-2 row-start-1 rounded-xl object-cover h-full w-full bg-white" src="../imgs/6.png" alt="" />
                        <img className="col-start-1 row-start-2 rounded-xl object-cover h-full w-full bg-white" src="../imgs/7.png" alt="" />
                        <img className="col-start-2 row-start-2 rounded-xl object-cover h-full w-full bg-white" src="../imgs/8.png" alt="" />
                    </div>
                </div>

            </div>
        </div>
    </div>
);
};

export default Upload;