import Lottie from 'lottie-react-web';
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import animationData from '../../../public/astronauta.json';
import { HiLogin, HiLogout } from "react-icons/hi";
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-hot-toast';
const NavbarTop = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut().then(data => toast.success('Successfully logged out')).catch(err => toast.error(err.message))
    }

    const menu = <>
        <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'active' : 'default'}>Home </NavLink>
        </li>
        <li><NavLink to={'/allToys'} className={({ isActive }) => isActive ? 'active' : 'default'}> All Toys</NavLink>
        </li>
        {user ? <>
            <li><NavLink to={`/myToys`} className={({ isActive }) => isActive ? 'active' : 'default'}>My Toys</NavLink>
            </li>
            <li><NavLink to={'/addToys'} className={({ isActive }) => isActive ? 'active' : 'default'}>Add A Toy</NavLink>
            </li>
        </> : ''

        }

        <li><NavLink to={'/blog'} className={({ isActive }) => isActive ? 'active' : 'default'}>Blogs</NavLink>
        </li>
    </>
    return (
        <div>
            <div className="navbar bg-transparent">
                <div className="navbar-start">
                    <div className="dropdown">
                        {/* responsive nav btn */}
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        {/* Menue */}
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 lg:hidden">
                            {menu}
                        </ul>
                    </div>
                    {/* Logo */}
                    <Link to="/" className=" normal-case text-3xl fontB h-20 flex  items-center">
                        <Lottie className=""
                            options={{
                                animationData: animationData,
                                loop: true,
                                autoplay: true,
                            }}
                        />
                        GameToyEmporium</Link>
                </div>
                {/* Menue for large device */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>
                {/* Right Side elements */}
                <div className="navbar-end">
                    {
                        !user ? <Link to={'/login'} className="btn btn-outline bg-gray-300 text-black text-lg font-semibold fontA  rounded-full  md:px-7"><span className='mr-2'>Login</span>  <HiLogin /></Link> : <>
                            <div className="tooltip tooltip-bottom lg:tooltip-left" data-tip={user?.displayName}>
                                <img className='h-10 w-10 rounded-full border-2 border-slate-700 ml-2' src={user?.photoURL} alt="" />
                            </div>
                            <Link onClick={handleLogout} to={'/login'} className="btn btn-outline bg-gray-300 text-black text-lg font-semibold fontA  rounded-full  md:px-7"><span className='mr-2'>Logout</span>  <HiLogout /></Link></>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavbarTop;