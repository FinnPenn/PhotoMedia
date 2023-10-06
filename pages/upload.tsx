import React from "react";
import Navbar from "@/pages/layout/Navbar";

const Upload: React.FC = () => { return (
    <div>
        <Navbar/>
        <div className="flex justify-center items-center pt-32">
            <div className="w-1/4 h-96 rounded-xl shadow-xl shadow-gray-800 bg-gray-200 flex flex-col items-center py-8">
                <h2 className="text-black pt-0 pb-4 my-0">Upload Images</h2>
                <div className="border-2 border-black border-dashed w-3/4 aspect-square"></div>
                <span className="self-center text-black pt-2">.png, .jpg</span>
            </div>
        </div>
    </div>
);
};

export default Upload;