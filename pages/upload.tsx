import React from "react";
import Navbar from "@/pages/layout/Navbar";

const Upload: React.FC = () => { return (
    <div>
        <Navbar/>
        <div className="flex justify-center items-center pt-32">
            <div className="w-1/4 h-96 rounded-xl shadow-xl shadow-gray-800 bg-white flex flex-col items-center py-8">
                {/* <h2 className="text-black pt-0 pb-4 my-0">Upload Images</h2> */}
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
            <div className="w-full flex justify-end">
                <div className="w-2/3 flex justify-between">
                <h2 className="text-black pt-0 my-0 flex justify-self-center">Upload Images</h2>
                <div className="flex justify-center items-center mr-8 text-sm space-x-2">
                    <div className="">←</div>
                    <p>1 / 2</p>
                    <div className="">→</div>
                </div>
                </div>
            </div>

                
            </div>
        </div>
    </div>
);
};

export default Upload;