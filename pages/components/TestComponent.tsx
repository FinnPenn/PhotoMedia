// /pages/components/Navbar.tsx
import React, { useEffect } from 'react';


const CustomComponent: React.FC = () => {
    useEffect(() => {
        const toggle = document.getElementById('toggle')!;

        toggle.onclick = function() {
            toggle.classList.add("toggle-animation");
        }

    }, []);

    return (
        <div>
            <div className="flex justify-center items-center h-full w-full">
                <div className="bg-slate-300 w-16 h-7 rounded-full p-1">
                    <div id="toggle" className="bg-slate-900 rounded-full h-7 w-7"></div>
                </div>
            </div>
        </div>
    );
};

export default CustomComponent;