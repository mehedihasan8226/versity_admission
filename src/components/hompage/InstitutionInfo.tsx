// components/InstitutionInfo.tsx
import Image from 'next/image';
import versityFirstImg from '@/assets/versity-1.webp'
import { FaLongArrowAltRight } from 'react-icons/fa'


export default function InstitutionInfo() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-2 px-4 py-12 max-w-6xl mx-auto">
            <div>
                <h1 className="text-4xl font-semibold mb-7">DScE, DU</h1>
                <p className="text-gray-700 mb-4 text-justify">
                    DScE, DU
                    Dhaka School of Economics (DScE) is a specialized higher education and research institution under the Faculty of Social Sciences at the University of Dhaka. Established in 2010 following the model of the London School of Economics, DScE focuses on building skilled professionals not only in economics but also in development, entrepreneurship, environment, and public policy. Its academic journey began in 2012 with a Postgraduate Diploma course. Currently, it offers Bachelor's and Master's level programs, with proposed research-based MPhil and PhD tracks.DScE is committed not just to academic excellence but also to contributing to national development through evidence-based research and policy analysis. To support this, it has established a comprehensive Socio-Economic Data Bank that plays a key role in informing public policy. At DScE, students don’t just earn degrees, they evolve into future thinkers, researchers, and change-makers.

                </p>
                <div className="space-y-3 mt-6">
                    <div className='flex justify-between items-center
            border border-green-700 px-5 py-2 text-green-700
            hover:border-green-900
           rounded transition cursor-pointer'>
                        <a href="#" className=" ">
                            INSTITUTION PORTAL
                        </a>
                        <FaLongArrowAltRight />
                    </div>
                    <div className='flex justify-between items-center
            border border-green-700 px-5 py-2 text-green-700
            hover:border-green-900
           rounded transition cursor-pointer'>
                        <a href="#" className="">
                            CAMPUS LIFE
                        </a>
                        <FaLongArrowAltRight />
                    </div>

                    <div className='flex justify-between items-center
            border border-green-700 px-5 py-2 
            bg-green-700 text-white
           rounded transition cursor-pointer'>
                        <a href="#" className="">
                            APPLY DScE, DU
                        </a>
                        <FaLongArrowAltRight />

                    </div>
                </div>
            </div>
            <div className="flex justify-center items-start mt-16">
                <Image
                    src={versityFirstImg}
                    alt="DScE Logo"
                    width={250}
                    height={200}
                />
            </div>
        </section>
    );
}
