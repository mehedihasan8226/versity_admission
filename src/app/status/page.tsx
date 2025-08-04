'use client'

import React, { useState } from 'react'
import InputField from '@/components/InputField'

import paypal from '@/assets/paypal.png'
import Image from 'next/image'

const page = () => {

  const [applicationId, setApplicationId] = useState<number | null>(null)

  return (
    <>
      <div className='w-full max-w-md m-auto mt-14 mb-10'>
          <div className='flex flex-col justify-center gap-5 items-center'>
            <div className='self-start w-full mb-2'>
            <h3
            className='mb-3 pl-2 text-2xl '
            >Application Status</h3>
              <hr 
                className='border-gray-300'
              />
              </div>

            

              <div className='mt-3 border  border-gray-300 rounded w-full flex flex-col items-center justify-center'>
                <p className='mt-7 mb-2 text-gray-500 text-center'>
                  To know about your current Application Status, please find your status after submitting your
                </p>
                <p className='text-center'>Application ID</p>
              
              <form action="" className=' w-11/12' >
                
                <InputField
                label="Application ID"
                name="applicationId"
                value={applicationId === null ? '' : applicationId.toString()}
              
                onChange={(e) => {
                    const rawValue = e.target.value;
                    const numericValue = rawValue.replace(/[^0-9]/g, '');

                    if (numericValue === '') {
                        setApplicationId(null);
                    } else {
                        setApplicationId(Number(numericValue));
                    }
                }}
                required
                placeholder='01711223344'
                className="rounded-xl  "
            />
          
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