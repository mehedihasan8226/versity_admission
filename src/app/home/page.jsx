'use client'
import InstitutionInfo from '@/components/hompage/InstitutionInfo'
import UniversityInfo from '@/components/hompage/UniversityInfo'
import InputField from '@/components/InputField'
import SelectField from '@/components/SelectField'
import React, { useState } from 'react'

// type FormDataType = {
//   name: string;
//   email: string;
//   phone: string;
//   occupation: string;

// };


const page = () => {

  // const [formData, setFormData] = useState<FormDataType>({
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      occupation: '',
    });
  
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    };
  
    // const handleSubmit = (e: React.FormEvent) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
    };
  

  return (
    <>
    <InstitutionInfo />
      <UniversityInfo />

      <div className='w-full max-w-xl m-auto mt-16 mb-10'>
        <div className=''>
        <h3 className='text-center text-2xl font-semibold'>Get updates from DScE, DU</h3>
        <form onSubmit={handleSubmit} className="w-full grid grid-cols-2 gap-4">
          <InputField
          label="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Name"
          className="rounded-xl"
        />

        <div className="">
                  <SelectField
                    label="Occupation"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    options={[
                  
                      { value: 'student', label: 'Student' },
                      { value: 'teacher', label: 'Teacher' },
                      { value: 'gurdian', label: 'Gurdian' },
                    ]}
                  />
            </div>

          <InputField
          type='number'
          label="Mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
          placeholder="0132393232"
          className="rounded-xl"
        />

         <InputField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="type@email.com"
          className="rounded-xl"
        />

        <div className="flex justify-center col-span-2 mt-4 mb-2">
          <button
            type="submit"
            className="bg-[#1d9b59] p-2 rounded text-white cursor-pointer"
          >
            SUBMIT
          </button>
        </div>

        </form>
      </div>
       <div className='mt-12 flex flex-col items-center text-gray-600'>
              <p>Dhaka School of Economics</p>
              <p>Constituent Institute of University of Dhaka</p>
            </div>
      </div>
    </>
  )
}

export default page