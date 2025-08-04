'use client'

import React, { useState } from 'react'
import InputField from '@/components/InputField'

import paypal from '@/assets/paypal.png'
import Image from 'next/image'
import SelectField from '@/components/SelectField'



type FormDataType = {
  name: string;
  email: string;
  area: string;
  phone: string;
  applicationId: string;
  problemType: string;
  message: string;
};


const page = () => {

   const [formData, setFormData] = useState<FormDataType>({
    name: '',
    email: '',
    area: '',
    phone: '',
    applicationId: '',
    problemType: 'website',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <div className='w-full max-w-xl m-auto mt-16 mb-10'>
          <div className='flex flex-col justify-center gap-5 items-center'>
            <div className='self-start w-full mb-2'>
            <h3
            className='mb-4 pl-2 text-2xl '
            >Talk with Us</h3>
              <hr 
                className='border-gray-300'
              />
              </div>

                <p className='mt-7 mb-1 text-gray-600 w-full'>
                    If you want to 
                    know any information about the institution, 
                    please fill out the form below.                
                </p>
                                    
                
        <form onSubmit={handleSubmit} className="w-full">
        <InputField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Name"
          className="rounded-xl"
        />
        <InputField
          type="email"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email"
          className="rounded-xl"
        />
        <InputField
          label="Area"
          name="area"
          value={formData.area}
          onChange={handleChange}
          required
          placeholder="Area"
          className="rounded-xl"
        />
        <InputField
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Phone"
          className="rounded-xl"
        />
        <InputField
          label="Application ID"
          name="applicationId"
          value={formData.applicationId}
          onChange={handleChange}
          required
          placeholder="3292393"
          className="rounded-xl"
        />

        <div className="mt-5 w-full">
          <SelectField
            label="Problem Type"
            name="problemType"
            value={formData.problemType}
            onChange={handleChange}
            options={[
          
              { value: 'website', label: 'About Website' },
              { value: 'application', label: 'About Application' },
              { value: 'payment', label: 'About Payment' },
              { value: 'image_submit', label: 'Image Submit' },
            ]}
          />
    </div>


  <div className="relative mt-7">
  <textarea
    name="message"
    id="message"
    value={formData.message}
    onChange={handleChange}
    placeholder=" " 
    className="peer outline-none border-b-2 w-full h-36 pt-6 px-1 bg-transparent"
  />
  <label
    htmlFor="message"
    className="absolute left-1 top-3 text-gray-500 text-sm transition-all duration-200 ease-in-out
      peer-placeholder-shown:top-6 peer-placeholder-shown:text-base
      peer-placeholder-shown:text-gray-400
      peer-focus:top-3 peer-focus:text-sm peer-focus:text-green-700"
  >
    Message
  </label>
</div>


        <div className="flex justify-center mt-4 mb-2">
          <button
            type="submit"
            className="bg-[#1d9b59] p-2 rounded text-white cursor-pointer"
          >
            SUBMIT
          </button>
        </div>
      </form>
              </div>

              <div className='mt-12 flex flex-col items-center gap-3  text-gray-600'>
              <p className='text-center'>The authority will contact you via mobile or email within three working hours after 
                the form is successfully submitted.</p>
              <p className='text-center'>Please send a message to the mentioned WhatsApp 
                number: <span className='text-green-700 font-semibold'>+8801333387797</span> or the Facebook Page of</p>
                <p className='mt-7 font-semibold'>‘Applying Next’.</p>
            </div>
            </div>


    </>
  )
}

export default page