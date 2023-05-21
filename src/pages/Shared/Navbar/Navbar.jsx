import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import profilePhoto from '../../../assets/defaultProfilePhoto.png'
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

const Navbar = () => {
    const notify = () => toast.success('Logout Successful', {
        position: "top-right",
        autoClose: 1000,
    });

    const { user, userLogOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {

        Swal.fire({
            title: 'Doy you really want to logout?',
            text: "You won't be able to use few features !",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                userLogOut()
                    .then(() => {
                        notify()
                        navigate('/')
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        })


    }

    const menuLi = <>
        <li className='font-bold'><NavLink to='/' className={({ isActive }) => (isActive ? 'b-active' : 'b-default')}>Home</NavLink></li>
        <li className='font-bold'><NavLink to='/allToys' className={({ isActive }) => (isActive ? 'b-active' : 'b-default')}>All Toys</NavLink></li>
        <li className='font-bold'><NavLink to='/myToys' className={({ isActive }) => (isActive ? 'b-active' : 'b-default')}>My Toys</NavLink></li>
        <li className='font-bold'><NavLink to='/addToys' className={({ isActive }) => (isActive ? 'b-active' : 'b-default')}>Add a Toy</NavLink></li>
        <li className='font-bold'><NavLink to='/blog' className={({ isActive }) => (isActive ? 'b-active' : 'b-default')}>Blogs</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 container mx-auto pr-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuLi}
                            <li>
                                {user
                                    ? <div className='flex items-center'>
                                        <button onClick={handleLogout} className="btn btn-primary btn-sm mr-2">LogOut</button>
                                        <div className='h-14 w-14 rounded-full border-4 border-primary hidden md:block'>
                                            <img src={user?.photoURL || profilePhoto} alt="Profile Photo"
                                                className="h-full w-full rounded-full"
                                                data-tooltip-id="my-tooltip"
                                                data-tooltip-content={`Hello, ${user?.displayName}`} />
                                        </div>
                                    </div>
                                    : <Link to='/login' className="btn btn-primary btn-sm hidden md:block">Login</Link>
                                }
                            </li>
                        </ul>
                    </div>
                    <Link to='/' className='hidden md:block'>
                        <img src={logo} alt="logo" className='h-[80px] w-[80px]' />
                    </Link>
                    <Link to='/' className='ms-2'>
                        <h1 className='text-4xl font-extrabold'><span className='text-[#F7CD2E]'>Baby</span><span className='text-primary'> Soldier</span></h1>
                    </Link>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuLi}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user
                        ? <div className='flex items-center'>
                            <button onClick={handleLogout} className="btn btn-primary btn-sm mr-2 hidden md:block">LogOut</button>
                            <div className='h-14 w-14 rounded-full border-4 border-primary'>
                                <img src={user?.photoURL || profilePhoto} alt="Profile Photo"
                                    className="h-full w-full rounded-full"
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content={`Hello, ${user?.displayName}`} />
                            </div>
                        </div>
                        : <Link to='/login' className="btn btn-primary btn-sm">Login</Link>
                    }
                    <Tooltip id="my-tooltip" />
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Navbar;