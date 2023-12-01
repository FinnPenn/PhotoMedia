import Link from 'next/link'
import Upload from '../components/main/upload/upload';


function toggleupload() {
    const upload = document.getElementById('upload')!;
    if (upload.style.display === "block") {
        upload.style.display = "none"
    }
    else {
        upload.style.display = "block"
    }
  }


const Navbar: React.FC = () => {
 
    return (
        <div>
            <div className="bg-dark relative z-50 text-white top-0 py-5 px-8">
                <div className="flex justify-between items-center">
                    <div className="flex justify-start">
                        <div id="Home" className="justify-self-start h-10 w-24 flex justify-center items-center font-bold">
                            <Link href="/" className="nav-item">Home</Link>
                        </div>
                    
                        <div id="Media" className="justify-self-start h-10 w-24 flex justify-center items-center font-bold">
                            <Link href="/mediathek" className="nav-item">Mediathek</Link>
                        </div>
                    </div>

                    <div onClick={toggleupload} id="Upload" className="justify-self-end h-9 w-20 rounded-lg flex justify-center items-center bg-white text-slate-800 font-bold">
                        <p className="cursor-pointer">Upload</p>
                    </div>
                
                </div>           
            </div>

            <Upload id="upload" className="hidden"/>
        
        </div>
            );
};

export default Navbar;