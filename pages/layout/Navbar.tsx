import React, {useEffect, useState} from "react";
import Link from 'next/link'

const Upload: React.FC = () => {
    // const [style, setStyle] = useState("bg-none text-white");
    //
    // const btn_active = () => {
    //     setStyle("bg-white text-black p-2 rounded-xl");
    //     console.log('test');
    // };

    useEffect(() => {

        // const navItem = document.getElementsByClassName('nav-item');
        const checkSite = window.location.pathname;
        const home = document.getElementById('Home')!,
              upload = document.getElementById('Upload')!,
              media = document.getElementById('Media')!;
        // console.log(checkSite);


        if (checkSite === '/') {
            console.log('Home')
            home.classList.add("bg-white", "text-slate-900", "hover-link")
        }
        else if (checkSite === '/upload') {
            console.log('Upload')
            upload.classList.add("bg-white", "text-slate-900", "hover-link")
        }
        else if (checkSite === '/mediathek') {
            console.log('Mediathek');
            media.classList.add("bg-white", "text-slate-900", "hover-link")
        }
        else if (checkSite === '') {
            console.log('auch Home aber leer');
        }
        else {
            console.log('404')
        }


    }, []);

    return (
        <div className="relative z-10 w-full top-0">
            <ul className="flex justify-start items-center p-8 font-bold text-white">
                <li>
                    <div id="Home" className="h-10 w-24 flex justify-center items-center rounded-xl">
                        <Link href="/" className="nav-item">Home</Link>
                    </div>
                </li>
                <li>
                    <div id="Upload" className="h-10 w-24 flex justify-center items-center rounded-xl">
                        <Link href="/upload" className="">Upload</Link>
                    </div>
                </li>
                <li>
                    <div id="Media" className="h-10 w-24 flex justify-center items-center rounded-xl">
                        <Link href="/mediathek" className="nav-item">Mediathek</Link>
                    </div>
                </li>
            </ul>
        </div>
            );
};

export default Upload;