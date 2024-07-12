"use client";
import { FaRegUser } from "react-icons/fa6";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const seasion=  useSession()
 console.log(seasion);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#FDFDFD] shadow-md ">
      <div className="bg-[#FDB64E] text-white h-14 flex items-center justify-center">
        <marquee  behavior="scroll" direction="left" scrollamount="5">
         <strong> %% Free shipping on all orders %%</strong>
        </marquee>
      </div>
      <div className="container mx-auto flex flex-wrap justify-between items-center p-2 ">
        <div className="flex-shrink-0">
          <Image src={"/asets/logo.png"} height={100} width={100} />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        <nav className={`${isOpen ? "block" : "hidden"} md:block w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row justify-around gap-2 md:gap-6 items-center">
            {navitem?.map((item, idx) => (
              <li key={idx}>
                <Link
                  className={`${
                    pathName == item?.path
                      ? "text-[#277E16] font-semibold"
                      : "text-[#656565] font-semibold"
                  } `}
                  href={item?.path}
                >
                  {item?.title} <span className="hidden md:inline pl-6 text-[#D9D9D9]">|</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        { 
          seasion.data ? <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1 py-1 rounded-full">
            <FaRegUser size={30}/>
          </div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <button onClick={()=>signOut()}>logout</button>
          </ul>
        </div> : <div className={`${isOpen ? "block" : "hidden"} md:flex flex-col lg:mx-0  mx-auto md:flex-row justify-between gap-2 md:gap-6 mt-2  md:mt-0`}>
          <Link href={'/login'}>
          <button className="btn border-2 border-[#6AA75F] px-4 md:px-6 mr-6 py-2 rounded-lg text-[#6AA75F]">
            log in
          </button>
          </Link>
         
         <Link href={'/signup'}> <button className="btn btn-primary bg-[#5a9750] hover:bg-[#5a9750] px-4 md:px-6 py-2 rounded-lg text-white">
            Sign up
          </button>
          </Link>
        </div>
        }
      </div>
    </div>
  );
};
const navitem = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Our menus",
    path: "/ourmenus",
  },
  {
    title: "Meal Plans",
    path: "/mealplans",
  },
  {
    title: "Catering",
    path: "/catering",
  },
  {
    title: "How it work",
    path: "/mealplans",
  },
  {
    title: "Testimonials",
    path: "/testimonials",
  },
  {
    title: "FAQ",
    path: "/faq",
  },
];
export default Navbar;
