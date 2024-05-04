import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/assets/logo.svg'
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
    const navLinks = 
    <>
    <li>   <NavLink to='/'>Home</NavLink> </li> 
    <li>   <NavLink to='/about'>About</NavLink> </li> 
    <li>   <NavLink to='/services'>Services</NavLink> </li>  
    <li>   <NavLink to='/blogs'>Blog</NavLink>   </li>  
    <li>   <NavLink to='/contact'>Contact</NavLink> </li>   
    </>
    return (
        <div className="navbar px-0 bg-base-100 max-w-7xl mx-auto">
  <div className="navbar-start gap-10 md:gap-0 ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
        </ul>
    </div>
    <Link to='/'><img src={logo} alt="" className=" w-16  " /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navLinks}
    </ul>
  </div>
  <div className="navbar-end gap-3">
  <Link className="text-xl hover:bg-slate-300 p-2 rounded-full cursor-pointer"><HiOutlineShoppingBag  /></Link>
  <Link className="text-xl hover:bg-slate-300 p-2 rounded-full cursor-pointer"><IoSearchOutline       /></Link>
    <Link className=" border-2 px-3 py-2 rounded-md hover:bg-[#FF3811] text-[#FF3811] hover:text-white border-[#FF3811] font-semibold">Appointment</Link>
  </div>
</div>
    );
};

export default Navbar;