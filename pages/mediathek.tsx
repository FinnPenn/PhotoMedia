import React, { useEffect } from "react";
import Navbar from "@/pages/layout/Navbar";
import TestComponent from "@/pages/components/TestComponent";

const Upload: React.FC = () => { 

    useEffect(() => {
        
        const hover_more = document.getElementById('hover_more')!,
              hover_items = document.getElementById('hover_items')!,
              show_more = document.getElementById('show_more')!,
              media_short = document.getElementById('media_short')!,
              media_more = document.getElementById('media_more')!;

              hover_more.addEventListener("mouseover", (event) => {
                hover_items.style.display = "flex";
              });

              hover_more.addEventListener("mouseout", (event) => {
                hover_items.style.display = "none";
              });

              show_more.addEventListener("click", (event) => {
                media_short.style.display = "none";
                media_more.style.display = "flex";
              });


    }, []);
    return (
    <div className="overflow-y-auto">
        <Navbar/>
        <h2 className="text-5xl px-20 pb-0 pt-4">Cyberpunk</h2>
        <div id="media_short" className="flex justify-center items-center w-full h-full pt-8">
            <div className="grid grid-cols-2 grid-rows-1 w-1/2 h-auto gap-4 p-4">
                <img className="w-full h-full aspect-square object-cover col-start-1 col-span-1 rounded-3xl" src="../imgs/1.png" />
                <div className="w-full h-full col-start-2 col-span-1 grid grid-cols-2 grid-rows-2 gap-2">
                    <img className="col-start-1 row-start-1 rounded-2xl aspect-square object-cover h-full w-full bg-white" src="../imgs/2.png" alt="" />
                    <img className="col-start-1 row-start-2 rounded-2xl aspect-square object-cover h-full w-full bg-white" src="../imgs/3.png" alt="" />
                    <img className="col-start-2 row-start-1 rounded-2xl aspect-square object-cover h-full w-full bg-white" src="../imgs/4.png" alt="" />
                    <div id="hover_more" className="col-start-2 row-start-2 grid grid-cols-2 grid-rows-2 gap-1">
                        <div id="hover_items" className="hidden justify-center items-center col-start-1 rounded-xl col-span-2 row-start-1 row-span-2 h-full w-full bg-[#030712] opacity-75">
                            <h4 id="show_more" className="cursor-pointer border border-solid border-white rounded-full px-2 py-1 hover:bg-white hover:transition-transform hover:text-[#030712]">mehr ...</h4>
                        </div>
                        <img className="col-start-1 row-start-1 rounded-xl aspect-square object-cover h-full w-full bg-white" src="../imgs/5.png" alt="" />
                        <img className="col-start-2 row-start-1 rounded-xl aspect-square object-cover h-full w-full bg-white" src="../imgs/6.png" alt="" />
                        <img className="col-start-1 row-start-2 rounded-xl aspect-square object-cover h-full w-full bg-white" src="../imgs/7.png" alt="" />
                        <img className="col-start-2 row-start-2 rounded-xl aspect-square object-cover h-full w-full bg-white" src="../imgs/8.png" alt="" />
                    </div>
                </div>

            </div>
        </div>

        <div id="media_more" className="hidden justify-center items-center w-full h-full pt-8">
            <div className="grid grid-cols-2 grid-rows-1 w-1/2 h-auto gap-4 p-4">
                <div className="w-full h-full col-start-1 col-span-1 grid grid-cols-2 grid-rows-2 gap-4">
                    <img className="col-start-1 row-start-1 rounded-2xl aspect-square object-cover h-full w-full bg-white" src="../imgs/1.png" alt="" />
                    <img className="col-start-2 row-start-1 rounded-2xl aspect-square object-cover h-full w-full bg-white" src="../imgs/2.png" alt="" />
                    <img className="col-start-1 row-start-2 rounded-2xl aspect-square object-cover h-full w-full bg-white" src="../imgs/3.png" alt="" />
                    <img className="col-start-2 row-start-2 rounded-2xl aspect-square object-cover h-full w-full bg-white" src="../imgs/4.png" alt="" />
                </div>
                <div className="w-full h-full col-start-2 col-span-1 grid grid-cols-2 grid-rows-2 gap-4">
                    <img className="col-start-1 row-start-1 rounded-2xl aspect-square object-cover h-full w-full bg-white" src="../imgs/5.png" alt="" />
                    <img className="col-start-2 row-start-1 rounded-2xl aspect-square object-cover h-full w-full bg-white" src="../imgs/6.png" alt="" />
                    <img className="col-start-1 row-start-2 rounded-2xl aspect-square object-cover h-full w-full bg-white" src="../imgs/7.png" alt="" />
                    <img className="col-start-2 row-start-2 rounded-2xl aspect-square object-cover h-full w-full bg-white" src="../imgs/8.png" alt="" />
                </div>

            </div>
        </div>
        <h2 className="text-5xl px-20 pb-0 pt-4">Assasins Creed: Mirage</h2>
        
        {/* <TestComponent/> */}
    </div>
);
};

export default Upload;