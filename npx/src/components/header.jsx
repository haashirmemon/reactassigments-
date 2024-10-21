
import { Link, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import Button from "./button";
import { Themecontext } from "../context/themecontext";
import { useContext } from "react";
import { UserContext } from "../context/usercontext";
import { auth } from "../pages/auth/firebase";
import { signOut } from "firebase/auth";
import React from 'react';
import {
  HomeOutlined,
  LoadingOutlined,
  LoginOutlined,
  LogoutOutlined,
  MoonOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from '@ant-design/icons';







function Header() {
  const { user } = useContext(UserContext);
  console.log("user->", user)
  const { theme, settheme } = useContext(Themecontext);
  console.log("user in header =>", user);
  const navigate = useNavigate();

  const goToHomePage = () => navigate("/");
  const handleSignOut = async () => {
    console.log('sign out')
    await signOut(auth);
    navigate("/");
  };




  return (
    <div
      className={`${theme === "light" ? "bg-gray-200 text-gray-800" : "bg-zinc-400 text-white"
        }`} >
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-3xl">Products App</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to={"/Home"} className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link to={"/about"} className="mr-5 hover:text-gray-900">
              weather
            </Link>
            <Link to={"/contactus"} className="mr-5 hover:text-gray-900">
              Contact Us
            </Link>
            <Link to={"/services"} className="mr-5 hover:text-gray-900">
              Services
            </Link>
            <Link to={"/products"} className="mr-5 hover:text-gray-900">
              Products
            </Link>
          </nav>
          {user.isLogin ? (
            <div className="flex items-center">
              <h1 className="mx-2">{user.email}</h1>
              <Button className="mx-2" shape="circle" icon={<LogoutOutlined />} onClick={handleSignOut}  />
            </div>
          ) : (
            <Link to="/signin" className="mr-5 hover:text-gray-900">
              login
            </Link>
          )}

          < Button
          icon={<MoonOutlined/>}
            shape="circle"
           onClick={() => {
              if (theme === "light") {
                settheme("dark");
              } else {
                settheme("light");
              }
            }}
            className="mx-3"
            
          /> 
              
       
          
        </div>
      </header>
    </div>
  );
}

export default Header;


