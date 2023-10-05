// /pages/components/CustomComponent.tsx
import React, { useEffect } from 'react';

const CustomComponent: React.FC = () => {
    useEffect(() => {
        const track = document.getElementById("image-track")!;

        const handleOnDown = (e: MouseEvent): void => {
            track.dataset.mouseDownAt = e.clientX.toString();
        };

        const handleOnUp = (): void => {
            track.dataset.mouseDownAt = "0";
            track.dataset.prevPercentage = track.dataset.percentage;
        };

        const handleOnMove = (e: MouseEvent): void => {
            if (track.dataset.mouseDownAt === "0") return;

            const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
            const maxDelta = window.innerWidth / 2;

            const percentage = (mouseDelta / maxDelta) * -100;
            const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
            const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

            track.dataset.percentage = nextPercentage.toString();

            track.animate(
                {
                    transform: `translate(${nextPercentage}%, -50%)`,
                },
                { duration: 1200, fill: "forwards" }
            );

            const images = track.getElementsByClassName("image");
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

        window.onmouseup = (e: MouseEvent): void => handleOnUp(e);

        // window.ontouchend = (e: TouchEvent): void => handleOnUp(e.touches[0]);

        window.onmousemove = (e: MouseEvent): void => handleOnMove(e);

        // window.ontouchmove = (e: TouchEvent): void => handleOnMove(e.touches[0]);



        /* -- open fullwidth modal -- */

        const imgs = document.getElementsByClassName("image")!;
        const modal = document.getElementById("modal")!;
        const modalImg = document.getElementById("modalImg")!;

        for (let i = 0; i < imgs.length; i++) {
            const img: Element = imgs[i];

            img.onclick = function () {
                modal.style.display = "flex";
                modalImg.src = this.src;
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
            <div className="absolute z-10 w-full">
                <ul className="flex justify-start items-center p-8 font-bold text-white">
                    <li>
                        <a href="upload.html" className="btn-primary">Upload</a>
                    </li>
                    <li>
                        <a href="mediathek.html" className="hover-link">Mediathek</a>
                    </li>
                </ul>
            </div>

            <div id="modal" className="hidden justify-center items-center relative z-50 w-screen h-screen backdrop-blur-lg">
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
                <img className="image" src="../imgs/1.png" draggable="false"/>
                <img className="image" src="../imgs/2.png" draggable="false"/>
                <img className="image" src="../imgs/3.png" draggable="false"/>
                <img className="image" src="../imgs/4.png" draggable="false"/>
                <img className="image" src="../imgs/5.png" draggable="false"/>
                <img className="image" src="../imgs/6.png" draggable="false"/>
                <img className="image" src="../imgs/7.png" draggable="false"/>
                <img className="image" src="../imgs/8.png" draggable="false"/>
            </div>
        </div>
    );
};

export default CustomComponent;
