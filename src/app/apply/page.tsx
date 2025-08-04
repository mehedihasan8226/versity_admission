'use client'
import React, { useState } from 'react'
import InputField from '@/components/InputField'
import ImageUploader from '@/components/ImageUploader';
import SelectField from '@/components/SelectField';

const page = () => {

      const [hscAlimTechnicalCheck, setHscAlimTechnicalCheck] = useState<string>('yes')
      const [sscAlimTechnicalCheck,   setSscAlimTechnicalCheck] = useState<string>('yes')

      const [formData, setFormData] = useState({
            photo: null as File | null,
            signature: null as File | null,

            mobileNumber: '',
            GurdianNumber: '',
            english_fullName: '',
            bangla_fullName: '',
            english_fatherName: '',
            bangla_fatherName: '',
            english_motherName: '',
            bangla_motherName: '',
            dateOfBirth: '',
            gender: '',
            personalEmail: '',
            alternateEmail: '',
            nationalId: '',
            citizenship: '',
            birthCirtificate: '',
            presentAddress: '',
             presentDistrict: '',
            permanentAddress: '',
            permanentDistrict: '',
            localGurdianName: '',
            relationshipWithApplicant: '',
            localGurdianContactAddress: '',
            localGurdianPhoneNumber: '',

            sscDakhilTechnicalRoll: '',
            sscDakhilTechnicalRegistration: '',
            sscDakhilTechnialBoard: '',
            sscDakhilTechnialGroup: '',
            sdtinstitution:'',
            stdgradePoint: '',
            sdtpassingYear: '',
            hatinstitution: '',

            o_gradePoint: '',
            o_passingYear: '',
            o_institution: '',

            hscAlimTechnicalRoll: '',
            hscAlimTechnicalRegistration: '',
            hscDakhilTechnialBoard: '',
            hscDakhilTechnialGroup: '',
            hatgradePoint: '',
            hatpassingYear: '',
            hatInstitution: '',

            a_gradePoint: '',
            a_passingYear: '',
            a_institution: '',

            how_do_get: '',
          });


    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (file: File | null, name: string) => {
  setFormData((prevData) => ({
    ...prevData,
    [name]: file,
  }));
};


  return (
    <>
        <div className='w-full max-w-xl m-auto mb-10 mt-20'>
          <div className='flex flex-col items-center'>
            <p className='text-2xl font-semibold'>Dhaka School of Economics</p>
            <p className='text-2xl text-center font-semibold'>Constituent Institute of University of Dhaka</p>
            <p className='mt-7 text-2xl font-medium'>Application Form: Undergraduate Program</p>
          </div>
        <form className="space-y-4 flex flex-col mt-5 ">
          <div className='border border-gray-300 rounded-md p-2 shadow-md mb-5'>
            <div className='mt-4'>
              <p className='text-xs text-gray-400'>Undergraduate Program: Bachelor of Social Sciences (Honours)</p>
              <p className='text-sm text-gray-400'>Undergraduate Program: Bachelor of Social Sciences (Honours)</p>
              <hr className='border-dashed border-gray-400 mt-2' />
            </div>

          <div className='flex flex-col  md:flex-row'>
        
          <ImageUploader
            label=" Photo"
            name="photo"
             placeholderText={
                        <>
                          Passport size image
                          <br />
                          (300px * 300px)
                        </>
                      }
            onImageChange={handleImageChange}
            className='w-full'
            />

          <ImageUploader
            label="Signature"
             placeholderText="Image size 80px * 300px "
            name="signature"
            onImageChange={handleImageChange}
            className='w-full'
            />

      </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">

            <InputField
            label="Mobile Number for SMS"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
            placeholder='01711223344'
            className="rounded-xl"
          />
            <InputField
            label="Gurdian's Phone Number"
            name="GurdianNumber"
            value={formData.GurdianNumber}
            onChange={handleChange}
            required
            placeholder='01711223355'
            className="rounded-xl"
          />
          </div>

            <InputField
            label="Full Name (English)"
            name="english_fullName"
            value={formData.english_fullName}
            onChange={handleChange}
            required
            placeholder='Full Name'
            className="rounded-xl"
          />

              <InputField
            label="Full Name (Bangla)"
            name="bangla_fullName"
            value={formData.bangla_fullName}
            onChange={handleChange}
            required
            placeholder='Full Name'
            className="rounded-xl"
          />

              <InputField
            label="Father’s Name (English)"
            name="english_fatherName"
            value={formData.english_fatherName}
            onChange={handleChange}
            required
            placeholder="Father's Name"
            className="rounded-xl"
          />


              <InputField
            label="Father’s Name (Bangla"
            name="bangla_fatherName"
            value={formData.bangla_fatherName}
            onChange={handleChange}
            required
            placeholder="Father's Name"
            className="rounded-xl"
          />

              <InputField
            label="Mother's Name (English)"
            name="english_motherName"
            value={formData.english_motherName}
            onChange={handleChange}
            required
            placeholder='Mother Name'
            className="rounded-xl"
          />

          {/* <div className=''> */}
            <InputField
            label="Mother's Name (Bangla)"
            name="bangla_motherName"
            value={formData.bangla_motherName}
            onChange={handleChange}
            required
            placeholder='Mother Name'
            className="rounded-xl"
          />



          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
            <div className='mt-2'>

            <label htmlFor="" className='block -mb-6 text-sm text-gray-500'>
                  Date of Birth
                </label>
            <InputField
            type='date'
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
            className="rounded-xl"
          />

          </div>
            
            <SelectField
              label="Gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              options={[
            
                { value: 'male', label: 'Male' },
                { value: 'femail', label: 'Femail' },
                { value: 'other', label: 'Other' },
              ]}
            />


            <InputField
            label="Personal Email"
            name="personalEmail"
            value={formData.personalEmail}
            onChange={handleChange}
            required
            placeholder='personal@email.com'
            className="rounded-xl"
          />
            <InputField
            label="Alternate Email"
            name="alternateEmail"
            value={formData.alternateEmail}
            onChange={handleChange}
            required
            placeholder='alternate@email.com'
            className="rounded-xl"
          />
          
            <InputField
            label="National Id Number (if Available)"
            name="nationalId"
            value={formData.nationalId}
            onChange={handleChange}
            required
            placeholder='National Id '
            className="rounded-xl"
          />

            <InputField
            label="Citizenship"
            name="citizenship"
            value={formData.citizenship}
            onChange={handleChange}
            required
            placeholder='Citizenship'
            className="rounded-xl"
          />
          </div>
            <InputField
            label="Birth Cirtificate Number (if available)"
            name="birthCirtificate"
            value={formData.birthCirtificate}
            onChange={handleChange}
            required
            placeholder='Birth Cirtificate'
            className="rounded-xl"
          />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">

            <InputField
            label="Present Address"
            name="presentAddress"
            value={formData.presentAddress}
            onChange={handleChange}
            required
            placeholder='Present Address'
            className="rounded-xl"
          />
            <InputField
            label="District"
            name="presentDistrict"
            value={formData.presentDistrict}
            onChange={handleChange}
            required
            placeholder='District'
            className="rounded-xl"
          />
            <InputField
            label="Permanent Address"
            name="permanentAddress"
            value={formData.permanentAddress}
            onChange={handleChange}
            required
            placeholder='Permanent Address'
            className="rounded-xl"
          />
            <InputField
            label="District"
            name="permanentDistrict"
            value={formData.permanentDistrict}
            onChange={handleChange}
            required
            placeholder='District'
            className="rounded-xl"
          />
          
            <InputField
            label="Local Gurdian Name"
            name="localGurdianName"
            value={formData.localGurdianName}
            onChange={handleChange}
            required
            placeholder='Local Gurdian Name'
            className="rounded-xl"
          />

            <InputField
            label="Relationship with Applicant's"
            name="relationshipWithApplicant"
            value={formData.relationshipWithApplicant}
            onChange={handleChange}
            required
            placeholder='Relationship'
            className="rounded-xl"
          />
            <InputField
            label="Local Gurdian Contact Address"
            name="localGurdianContactAddress"
            value={formData.localGurdianContactAddress}
            onChange={handleChange}
            required
            placeholder='Local Gurdian Address'
            className="rounded-xl"
          />
            <InputField
            label="Local Gurdian's Phone Number"
            name="localGurdianPhoneNumber"
            value={formData.localGurdianPhoneNumber}
            onChange={handleChange}
            required
            placeholder='Local Gurdian Number'
            className="rounded-xl"
          />
          </div>

        </div>

          {/* ////////////////////////////// */}

          <div className='mt-5 border rounded-md border-gray-300 shadow-md p-2'>
            <div className='flex text-base justify-center gap-2'>
            <span>Study Level</span>

             <input
              type="radio"
              name="sscAlimTechnicalCheck"
              value="yes"
              checked={sscAlimTechnicalCheck === 'yes'}
              onChange={(e) => setSscAlimTechnicalCheck(e.target.value)}
            />

            <span>SSC/Dakhil/Technical</span>
            <input
                type="radio"
                name="sscAlimTechnicalCheck"
                value="no"
                checked={sscAlimTechnicalCheck === 'no'}
                onChange={(e) => setSscAlimTechnicalCheck(e.target.value)}
              />
            <span>o Level</span>
            </div>

          {
            sscAlimTechnicalCheck==='yes' && (<>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">

            <InputField
            label="SSC/Dakhil/Technical Roll"
            name="sscDakhilTechnicalRoll"
            value={formData.sscDakhilTechnicalRoll}
            onChange={handleChange}
            required
            placeholder='12383322'
            className="rounded-xl"
          />
            <InputField
            label="SSC/Dakhil/Technical Registration No"
            name="sscDakhilTechnicalRegistration"
            value={formData.sscDakhilTechnicalRegistration}
            onChange={handleChange}
            required
            placeholder='2339223'
            className="rounded-xl"
          />

            <SelectField
              label="SSC Dakhil Technial Board"
              name="sscDakhilTechnialBoard"
              value={formData.sscDakhilTechnialBoard}
              onChange={handleChange}
              options={[
            
                { value: 'dhaka', label: 'Dhaka' },
                { value: 'khulna', label: 'Khulna' },
                { value: 'sylhet', label: 'Sylhet' },
              ]}
            />

            <SelectField
              label="SSC Dakhil Technial Group"
              name="sscDakhilTechnialGroup"
              value={formData.sscDakhilTechnialGroup}
              onChange={handleChange}
              options={[
            
                { value: 'science', label: 'Science' },
                { value: 'commerce', label: 'Commerce' },
                { value: 'arts', label: 'Arts' },
              ]}
            />

            <InputField
            label="Grade Point"
            name="stdgradePoint"
            value={formData.stdgradePoint}
            onChange={handleChange}
            required
            placeholder='3.0'
            className="rounded-xl"
          />

          <SelectField
              label="SSC Dakhil Technial Passing Year "
              name="sdtpassingYear"
              value={formData.sdtpassingYear}
              onChange={handleChange}
              options={[
            
                { value: '2020', label: '2020' },
                { value: '2021', label: '2021' },
                { value: '2022', label: '2022' },
                { value: '2023', label: '2023' },
                { value: '2024', label: '2024' },
                { value: '2025', label: '2025' },
                
              ]}
            />
            
          </div>

            <InputField
            label="Institution"
            name="sdtinstitution"
            value={formData.sdtinstitution}
            onChange={handleChange}
            required
            placeholder='Institution'
            className="rounded-xl"
          />
            </>)}
          {/* O Level */}

          {
            sscAlimTechnicalCheck==='no' && (
              <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">

            <InputField
            label="Grade Point"
            name="o_gradePoint"
            value={formData.o_gradePoint}
            onChange={handleChange}
            required
            placeholder='3.0'
            className="rounded-xl"
          />

          <SelectField
              label="O Passing Year"
              name="o_passingYear"
              value={formData.o_passingYear}
              onChange={handleChange}
              options={[
            
                { value: '2020', label: '2020' },
                { value: '2021', label: '2021' },
                { value: '2022', label: '2022' },
                { value: '2023', label: '2023' },
                { value: '2024', label: '2024' },
                { value: '2025', label: '2025' },
              ]}
            />

          </div>
            <InputField
            label="Institution"
            name="o_institution"
            value={formData.o_institution}
            onChange={handleChange}
            required
            placeholder='Institution'
            className="rounded-xl"
          />
              </>
            )}

          </div>

          


          {/* ////////////////////////////// */}

          <div className='mt-5 border rounded-md border-gray-300 shadow-md p-2'>
            <div className='flex text-base justify-center gap-2'>
            <span>Study Level</span>
            <input
              type="radio"
              value='yes'
              checked={hscAlimTechnicalCheck==='yes'}
              onChange={(e) => setHscAlimTechnicalCheck(e.target.value)}
             
            />
            <span>HSC/Alim/Technical</span>
            
            <input
                type="radio"
                value='no'
                checked={hscAlimTechnicalCheck==='no'}
                onChange={(e) => setHscAlimTechnicalCheck(e.target.value)}
                
              />
            <span>A Level</span>
            </div>
          {
            hscAlimTechnicalCheck==='yes' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">

            <InputField
            label="HSC/Alim/Technical Roll"
            name="hscAlimTechnicalRoll"
            value={formData.hscAlimTechnicalRoll}
            onChange={handleChange}
            required
            placeholder='223221'
            className="rounded-xl"
          />
            <InputField
            label="HSC/Alim/Technical Registration No"
            name="hscAlimTechnicalRegistration"
            value={formData.hscAlimTechnicalRegistration}
            onChange={handleChange}
            required
            placeholder='232332'
            className="rounded-xl"
          />

            <SelectField
              label="hSC/Dakhil/Technial Board"
              name="hscDakhilTechnialBoard"
              value={formData.hscDakhilTechnialBoard}
              onChange={handleChange}
              options={[
            
                { value: 'dhaka', label: 'Dhaka' },
                { value: 'khulna', label: 'Khulna' },
                { value: 'sylhet', label: 'Sylhet' },
              ]}
            />

            <SelectField
              label="hSC/Dakhil/Technial Group"
              name="hscDakhilTechnialGroup"
              value={formData.hscDakhilTechnialGroup}
              onChange={handleChange}
              options={[
            
                { value: 'science', label: 'Science' },
                { value: 'commerce', label: 'Commerce' },
                { value: 'arts', label: 'Arts' },
              ]}
            />

            <InputField
            label="Grade Point"
            name="hatgradePoint"
            value={formData.hatgradePoint}
            onChange={handleChange}
            required
            placeholder='3.0'
            className="rounded-xl"
          />

          <SelectField
              label="HSC/Alim/Technical passingYear"
              name="hatpassingYear"
              value={formData.hatpassingYear}
              onChange={handleChange}
              options={[
            
                { value: '2020', label: '2020' },
                { value: '2021', label: '2021' },
                { value: '2022', label: '2022' },
                { value: '2023', label: '2023' },
                { value: '2024', label: '2024' },
                { value: '2025', label: '2025' },
              ]}
            />

          </div>

            <InputField
            label="Institution"
            name="hatinstitution"
            value={formData.hatinstitution}
            onChange={handleChange}
            required
            placeholder='Institution Name'
            className="rounded-xl"
          />

              </>
            )
          }
            

          {/* O Level */}

          {
             hscAlimTechnicalCheck==="no" && (
              <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">

            <InputField
            label="Grade Point"
            name="a_gradePoint"
            value={formData.a_gradePoint}
            onChange={handleChange}
            required
            placeholder='3.0'
            className="rounded-xl"
          />

          <SelectField
              label="A passing Year"
              name="a_passingYear"
              value={formData.a_passingYear}
              onChange={handleChange}
              options={[
            
                { value: '2020', label: '2020' },
                { value: '2021', label: '2021' },
                { value: '2022', label: '2022' },
                { value: '2023', label: '2023' },
                { value: '2024', label: '2024' },
                { value: '2025', label: '2025' },
              ]}
            />
           
          </div>
            <InputField
            label="Institution"
            name="a_institution"
            value={formData.a_institution}
            onChange={handleChange}
            required
            placeholder='Institution'
            className="rounded-xl"
          />
          
          {/* </div> */}
      
              </>
             )}

          


          {/* /////////////////////////////// */}

          <SelectField
              label="A passing Year"
              name="a_passingYear"
              value={formData.a_passingYear}
              onChange={handleChange}
              options={[
            
                { value: 'a_n_facebook_page', label: 'Applying Next - Facebook Page' },
                { value: 'u_facebook_page', label: 'University - Facebook Page' },
                { value: 'j_p_facebook_page', label: 'Joykoli Publications - Facebook Page' },
                { value: 'a_n_facebook_group', label: 'Applying Next - Facebook Group' },
                { value: 'o_facebook_group', label: 'Others - Facebook Group' },
               
              ]}
            />

          </div>

          <button type='submit'
            className='bg-[#1d9b59] py-1
             px-2 rounded text-white '
          > Submit Application & Go to Next Step for Payment </button>
        </form>
        </div>
    </>
  )
}

export default page