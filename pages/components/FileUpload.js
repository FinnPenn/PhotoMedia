import React, { useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";


const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Cyberpunk 2077"); // Initial value
  const [originalFileName, setOriginalFileName] = useState(""); // Add img name


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    var filename = e.target.files[0].name;
    document.getElementById('display-file').innerHTML = filename;
  };


  const handleInputChange = (e) => {
    if (e.target.name === "input1") {
      setInput1(e.target.value);
    } else if (e.target.name === "input2") {
      setInput2(e.target.value);
    } else {console.log("error404");}
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        await axios.post("http://localhost:5000/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        // Extract the original file name from the response and store it
        const originalFileName = response.data.originalFileName;
        setOriginalFileName(originalFileName);
        alert("File uploaded successfully");
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  const handleSaveData = async () => {
    try {
      // Ensure the file is uploaded before saving the data
      await handleUpload();

      // Now 'originalFileName' should be available
      const data = {
        input1,
        input2,
        category: selectedCategory,
        originalFileName: originalFileName,
      };

      // Proceed to save the data
      await axios.post("http://localhost:5000/saveData", data);
      alert("Data saved successfully");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };


  function catClicked(event) {
    var thisHtml = event.target.innerHTML;
    // console.log(thisHtml);
    document.getElementById('choosecat').innerHTML = thisHtml;
  }

  function nextPage() {
    document.getElementById('formpage-1').style.display = "none";
    document.getElementById('formpage-2').style.display = "block";
    // document.getElementById('arrow-left')!.classList.remove = "hidden !important";
    document.getElementById('modal-pagination').innerHTML = "2 / 2";
  }
  
  function showDropdown() {
    const dropdown = document.getElementById('dropdown-content');
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none"
    }
    else {
        dropdown.style.display = "block"
    }
  }


  return (


          <div id="formwrapper" className="flex justify-center items-center w-full h-full">
                    <form method="post" encType="multipart/form-data">
                        <div id="formpage-1" className="flex flex-col items-center space-y-4">
                            <div className="border-2 border-black border-dashed w-84 h-64 flex justify-center items-center flex-col space-y-10">
                                <p className="px-10 text-slate-800 text-md">Foto in die makierte Fläche ziehen</p>
                                <label htmlFor="file" className="cursor-pointer text-blue-600 text-lg hover:underline hover:decoration-blue-600">oder hier klicken</label><br/>
                                <p className="px-10 text-slate-800 text-md" id="display-file"></p>
                                <input name="file" id="file" type="file" accept=".jpg, .jpeg, .png" onChange={handleFileChange} hidden/>
                            </div>
                            <div onClick={nextPage} className="w-84 h-8 border border-solid border-dark text-dark rounded-lg flex justify-center items-center cursor-pointer hover:bg-dark hover:text-white transition ease-in-out delay-150">Weiter</div>
                        </div>
                        <div id="formpage-2" className="hidden">
                            <label className="text-xl" htmlFor="title">Title:</label><br />
                            <input 
                                className="w-80 h-6 px-2" 
                                type="text"
                                name="input1"
                                placeholder="Input 1"
                                value={input1}
                                onChange={handleInputChange} 
                                required
                            />
                            <br /><br />

                            <label className="text-xl" htmlFor="description">Description:</label><br />
                            <textarea 
                                className="w-80 h-32 px-2"  
                                type="text"
                                name="input2"
                                placeholder="Input 2"
                                value={input2}
                                onChange={handleInputChange} 
                                required 
                            />
                            <br /><br />

                        
                            <div className="flex space-x-4">
                                <div className="flex-col" onClick={showDropdown}>
                                    <div className="flex pointer-events-none items-center justify-center w-40 h-8 bg-transparent border border-dark border-solid rounded-lg">
                                        <p id="choosecat">Choose Category</p>
                                        <FontAwesomeIcon className="pl-2" size="xs" icon={faChevronDown}/>
                                    </div>
                                <div id="dropdown-content" className="hidden fixed w-40 h-auto pb-1 bg-white border border-solid border-dark rounded-b-lg">
                                    <div className="w-40 h-8 bg-white hover:bg-gray-200">
                                      <label onClick={catClicked}>Cyberpunk 2077</label>
                                      <input 
                                        type="button" 
                                      />
                                    </div>
                                    <div className="w-40 h-8 bg-white hover:bg-gray-200">
                                      <label onClick={catClicked}>AC: Mirage</label>
                                      <input 
                                        type="button" 
                                      />
                                    </div>
                                </div> 
                            </div>

                            <div className="radio-group">
                              <p>Choose Category:</p><br />

                              <input
                                type="radio"
                                name="category"
                                value="Cyberpunk 2077"
                                checked={selectedCategory === "Cyberpunk 2077"}
                                onChange={() => setSelectedCategory("Cyberpunk 2077")}
                              />
                              <label htmlFor="cyberpunk">Cyberpunk 2077</label><br />

                              <input
                                type="radio"
                                name="category"
                                value="AC: Mirage"
                                checked={selectedCategory === "AC: Mirage"}
                                onChange={() => setSelectedCategory("AC: Mirage")}
                              />
                              <label htmlFor="mirage">AC: Mirage</label><br />
                          </div>

                            <input  
                                onClick={() => { handleSaveData(); handleUpload(); }} 
                                className="w-40 h-8 bg-dark border border-solid border-dark text-white font-bold rounded-lg flex justify-center items-center cursor-pointer" 
                                type="submit" 
                                value="Submit" 
                            />

                            </div>
                        </div>
                    </form>
                </div> 




    
  );
};

export default FileUpload;