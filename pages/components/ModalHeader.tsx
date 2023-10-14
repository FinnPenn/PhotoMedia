
import React, { useEffect } from 'react';
// import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';

const ModalHeader: React.FC = () => {
         
      return (
            <div className="w-full flex justify-end pb-8">
                <div className="w-2/3 flex justify-between items-center">
                <h2 className="text-black pt-0 my-0 flex justify-self-center">Upload Images</h2>
                <div className="flex justify-center items-center mr-4 text-xs px-2 h-7 space-x-2 text-dark">
                    <FontAwesomeIcon className="px-2" icon={faArrowLeft} />
                    <p className="font-bold ">1 / 2</p>
                    <FontAwesomeIcon className="px-2" icon={faArrowRight} />
                </div>
                </div>
            </div> 
    );
};

export default ModalHeader;
