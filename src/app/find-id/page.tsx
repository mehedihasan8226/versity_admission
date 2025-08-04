'use client'

import React, { useState } from 'react'
import InputField from '@/components/InputField'

import paypal from '@/assets/paypal.png'
import Image from 'next/image'

const page = () => {

  const [formData, setFormData] = useState({
              phoneNumber: '',
              dateOfBirth: '',
     })

        const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className='w-full max-w-xl m-auto mt-16 mb-10'>
          <div className='flex flex-col justify-center gap-5 items-center'>
            <div className='self-start w-full mb-2'>
            <h3
            className='mb-4 pl-2 text-2xl '
            >Find Application ID</h3>
              <hr 
                className='border-gray-300'
              />
              </div>

              <div className='mt-7 border border-gray-300 rounded w-full flex flex-col items-center justify-center'>
                <p className='mt-7 mb-1 text-gray-600 w-11/12'>
                  If you have forgotten your Application ID, please submit your Mobile Number & Birth Date which you have submitted during making the application.
                </p>
                
                
              <form action="" className=' w-11/12' >
                
              <InputField
                label="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                placeholder='01711223355'
                className="rounded-xl"
              />

              <div className='mt-6'>

                <label htmlFor="" className='block -mb-4 text-sm text-gray-500'>
                  Date of Birth
                </label>

              <InputField
                type='date'
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                // placeholder='01711223355'
                className="rounded-xl "
              />
              </div>
          
                <div className='flex justify-center mt-4 mb-2'>

                    <button type='submit'
                    className='bg-[#1d9b59] 
                    p-2 rounded text-white cursor-pointer'
                  >SUBMIT</button>
                </div>
              </form>
              </div>

              <div className='mt-12 flex flex-col items-center text-gray-600'>
              <p>Dhaka School of Economics</p>
              <p>Constituent Institute of University of Dhaka</p>
            </div>
            </div>

        </div>

    </>
  )
}

export default page