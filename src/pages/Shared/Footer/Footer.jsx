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
                            {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-5 w-5">
                                <path
                                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                <path
                                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                            </svg> */}
                            <FaHome className="mr-3 h-5 w-5" />
                            Dhaka-1207, Bangladesh
                        </p>
                        <p className="mb-4 flex items-center justify-center md:justify-start">
                            {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-5 w-5">
                                <path
                                    d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path
                                    d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg> */}
                            <IoIosMail className="mr-3 h-5 w-5" />
                            baby@soldier.com
                        </p>
                        <p className="mb-4 flex items-center justify-center md:justify-start">
                            {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-3 h-5 w-5">
                                <path

                                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                />
                            </svg> */}
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