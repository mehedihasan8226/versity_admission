// 'use client';

// import React, { useState, useEffect } from 'react';
// import { MdArrowDropDown } from 'react-icons/md';

// type Option = {
//   value: string;
//   label: string;
// };

// type SelectFieldProps = {
//   label: string;
//   name: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
//   options: Option[];
//   required?: boolean;
//   className?: string;
// };

// const SelectField: React.FC<SelectFieldProps> = ({
//   label,
//   name,
//   value,
//   onChange,
//   options,
//   required = false,
//   className = '',
// }) => {
//   const [isFocusedOrFilled, setIsFocusedOrFilled] = useState(false);

//   useEffect(() => {
//     setIsFocusedOrFilled(!!value); // float if value is selected
//   }, [value]);

//   const handleFocus = () => setIsFocusedOrFilled(true);
//   const handleBlur = () => {
//     if (!value) setIsFocusedOrFilled(false);
//   };

//   return (
//     <div className="relative w-full">
      
//       <label
//         htmlFor={name}
//         className={`absolute left-1 px-1 text-base bg-white transition-all duration-200 z-10 ${
//           isFocusedOrFilled ? 'top-1 text-green-700 text-sm' : 'top-6 text-gray-400 text-base'
//         }`}
//       >
//         {label}
//       </label>
//       <div>
      
//       </div>
//       <select
//         id={name}
//         name={name}
//         value={value}
//         onChange={onChange}
//         onFocus={handleFocus}
//         onBlur={handleBlur}
//         required={required}
//         className={`border-b-2 border-gray-300 outline-none w-full pt-6 px-1 bg-transparent appearance-none ${className}`}
//       >
//         {/* <option value="" disabled hidden>
//           Select {label}
//         </option> */}
//         {isFocusedOrFilled?options.map((opt) => (
//           <option key={opt.value} value={opt.value}>
//             {opt.label}
//           </option>
          
//         )):''}: 
        
//       </select>
    

//     </div>
//   );
// };

// export default SelectField;



'use client';

import React, { useState, useEffect } from 'react';
import { MdArrowDropDown } from 'react-icons/md';

type Option = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  required?: boolean;
  className?: string;
};

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
  className = '',
}) => {
  const [isFocusedOrFilled, setIsFocusedOrFilled] = useState(false);

  useEffect(() => {
    setIsFocusedOrFilled(!!value);
  }, [value]);

  const handleFocus = () => setIsFocusedOrFilled(true);
  const handleBlur = () => {
    if (!value) setIsFocusedOrFilled(false);
  };

  return (
    <div className="relative w-full">
      {/* Floating Label */}
      <label
        htmlFor={name}
        className={`absolute left-1 px-1 text-base bg-white transition-all duration-200 z-10 ${
          isFocusedOrFilled
            ? 'top-1 text-green-700 text-sm'
            : 'top-6 text-gray-400 text-base'
        }`}
      >
        {label}
      </label>

      {/* Select + Icon Container */}
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required={required}
          className={`border-b-2 border-gray-300 outline-none w-full pt-6 px-1 bg-transparent appearance-none ${className}`}
        >
          {/* <option value="" disabled hidden>
            Select {label}
          </option> */}
          {isFocusedOrFilled?options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          )):""}
        </select>

        {/* Dropdown Icon */}
        <MdArrowDropDown
          size={24}
          className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default SelectField;
