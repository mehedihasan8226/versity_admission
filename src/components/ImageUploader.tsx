
// import React, { useRef, useState } from "react";
// import { IoClose } from "react-icons/io5";
// import { MdOutlineAttachFile } from "react-icons/md";
// import InputField from "./InputField"; 

// const ImageUploader = () => {
//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const [previewImage, setPreviewImage] = useState<string | null>(null);
//   const [imageName, setImageName] = useState<string | null>(null);

//   const handleClick = () => {
//     fileInputRef.current?.click();
//   };

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setPreviewImage(URL.createObjectURL(file));
//       setImageName(file.name);
//     }
//   };

//   const removeImage = () => {
//     setPreviewImage(null);
//     setImageName(null);
//     if (fileInputRef.current) {
//       fileInputRef.current.value = ""; 
//     }
//   };

//   return (
//     <div className="mt-3 flex flex-col justify-center items-center">
//       <div className="relative w-full max-w-md h-48">
//         {previewImage && (
//           <>
//             <img
//               src={previewImage}
//               alt="Uploaded"
//               className="w-full h-full object-cover rounded-xl border border-gray-300 shadow"
//             />
//             <button
//               onClick={removeImage}
//               className="absolute top-1 right-1 bg-white text-black rounded-full p-1 shadow hover:bg-red-500 hover:text-white transition"
//             >
//               <IoClose size={20} />
//             </button>
//           </>
//         )}
//       </div>

//       <div className="flex flex-col items-center justify-center border-gray-300 rounded-xl w-full max-w-md mx-auto shadow-sm">
//         <button
//           onClick={handleClick}
//           className="flex justify-center items-center gap-2"
//         >
//           <MdOutlineAttachFile className="mt-6 text-2xl" />
//           <InputField
//             label="Photo"
//             placeholder="Upload photo"
//             value={imageName || ""}
//           />
//         </button>
//         <input
//           type="file"
//           ref={fileInputRef}
//           accept="image/*"
//           className="hidden"
//           onChange={handleImageChange}
//         />
//       </div>
//     </div>
//   );
// };

// export default ImageUploader;


import React, { useRef, useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { MdOutlineAttachFile } from "react-icons/md";
import InputField from "./InputField";

type ImageUploaderProps = {
  label?: string;
  // onImageChange?: (file: File | null) => void;
   onImageChange?: (file: File | null, name: string) => void;
  initialImage?: string;
  name?: string;
  disabled?: boolean;
  className?:string
  placeholderText?:  React.ReactNode;
};

const ImageUploader: React.FC<ImageUploaderProps> = ({
  label = "Photo",
  onImageChange,
  initialImage = null,
  name,
  disabled = false,
  className='',
  placeholderText,
  
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(initialImage);
  const [imageName, setImageName] = useState<string | null>(null);

  useEffect(() => {
    setPreviewImage(initialImage);
  }, [initialImage]);

  const handleClick = () => {
    if (!disabled) fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
      setImageName(file.name);
      onImageChange?.(file,name!); 
    }
  };

  const removeImage = () => {
    setPreviewImage(null);
    setImageName(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    onImageChange?.(null,name!);
  };

  return (
    <div className="mt-3 flex flex-1 w-72 ml-2 flex-col justify-center items-center">
      <div className="relative w-full rounded-md border border-gray-300 max-w-md h-48">
        {
          !previewImage && (
            <div className="flex flex-col justify-center flex-wrap items-center h-full">
                <p className="text-center">{placeholderText}</p>
                
            </div>
          )
        }
        {previewImage && (
          <>
            <img
              src={previewImage}
              alt="Uploaded"
              className="w-full h-full  object-cover rounded-xl border border-gray-300 shadow"
            />
            <button
              onClick={removeImage}
              className="absolute top-1 right-1 bg-white text-black rounded-full p-1 shadow hover:bg-red-500 hover:text-white transition"
            >
              <IoClose size={20} />
            </button>
          </>
        )}
      </div>

      <div className="flex flex-col items-center justify-center border-gray-300 rounded-xl w-full max-w-md mx-auto shadow-sm">
        <button
          type="button"
          onClick={handleClick}
          className="flex justify-center items-center gap-2"
          disabled={disabled}
        >
          <MdOutlineAttachFile className="mt-6 text-2xl" />
          <InputField
            label={label}
            placeholder="Upload photo"
            value={imageName || ""}
            name={name}
            className=''
 
          />
        </button>
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
          
        />
      </div>
    </div>
  );
};

export default ImageUploader;
