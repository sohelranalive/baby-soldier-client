import banner from '../../../assets/banner.jpg'

const Banner = () => {
    return (

        <div className='bg-purple-200'>
            <div className='md:flex shadow-xl py-6 px-4 container mx-auto'>
                <div className='md:w-1/2 h-[400px]'>
                    <img src={banner} alt="" className='w-full h-full' />
                </div>
                <div className='md:w-1/2 items-center p-8 space-y-6'>
                    <h1 className='text-6xl font-extrabold text-[#F7CD2E]'>Best Toy Gun Store & Supplier</h1>
                    <p className='text-3xl text-primary font-bold'>Children are like wet cement: whatever falls on them makes an impression. </p>
                    <button className="btn btn-primary">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;