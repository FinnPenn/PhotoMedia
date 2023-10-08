// /pages/components/Navbar.tsx
import React, { useEffect } from 'react';
import Image from 'next/image'

const CustomComponent: React.FC = () => {
    useEffect(() => {

        const track = document.getElementById("image-track")!;

        const handleOnDown = (e: MouseEvent): void => {
            track.dataset.mouseDownAt = e.clientX.toString();
        };

        const handleOnUp = (): void => {
            track.dataset.mouseDownAt = "0";
            track.dataset.prevPercentage = track.dataset.percentage;
            // console.log(track.dataset.prevPercentage);
        };

        const handleOnMove = (e: MouseEvent): void => {
            if (track.dataset.mouseDownAt === "0") return;

            const mouseDelta = parseFloat(track.dataset.mouseDownAt!) - e.clientX;
            const maxDelta = window.innerWidth / 2;

            // console.log(mouseDelta);
            // console.log(maxDelta);

            const percentage = (mouseDelta / maxDelta) * -100;
            // console.log(percentage);

            const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage!) + percentage;
            // console.log(nextPercentageUnconstrained);

            const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

            track.dataset.percentage = nextPercentage.toString();

            console.log(nextPercentage);

            track.animate(
                {
                    transform: `translate(${nextPercentage}%, -50%)`,
                },
                { duration: 1200, fill: "forwards" }
            );


            const images = Array.from(track.getElementsByClassName("image"));
                for (const image of images) {
                    image.animate(
                        {
                            objectPosition: `${100 + nextPercentage}% center`,
                        },
                        { duration: 1200, fill: "forwards" }
                    );
                }
        };

        /* -- Had to add extra lines for touch events -- */

        window.onmousedown = (e: MouseEvent): void => handleOnDown(e);

        // window.ontouchstart = (e: TouchEvent): void => handleOnDown(e.touches[0]);
       
         window.onmouseup = (e: MouseEvent): void => handleOnUp();

        // window.ontouchend = (e: TouchEvent): void => handleOnUp(e.touches[0]);

        window.onmousemove = (e: MouseEvent): void => handleOnMove(e);

        // window.ontouchmove = (e: TouchEvent): void => handleOnMove(e.touches[0]);



        /* -- open fullwidth modal -- */

        const imgs = document.getElementsByClassName("image")!;
        const modal = document.getElementById("modal")!;
        const modalImg = document.getElementById("modalImg") as HTMLImageElement;

        for (let i = 0; i < imgs.length; i++) {
            const img = imgs[i] as HTMLImageElement;

            img.onclick = () => {
                modal.style.display = "flex";
                modalImg.src = img.src;
            };
        }

        /* -- click on x in fullwidth modal -- */

        const closeModal = document.getElementById("closeModal")!;

        closeModal.onclick = function () {
            modal.style.display = "none";
        };
    }, []);

    return (
        <div>
            <div id="modal" className="hidden justify-center items-center absolute z-50 w-screen h-screen backdrop-blur-lg">
                <div className="relative w-3/4 h-auto aspect-video bg-black">
                    <div className="info-container">
                        <span id="closeModal" className="cursor-pointer self-end text-4xl pb-12" aria-hidden="true">&times;</span>
                        <h2>Bildüberschrift</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi delectus, eaque eligendi exercitationem facilis iure obcaecati quasi quo, rem rerum tempore velit voluptate.</p>
                        <span>Added at</span>
                    </div>
                    <img id="modalImg" src="" height="100%" width="100%" className="object-cover" />
                </div>
            </div>

            <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
                <Image className="image" alt="image 1" src="../imgs/1.png" draggable="false"/>
                <Image className="image" alt="image 2" src="../imgs/2.png" draggable="false"/>
                <Image className="image" alt="image 3" src="../imgs/3.png" draggable="false"/>
                <Image className="image" alt="image 4" src="../imgs/4.png" draggable="false"/>
                <Image className="image" alt="image 5" src="../imgs/5.png" draggable="false"/>
                <Image className="image" alt="image 6" src="../imgs/6.png" draggable="false"/>
                <Image className="image" alt="image 7" src="../imgs/7.png" draggable="false"/>
                <Image className="image" alt="image 8" src="../imgs/8.png" draggable="false"/>

                
            </div>
        </div>
    );
};

export default CustomComponent;
