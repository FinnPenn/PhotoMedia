// DisplayFormData.tsx
import React from "react";

interface FormData {
  name: string;
  email: string;
  src: string;
}

interface DisplayFormDataProps {
  formData: FormData;
}

const DisplayFormData: React.FC<DisplayFormDataProps> = ({ formData }) => {
  return (
    <div>
      <p className="text-gray-700 font-semibold">Displaying Form Data:</p>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Source (src): {formData.src}</p>
    </div>
  );
};

export default DisplayFormData;