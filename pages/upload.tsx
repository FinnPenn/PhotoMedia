import React from "react";
import Navbar from "@/pages/layout/Navbar";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import ModalHeader from "./components/ModalHeader";


const Upload: React.FC = () => { return (
    <div>
        <Navbar/>
        <div className="flex justify-center items-center pt-32">
            <div className="w-1/4 h-96 rounded-xl shadow-xl shadow-gray-800 bg-white flex flex-col items-center py-8">
            <ModalHeader/>
                
                {/* <div className="flex justify-center items-center flex-col border-2 border-black border-dashed w-3/4 aspect-square ">
                    <div className="px-10 cursor-pointer">
                    <p className="px-10 text-slate-800 text-md">Bilddatein in die makierte Fläche ziehen</p>
                    <form action="process_form.php" method="post" encType="multipart/form-data">
                        
                        <label className="cursor-pointer text-blue-600 text-lg hover:underline hover:decoration-blue-600" htmlFor="file">oder hier klicken</label><br/>
                        <input accept="image/x-png,image/gif,image/jpeg" name="file" id="file" type="file" hidden />
                        
                    
                        <label htmlFor="title">Title:</label><br />
                        <input type="text" name="title" id="title" required />
                        <br />

                        <label htmlFor="description">Description:</label><br />
                        <textarea name="description" id="description" required />
                        <br />

                        <input type="submit" value="Submit" />
                    </form>

                    </div>
                </div> */}
                <div id="formwrapper" className="flex justify-center items-center w-full h-full">
                    <form action="process_form.php" method="post" encType="multipart/form-data">
                        <div id="formpage-1" className="hidden flex-col items-center space-y-4">
                            <div className="border-2 border-black border-dashed w-96 h-64 flex justify-center items-center flex-col space-y-10">
                                <p className="px-10 text-slate-800 text-md">Bilddatein in die makierte Fläche ziehen</p>
                                <label className="cursor-pointer text-blue-600 text-lg hover:underline hover:decoration-blue-600" htmlFor="file">oder hier klicken</label><br/>
                                <input accept="image/x-png,image/gif,image/jpeg" name="file" id="file" type="file" hidden />
                            </div>
                            <div className="w-80 h-8 border border-solid border-dark text-dark rounded-lg flex justify-center items-center">Weiter</div>
                        </div>
                        <div id="formpage-2">
                            <label className="text-xl" htmlFor="title">Title:</label><br />
                            <input className="w-80 h-6 px-2" type="text" name="title" id="title" required />
                            <br /><br />

                            <label className="text-xl" htmlFor="description">Description:</label><br />
                            <textarea className="w-80 h-32 px-2" name="description" id="description" required />
                            <br /><br />

                            <input className="w-84 h-8 bg-transparent border border-solid border-dark text-dark rounded-lg flex justify-center items-center" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            
                
            </div>
        </div>
    </div>
);
};

export default Upload;