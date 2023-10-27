// FormTesting.tsx
import React, { useState, useEffect } from "react";

interface FormData {
  name: string;
  email: string;
  src: string;
  file: string;
  fileURL: string; // Add a new field to store the file URL
}

const FormTesting: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    src: "",
    file: "",
    fileURL: "", // Initialize the file URL field
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("formData");

    if (storedData) {
      setFormData(JSON.parse(storedData));
      setSubmitted(true);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];

      if (allowedTypes.includes(file.type)) {
        const reader = new FileReader();

        reader.onload = (event) => {
          setFormData({
            ...formData,
            file: event.target.result as string,
            fileURL: URL.createObjectURL(file), // Store the file URL
          });
        };

        reader.readAsDataURL(file);
      } else {
        alert("Please select a valid PNG or JPG file.");
        e.target.value = ""; // Clear the file input
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    setSubmitted(true);
  };

  const handleRemoveData = () => {
    localStorage.removeItem("formData");
    setFormData({
      name: "",
      email: "",
      src: "",
      file: "",
      fileURL: "",
    });
    setSubmitted(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
        {submitted ? (
          <div>
            <p className="text-green-500 text-center text-xl font-semibold">
              Form submitted successfully!
            </p>
            <div className="mt-4">
              <p className="text-gray-700 font-semibold">Submitted Data:</p>
              <p>Name: {formData.name}</p>
              <p>Email: {formData.email}</p>
              <p>Source (src): {formData.src}</p>
              {formData.fileURL && (
                <p>
                  File URL: <a href={formData.fileURL}>{formData.fileURL}</a>
                </p>
              )}
            </div>
            <button
              onClick={handleRemoveData}
              className="mt-4 w-full bg-red-500 text-white rounded-md py-2 font-semibold hover:bg-red-600"
            >
              Remove Data
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border-2 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border-2 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="src" className="block text-gray-700 font-semibold">
                Source (src):
              </label>
              <input
                type="text"
                id="src"
                name="src"
                value={formData.src}
                onChange={handleInputChange}
                className="w-full border-2 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="file" className="block text-gray-700 font-semibold">
                Upload File (PNG or JPG only):
              </label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleFileChange}
                accept=".jpg, .jpeg, .png" // Specify accepted file types
                className="w-full border-2 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-md py-2 font-semibold hover-bg-blue-600"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FormTesting;
