import { useState } from 'react';
import motorcycle from '../../../assets/vehicle/motorcycle.jpg'
import car from '../../../assets/vehicle/car.jpg'
import tank from '../../../assets/vehicle/tank.jpg'

const Upcoming = () => {

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div className="mt-10 p-4">
            <h1 className="text-5xl font-extrabold text-[#F7CD2E] text-center">New Addition - Vehicle</h1>
            <p className='text-3xl text-center text-primary font-semibold mt-4'>Coming Soon</p>
            <div className="mt-10">

                <div className="md:flex justify-between gap-4 space-y-4 md:space-y-0">
                    <div
                        className="md:w-1/3 h-96 relative rounded-md border border-[#F7CD2E]"
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src={motorcycle} alt="Image 1" className="w-full h-full rounded-md" />
                        {hoveredIndex === 1 && (
                            <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full h-full image-overlay rounded-md flex justify-center items-center">
                                <div>
                                    <h1 className='text-2xl font-bold'>Electric Motorcycle for Kids</h1>
                                    <p>Power: On Battery</p>
                                    <p>Backup: 2 hours on Full Charge</p>
                                    <p>Operate: Remote & On Driving</p>
                                    <p>Capacity: 2 kid, upto 30Kg</p>
                                    <p>Made in China</p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div
                        className="md:w-1/3 h-96 relative rounded-md border border-primary"
                        onMouseEnter={() => handleMouseEnter(2)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src={car} alt="Image 2" className="w-full h-full rounded-md" />
                        {hoveredIndex === 2 && (
                            <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full h-full image-overlay rounded-md flex justify-center items-center">
                                <div>
                                    <h1 className='text-2xl font-bold'>Electric Car for Kids</h1>
                                    <p>Power: On Battery</p>
                                    <p>Backup: 1 hours on Full Charge</p>
                                    <p>Operate: Remote & On Driving</p>
                                    <p>Capacity: 2 kid, upto 35Kg</p>
                                    <p>Made in Korea</p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div
                        className="md:w-1/3 h-96 relative rounded-md border border-[#F7CD2E]"
                        onMouseEnter={() => handleMouseEnter(3)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src={tank} alt="Image 3" className="w-full h-full rounded-md" />
                        {hoveredIndex === 3 && (
                            <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full h-full image-overlay rounded-md flex justify-center items-center">
                                <div>
                                    <h1 className='text-2xl font-bold'>Military Tank for Kids</h1>
                                    <p>Power: On Battery</p>
                                    <p>Backup: 1.5 hours on Full Charge</p>
                                    <p>Operate: Remote & On Driving</p>
                                    <p>Capacity: 2 kid, upto 30Kg</p>
                                    <p>Made in India</p>
                                </div>
                            </div>
                        )}
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Upcoming;