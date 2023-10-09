import React from "react";
import Navbar from "@/pages/layout/Navbar";

const Upload: React.FC = () => { return (
    <div>
        <Navbar/>
        <div className="flex justify-center items-center pt-32">
            <div className="w-1/4 h-96 rounded-xl shadow-xl shadow-gray-800 bg-gray-200 flex flex-col items-center py-8">
                <h2 className="text-black pt-0 pb-4 my-0">Upload Images</h2>
                <div className="flex justify-center items-center flex-col border-2 border-black border-dashed w-3/4 aspect-square">
                    <p className="px-10 text-slate-800 text-md">Bilddatein in die makierte Fläche ziehen</p>
                    <div className="px-10 text-blue-600 text-lg hover:underline hover:decoration-blue-600 cursor-pointer">
                        <input type="file"/>
                        oder hier klicken

                        </div>
                </div>
                <span className="self-center text-black pt-2">.png, .jpg</span>
            </div>
        </div>
    </div>
);
};

export default Upload;