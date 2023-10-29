import React from "react";
import Navbar from "@/pages/layout/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import ModalHeader from "../components/ModalHeader";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import FileUpload from "../components/FileUpload"; // Import the FileUpload component


function nextPage() {
    document.getElementById('formpage-1')!.style.display = "none";
    document.getElementById('formpage-2')!.style.display = "block";
    // document.getElementById('arrow-left')!.classList.remove = "hidden !important";
    document.getElementById('modal-pagination')!.innerHTML = "2 / 2";
  }
  
  function showDropdown() {
    const dropdown = document.getElementById('dropdown-content')!;
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none"
    }
    else {
        dropdown.style.display = "block"
    }
  }

  interface UploadProps {
    className?: string; // The className prop is optional
    id?: string;
  }
  
  function Upload({ className, id }: UploadProps) {
    return (
    <div id={`${id || ''}`} className={`bg-dark/90 w-full h-full z-50 absolute ${className || ''}`}>
        <div className="flex justify-center items-center pt-32">
            <div className="w-1/4 h-96 rounded-xl shadow-xl shadow-gray-800 bg-white flex flex-col items-center py-8">
            <ModalHeader/>
                <div id="formwrapper" className="flex justify-center items-center w-full h-full">
                    <form action="process_form.php" method="post" encType="multipart/form-data">
                        <div id="formpage-1" className="flex flex-col items-center space-y-4">
                            <div className="border-2 border-black border-dashed w-84 h-64 flex justify-center items-center flex-col space-y-10">
                                <p className="px-10 text-slate-800 text-md">Foto in die makierte Fläche ziehen</p>
                                <label className="cursor-pointer text-blue-600 text-lg hover:underline hover:decoration-blue-600" htmlFor="file">oder hier klicken</label><br/>
                                <input accept="image/x-png,image/gif,image/jpeg" name="file" id="file" type="file" hidden />
                            </div>
                            <div onClick={nextPage} className="w-84 h-8 border border-solid border-dark text-dark rounded-lg flex justify-center items-center cursor-pointer hover:bg-dark hover:text-white transition ease-in-out delay-150">Weiter</div>
                        </div>
                        <div id="formpage-2" className="hidden">
                            <label className="text-xl" htmlFor="title">Title:</label><br />
                            <input className="w-80 h-6 px-2" type="text" name="title" id="title" required />
                            <br /><br />

                            <label className="text-xl" htmlFor="description">Description:</label><br />
                            <textarea className="w-80 h-32 px-2" name="description" id="description" required />
                            <br /><br />

                        
                            <div className="flex space-x-4">
                                <div className="flex-col" onClick={showDropdown}>
                                    <div className="flex pointer-events-none items-center justify-center w-40 h-8 bg-transparent border border-dark border-solid rounded-lg">
                                        <p>Choose Category</p>
                                        <FontAwesomeIcon className="pl-2" size="xs" icon={faChevronDown}/>
                                    </div>
                                <div id="dropdown-content" className="hidden fixed w-40 h-auto pb-1 bg-white border border-solid border-dark rounded-b-lg">
                                    <p className="w-40 h-8 bg-white hover:bg-gray-200">Cyberpunk 2077</p>
                                    <p className="w-40 h-8 bg-white hover:bg-gray-200">AC: Mirage</p>    
                                </div> 
                            </div>
                            <input className="w-40 h-8 bg-dark border border-solid border-dark text-white font-bold rounded-lg flex justify-center items-center cursor-pointer" type="submit" value="Submit" />
                            <FileUpload />
                            </div>
                        </div>
                    </form>
                </div>
            
                
            </div>
        </div>
        
    </div>
);
};

export default Upload;