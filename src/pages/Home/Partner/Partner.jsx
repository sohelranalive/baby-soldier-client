import amazonLogo from '../../../assets/company/aamzon.png'
import ebayLogo from '../../../assets/company/ebay.png'
import flipcartLogo from '../../../assets/company/flipkart.png'
import alibabaLogo from '../../../assets/company/alibaba.png'
import shopifyLogo from '../../../assets/company/shopify-logo-big.png'
import Marquee from "react-fast-marquee";

const Partner = () => {
    return (
        <div className='mt-20 px-4'>
            <div className='container mx-auto'>
                <div className='px-4'>
                    <h1 className="text-5xl font-extrabold text-[#F7CD2E] text-center">Our Partners</h1>
                    <p className='text-3xl text-center text-primary font-semibold mt-4'>Some of the worlds leading e-commerce companies are our wholesale buyers</p>
                </div>


                <div className="flex justify-center mt-4 px-4">
                    <div className="marquee-container">
                        <Marquee>
                            <div>
                                <img
                                    src={alibabaLogo}
                                    alt="Image 1"
                                    className="w-40 h-32 object-contain mx-8"
                                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                                />
                            </div>
                            <div>
                                <img
                                    src={amazonLogo}
                                    alt="Image 2"
                                    className="w-40 h-32 object-contain mx-8"
                                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                                />
                            </div>
                            <div>
                                <img
                                    src={ebayLogo}
                                    alt="Image 3"
                                    className="w-40 h-32 object-contain mx-8"
                                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                                />
                            </div>
                            <div>
                                <img
                                    src={flipcartLogo}
                                    alt="Image 4"
                                    className="w-40 h-32 object-contain mx-8"
                                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                                />
                            </div>
                            <div>
                                <img
                                    src={shopifyLogo}
                                    alt="Image 5"
                                    className="w-40 h-32 object-contain mx-8"
                                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                                />
                            </div>
                        </Marquee>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Partner;