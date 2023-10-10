// import React, {useEffect, useState} from "react";
import Link from 'next/link'

const Upload: React.FC = () => {
 

    return (
        <div className="bg-[#030712] text-white top-0 py-2 px-8">
            <div className="flex justify-between items-center">
                <div className="flex justify-start">
                    <div id="Home" className="justify-self-start h-10 w-24 flex justify-center items-center font-bold">
                        <Link href="/" className="nav-item">Home</Link>
                    </div>
                
                    <div id="Media" className="justify-self-start h-10 w-24 flex justify-center items-center font-bold">
                        <Link href="/mediathek" className="nav-item">Mediathek</Link>
                    </div>
                </div>

                <div id="Upload" className="justify-self-end h-9 w-20 rounded-lg flex justify-center items-center bg-white text-slate-800 font-bold">
                    <Link href="/upload" className="">Upload</Link>
                </div>
            
            </div>
        </div>
            );
};

export default Upload;