// 'use client';

// import { useState } from 'react';
// import { PiPlaceholder } from 'react-icons/pi';

// export default function InputField({
//   label,
//   name,
//   type,
//   value,
//   onChange,
//   placeholder,
//   helpText,
//   required = false,
//   customPlaceholder, 
//   hideLabel = false,
//   className = '',
// }) {
//   const [value, setValue] = useState('');
//   const [touched, setTouched] = useState(false);

//   const isError = touched && value.trim() === '';

//   return (
//     <div className="relative mt-6 w-72">
//       <input
//         type={type}
//         id={name}
//         name={name}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         onBlur={() => setTouched(true)}
        
//         className={`
//           peer w-full border-0 border-b-2 bg-transparent text-sm text-gray-900
//           focus:outline-none focus:border-blue-600
//             transition-opacity duration-300
//             input-float
//           ${isError ? 'border-red-500' : 'border-gray-300'}
//         `}
        
//       />
//       <label
//         htmlFor="floating"
//         className={`
//           absolute left-0 top-1 text-sm text-gray-500 transition-all pointer-events-none
//           peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-600
//           ${value ? 'top-[-0.5rem] text-xs text-blue-600' : '-top-4'}
//         `}
//       >
//         Your Name
//       </label>
//       {isError && (
//         <p className="mt-1 text-xs text-red-500">This field is required</p>
//       )}
//     </div>
//   );
// }



'use client';

import { useState, FocusEvent } from 'react';

type InputFieldProps = {
  label?: string;
  name?: string;
  type?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  helpText?: string;
  required?: boolean;
  customPlaceholder?: boolean;
  hideLabel?: boolean;
  className?: string;
};

export default function InputField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  helpText,
  required = false,
  customPlaceholder = false,
  hideLabel = false,
  className = '',
}: InputFieldProps) {
  const [touched, setTouched] = useState(false);

  const isError = required && touched && value.trim() === '';

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setTouched(true);
  };

  return (
    <div className={`relative mt-6 w-full ${className}`}>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={handleBlur}
        className={`
          peer w-full border-0 border-b-2 bg-transparent text-sm text-gray-900
          focus:outline-none 
          transition-opacity duration-300
          input-float
          ${isError ? 'border-red-500' : 'border-gray-300'}
        `}
      />
      {!hideLabel && (
        <label
          htmlFor={name}
          className={`
            absolute left-0 top-1 text-sm text-gray-500 transition-all pointer-events-none
            peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-600
            ${value ? 'top-[-0.5rem] text-xs text-blue-600' : '-top-4'}
          `}
        >
          {label}
        </label>
      )}
      {isError && (
        <p className="mt-1 text-xs text-red-500">This field is required</p>
      )}
      {helpText && !isError && (
        <p className="mt-1 text-xs text-gray-500">{helpText}</p>
      )}
    </div>
  );
}
