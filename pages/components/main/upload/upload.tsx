import React from "react";
import ModalHeader from "./ModalHeader";
import FileUpload from "./FileUpload"; // Import the FileUpload component





  interface UploadProps {
    className?: string; // The className prop is optional
    id?: string;
  }
  
  function Upload({ className, id }: UploadProps) {
    return (
    <div id={`${id || ''}`} className={`backdrop-blur-md bg-dark/50 w-full h-full z-50 absolute ${className || ''}`}>
        <div className="flex justify-center items-center pt-32">
            <div className="w-1/4 h-96 rounded-xl shadow-xl shadow-gray-800 bg-white flex flex-col items-center py-8">
            <ModalHeader/>
            <FileUpload />
            </div>
        </div>
        
    </div>
);
};

export default Upload;