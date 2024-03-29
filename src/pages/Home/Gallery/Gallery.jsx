import { useEffect } from 'react'
import image_1 from '../../../assets/gallery/img1.png'
import image_2 from '../../../assets/gallery/img2.png'
import image_3 from '../../../assets/gallery/img3.png'
import image_4 from '../../../assets/gallery/img4.png'
import image_5 from '../../../assets/gallery/img5.png'
import image_6 from '../../../assets/gallery/img6.png'
import image_7 from '../../../assets/gallery/img7.png'
import image_8 from '../../../assets/gallery/img8.png'
import image_9 from '../../../assets/gallery/img9.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            multiple: true,
        });
    }, []);


    return (
        <div className="mt-10 p-4">
            <h1 className="text-5xl font-extrabold text-[#F7CD2E] text-center">Our Happy Consumers</h1>
            <p className='text-3xl text-center text-primary font-semibold mt-4'>Some satisfied kids with our awesome products</p>

            <div className="md:flex md:flex-row md:space-x-4 space-x-0 md:space-y-0 space-y-4 mt-10">
                {/* <!-- First Col --> */}
                <div className="flex w-full flex-col space-y-4">
                    <div className="h-40 rounded-lg bg-red-500" data-aos="flip-left">
                        <img src={image_9} alt="" className='h-full w-full rounded-lg border-2 border-primary' />
                    </div>
                    <div className="h-40 rounded-lg bg-red-500" data-aos="flip-right">
                        <img src={image_1} alt="" className='h-full w-full rounded-lg border-2 border-[#F7CD2E]' />
                    </div>
                    <div className="h-60 rounded-lg bg-red-500" data-aos="flip-left">
                        <img src={image_2} alt="" className='h-full w-full rounded-lg border-2 border-primary' />
                    </div>
                </div>
                {/* <!-- Sec Col --> */}
                <div className="flex w-full flex-col space-y-4">
                    <div className="h-36 rounded-lg bg-blue-500" data-aos="flip-right">
                        <img src={image_3} alt="" className='h-full w-full rounded-lg border-2 border-[#F7CD2E]' />
                    </div>
                    <div className="h-64 rounded-lg bg-blue-500" data-aos="zoom-in">
                        <img src={image_4} alt="" className='h-full w-full rounded-lg border-2 border-primary' />
                    </div>
                    <div className="h-40 rounded-lg bg-blue-500" data-aos="flip-right">
                        <img src={image_5} alt="" className='h-full w-full rounded-lg border-2 border-[#F7CD2E]' />
                    </div>
                </div>
                {/* <!-- Third Col --> */}
                <div className="flex w-full flex-col space-y-4">
                    <div className="h-56 rounded-lg bg-green-500" data-aos="flip-left">
                        <img src={image_6} alt="" className='h-full w-full rounded-lg border-2 border-primary' />
                    </div>
                    <div className="h-40 rounded-lg bg-green-500" data-aos="flip-right">
                        <img src={image_7} alt="" className='h-full w-full rounded-lg border-2 border-[#F7CD2E]' />
                    </div>
                    <div className="h-44 rounded-lg bg-green-500" data-aos="flip-left">
                        <img src={image_8} alt="" className='h-full w-full rounded-lg border-2 border-primary' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;