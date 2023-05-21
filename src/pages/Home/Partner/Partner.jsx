import amazonLogo from '../../../assets/company/aamzon.png'
import ebayLogo from '../../../assets/company/ebay.png'
import flipcartLogo from '../../../assets/company/flipkart.png'
import alibabaLogo from '../../../assets/company/alibaba.png'
import shopifyLogo from '../../../assets/company/shopify-logo-big.png'
import Marquee from "react-fast-marquee";

const Partner = () => {
    return (
        <div>
            <div>
                <h1 className="text-5xl font-extrabold text-[#F7CD2E] text-center">Our Happy Clients</h1>
                <p className='text-3xl text-center text-primary font-semibold mt-4'>See some satisfied clients with our products</p>
            </div>


            <div className="flex justify-center">
                <div className="marquee-container">
                    <Marquee>
                        <div className="child">
                            <img
                                src={alibabaLogo}
                                alt="Image 1"
                                className="w-24 h-24 object-contain mx-2"
                                style={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
                        </div>
                        <div className="child">
                            <img
                                src={amazonLogo}
                                alt="Image 2"
                                className="w-24 h-24 object-contain mx-2"
                                style={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
                        </div>
                        <div className="child">
                            <img
                                src={ebayLogo}
                                alt="Image 3"
                                className="w-24 h-24 object-contain mx-2"
                                style={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
                        </div>
                        <div className="child">
                            <img
                                src={flipcartLogo}
                                alt="Image 4"
                                className="w-24 h-24 object-contain mx-2"
                                style={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
                        </div>
                        <div className="child">
                            <img
                                src={shopifyLogo}
                                alt="Image 5"
                                className="w-24 h-24 object-contain mx-2"
                                style={{ maxWidth: '100%', maxHeight: '100%' }}
                            />
                        </div>
                    </Marquee>
                </div>
            </div>

        </div >
    );
};

export default Partner;