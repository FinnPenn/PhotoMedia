import React, {useEffect, useState} from "react";

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
            home.classList.add("p-2", "bg-white", "text-black", "rounded-xl")
        }
        else if (checkSite === '/upload') {
            console.log('Upload')
            upload.classList.add("p-2", "bg-white", "text-black", "rounded-xl")
        }
        else if (checkSite === '/mediathek') {
            console.log('Mediathek');
            media.classList.add("p-2", "bg-white", "text-black", "rounded-xl")
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
                    <a id="Home" href="/" className="nav-item hover-link">Home</a>
                </li>
                <li>
                    <a id="Upload" href="/upload" className="nav-item hover-link">Upload</a>
                </li>
                <li>
                    <a id="Media" href="/mediathek" className="nav-item hover-link">Mediathek</a>
                </li>
            </ul>
        </div>
);
};

export default Upload;