import logo from "../asset/img/logo_size.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { FaCartPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Title = () => <img className="mb-3 md:mb-0" src={logo} alt="Food Time" />;

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  const handleLog = () => {
    setIsLoggedIn(isLoggedIn ? false : true);
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <>
      <header className="bg-white p-2 shadow-md z-10 sticky top-[-50px] md:top-0">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center ">
            <Title />
            <nav className="flex flex-row justify-between w-full  md:w-auto md:justify-normal">
              <ul className="flex flex-row">
                <Link className="hover:" to="/">
                  <li className="py-2 px-3 cursor-pointer  text-black  hover:text-red-400">
                    Home
                  </li>
                </Link>
                <Link className="" to="/about">
                  <li className="py-2 px-3 cursor-pointer text-black hover:text-red-400">
                    About
                  </li>
                </Link>
                <Link to="/service">
                  <li className="py-2 px-3 cursor-pointer text-black hover:text-red-400">
                    Service
                  </li>
                </Link>
                <Link to="/contact">
                  <li className="py-2 px-3 cursor-pointer text-black hover:text-red-400">
                    Contact
                  </li>
                </Link>
                <Link to="/cart">
                  <li className="w-[72px] h-[40px] flex justify-center items-center relative mr-3 cursor-pointer text-red-600 hover:text-red-400">
                    <FaCartPlus className="w-8 h-8" />
                    {cartItems.length !== 0 ? (
                      <span className="text-sm font-semibold flex justify-center items-center absolute top-0 right-[0.6rem] w-5 h-5 rounded-[50%] bg-green-600 text-white">
                        {cartItems.length}
                      </span>
                    ) : (
                      ""
                    )}
                  </li>
                </Link>
              </ul>

              <span className="flex items-center">
                <button
                  type="button"
                  className={`font-semibold py-2 w-20 rounded-md text-white ${
                    !isLoggedIn ? "bg-myBtn" : "bg-red-500"
                  }`}
                  onClick={() => {
                    handleLog();
                  }}
                >
                  {!isLoggedIn ? "LogIn" : "LogOut"}
                </button>
              </span>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
