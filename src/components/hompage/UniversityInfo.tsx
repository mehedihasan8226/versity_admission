// components/UniversityInfo.tsx
import Image from 'next/image';
import versityFirstImg from '@/assets/versity-1.webp'
import { FaLongArrowAltRight } from 'react-icons/fa'


export default function UniversityInfo() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-12 max-w-6xl mx-auto">
            <div className="flex justify-center items-center space-x-6">
                <div>

                    <Image src={versityFirstImg} alt="DU Logo" width={150} height={100} />
                </div>
                <div>

                    <Image src={versityFirstImg} alt="DU Logo" width={150} height={100} />
                </div>

            </div>
            <div>
                <h2 className="text-4xl font-semibold mb-6">
                    The Lighthouse of Excellence in Education – University of Dhaka</h2>
                <p className="text-gray-700 mb-4 text-justify">
                    The University of Dhaka is one of the oldest and most prestigious institutions of higher education in Bangladesh and the Indian subcontinent. Established in 1921, it has been playing a leading role for over a century in fostering knowledge, research, and leadership in the country. Numerous eminent scholars, researchers, policymakers, and changemakers have emerged from this institution. Alongside academic excellence and research, the University of Dhaka continues to expand opportunities for practical knowledge and skill development through its various institutes and specialized bodies. In this pursuit, institutions like the Dhaka School of Economics (DScE) have become an integral part of the university’s academic framework, significantly contributing to the nation’s development.


                </p>
                <div className="space-y-3 mt-6">

                    <div className='flex justify-between items-center
            border border-green-700 px-5 py-2 text-green-700
            hover:border-green-900
           rounded transition cursor-pointer'>
                        <a href="#" className="">
                            UNIVERSITY OF DHAKA’S WEBSITE
                        </a>
                        <FaLongArrowAltRight />
                    </div>
                    <div className='flex justify-between items-center
            border border-green-700 px-5 py-2 text-green-700
            hover:border-green-900
           rounded transition cursor-pointer'>
                        <a href="#" className="">
                            LEARN MORE ABOUT THE UNIVERSITY OF DHAKA
                        </a>
                        <FaLongArrowAltRight />
                    </div>

                </div>
            </div>
        </section>
    );
}
