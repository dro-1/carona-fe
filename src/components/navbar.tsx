import { Link } from "react-router-dom";
import logo from "./../assets/svg/logo.svg";
import menu from "./../assets/svg/menu.svg";
import { IoMdClose } from "react-icons/io";
import clsx from "clsx";
import { useState } from "react";

const navbarLinks = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/about",
    title: "About",
  },
  {
    url: "/driver",
    title: "Driver",
  },
  {
    url: "/blog",
    title: "Blog",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <nav className=" flex justify-between items-center w-full p-8 pb-16">
        <img src={logo} className="w-[150px]" />
        <img onClick={() => setIsOpen(true)} src={menu} className="w-[40px]" />
      </nav>
      <div
        className={clsx(
          "sidebar absolute top-0 left-0 bg-white h-screen w-full z-10 p-6 transition duration-500",
          !isOpen && "-translate-x-[100%]",
          isOpen && "translate-x-0"
        )}
      >
        <IoMdClose
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-6 text-4xl"
        />
        <img src={logo} className="w-[200px] mt-4" />

        <ul className="mt-8">
          {navbarLinks.map((navbarLink) => (
            <li className="my-4">
              <Link to={navbarLink.url}>{navbarLink.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
