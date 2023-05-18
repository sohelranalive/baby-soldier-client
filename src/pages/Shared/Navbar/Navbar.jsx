import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import profilePhoto from '../../../assets/defaultProfilePhoto.png'
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'


const Navbar = () => {

    const { user, userLogOut } = useContext(AuthContext)

    const handleLogout = () => {
        userLogOut()
    }

    const menuLi = <>

        <li className='font-bold'><NavLink to='/' className={({ isActive }) => (isActive ? 'b-active' : 'b-default')}>Home</NavLink></li>
        <li className='font-bold'><NavLink to='/allToys' className={({ isActive }) => (isActive ? 'b-active' : 'b-default')}>All Toys</NavLink></li>
        <li className='font-bold'><NavLink to='/myToys' className={({ isActive }) => (isActive ? 'b-active' : 'b-default')}>My Toys</NavLink></li>
        <li className='font-bold'><NavLink to='/addToys' className={({ isActive }) => (isActive ? 'b-active' : 'b-default')}>Add a Toy</NavLink></li>
        <li className='font-bold'><NavLink to='/blog' className={({ isActive }) => (isActive ? 'b-active' : 'b-default')}>Blogs</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 border">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuLi}
                    </ul>
                </div>
                {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                <Link to='/'>
                    <img src={logo} alt="logo" className='h-[80px] w-[80px]' />
                </Link>
                <Link to='/'>
                    <h1 className='text-4xl font-extrabold'><span className='text-[#F7CD2E]'>Baby</span><span className='text-primary'> Soldier</span></h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuLi}
                </ul>
            </div>
            <div className="navbar-end">
                {user
                    ? <div className='flex items-center'>
                        <button onClick={handleLogout} className="btn btn-primary btn-sm mr-2">LogOut</button>
                        <div className='h-14 w-14 rounded-full border-4 border-primary'>
                            <img src={profilePhoto} alt="Profile Photo"
                                className="h-full w-full rounded-full"
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content={`Hello, ${user.displayName}`} />
                        </div>
                    </div>
                    : <Link to='/login' className="btn btn-primary btn-sm">Login</Link>
                }
                <Tooltip id="my-tooltip" />
            </div>
        </div>
    );
};

export default Navbar;