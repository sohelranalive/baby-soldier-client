import { Link } from "react-router-dom";
import logo from '../../../assets/logo_transparent.png'
import { FaHome, FaFax } from "react-icons/fa";
import { IoIosMail, IoMdCall } from "react-icons/io";

const Footer = () => {
    return (

        <footer className="mt-20 bg-slate-50 shadow-inner">

            {/* Footer Main Section */}

            <div className="py-10 container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 px-2 justify-items-center gap-8">
                    {/* Logo and Name, small description */}
                    <div className="">
                        <Link to='/' className="flex justify-center md:justify-start">
                            <img src={logo} alt="logo" className="h-20 w-20" />
                        </Link>
                        <h6 className="text-3xl mt-2 mb-2 font-extrabold uppercase flex justify-center md:justify-start"><span className="text-[#F7CD2E]">Baby</span><span className="text-primary ms-2">Soldier</span></h6>
                        <p className="text-center md:text-justify px-4 md:px-0">This is basically a toy selling website. There is plenty of toys for kids but we are dealing with something so exciting.</p>
                    </div>
                    {/* <!-- Products section --> */}
                    <div className="pt-4">
                        <h6 className="mb-4 flex justify-center font-bold uppercase md:justify-start">
                            Products
                        </h6>
                        <p className="mb-4 flex justify-center md:justify-start">
                            <Link to='/' className="text-neutral-600 dark:text-neutral-200">
                                Gun Toys
                            </Link>
                        </p>
                        <p className="mb-4 flex justify-center md:justify-start">
                            <Link to='/' className="text-neutral-600 dark:text-neutral-200"
                            >Vehicle Toys</Link>
                        </p>
                        <p className="mb-4 flex justify-center md:justify-start">
                            <Link to='/' className="text-neutral-600 dark:text-neutral-200"
                            >Kids Fashion</Link>
                        </p>
                        <p className="flex justify-center md:justify-start">
                            <Link to='/' className="text-neutral-600 dark:text-neutral-200"
                            >Upcoming</Link>
                        </p>
                    </div>
                    {/* <!-- Useful links section --> */}
                    <div className="pt-4">
                        <h6 className="mb-4 flex justify-center font-bold uppercase md:justify-start">
                            Useful Links
                        </h6>
                        <p className="mb-4 flex justify-center md:justify-start">
                            <Link to='/allToys' className="text-neutral-600 dark:text-neutral-200">
                                All Toys
                            </Link>
                        </p>
                        <p className="mb-4 flex justify-center md:justify-start">
                            <Link to='/blog' className="text-neutral-600 dark:text-neutral-200"
                            >Blogs</Link>
                        </p>
                        <p className="mb-4 flex justify-center md:justify-start">
                            <Link to='/register' className="text-neutral-600 dark:text-neutral-200"
                            >Register</Link>
                        </p>
                        <p className="flex justify-center md:justify-start">
                            <Link to='/login' className="text-neutral-600 dark:text-neutral-200"
                            >Login</Link>
                        </p>
                    </div>
                    {/* <!-- Contact section --> */}
                    <div className="pt-4">
                        <h6
                            className="mb-4 flex justify-center font-bold uppercase md:justify-start">
                            Contact
                        </h6>
                        <p className="mb-4 flex items-center justify-center md:justify-start">
                            <FaHome className="mr-3 h-5 w-5" />
                            Dhaka-1207, Bangladesh
                        </p>
                        <p className="mb-4 flex items-center justify-center md:justify-start">
                            <IoIosMail className="mr-3 h-5 w-5" />
                            baby@soldier.com
                        </p>
                        <p className="mb-4 flex items-center justify-center md:justify-start">
                            <IoMdCall className="mr-3 h-5 w-5" />
                            + 88 017 735 440 75
                        </p>
                        <p className="flex items-center justify-center md:justify-start">
                            <FaFax className="mr-3 h-5 w-5" />
                            + 88 234 567 890 77
                        </p>
                    </div>

                </div>
            </div>

            {/* Copyright section */}
            <div className="py-6 text-center bg-[#cfb65a]">
                <span>© 2023 Copyright:</span>
                <Link to="https://www.linkedin.com/in/sohelranalive/" target="_blank"> Sohel Rana</Link>
            </div>
        </footer>

    );
};

export default Footer;