
import { Link, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import Button from "./button";
import { Themecontext } from "../context/themecontext";
import { useContext } from "react";
import { UserContext } from "../context/usercontext";
import { auth } from "../pages/auth/firebase";
import { signOut } from "firebase/auth";

function Header() {
const  {user}  = useContext(UserContext);
  console.log("user->",user)
  const { theme, settheme } = useContext(Themecontext);
  console.log("user in header =>", user);
  const navigate = useNavigate();

  const goToHomePage = () => navigate("/");
  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/");
  };


 

  return (
    <div
      className={`${
        theme === "light" ? "bg-gray-200 text-gray-800" : "bg-zinc-400 text-white"
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
          {user?.islogin?(
            <div className="flex items-center">
                <h1 className="mx-2">{user.email}</h1>
              <Button title={"Sign Out"} onClick={handleSignOut} />
            </div>
          ) : (
            <Link to="/signin" className="mr-5 hover:text-gray-900">
              Login
            </Link>
          )}

          <Button
            onClick={() => {
              if (theme === "light") {
                settheme("dark");
              } else {
                settheme("light");
              }
            }}
            title={theme === "light" ? "Make it Dark" : "Make it Light"}
          />
        </div>
      </header>
    </div>
  );
}

export default Header;

// import { Link, useNavigate } from "react-router-dom"
// import Home from "../pages/home"
// import Button from "./button"
// import { Themecontext } from "../context/themecontext"
// import { useContext } from "react"
// import { UserContext } from "../context/usercontext"
// // import { Link, useNavigate } from "react-router-dom";
// import { auth, signOut } from "../pages/auth/firebase";





// function Header() {
//   const {user}= useContext(UserContext)
  
  
//   const {theme,settheme}= useContext(Themecontext)
//   console.log("user in header=>", user);
//   const navigate = useNavigate();

//   const goToHomePage = () => navigate("/");

//   const handleSignOut = async () => {
//     await signOut(auth);
//     navigate("/");
//   };
//     return(
//       <div className={`${theme === 'light' ? "bg-gray-200 text-gray-800" : "bg-zinc-400 text-white"}`}> 
//         <header className="text-gray-600 body-font">
//         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//           <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
//               viewBox="0 0 24 24"
//             >
//               <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
//             </svg>
//             <span className="ml-3 text-3xl">Products App</span>
//           </a>
//           <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
         
//           <Link to={"Home"} className="mr-5 hover:text-gray-900">Home</Link>
//             <Link  to={"about"}className="mr-5 hover:text-gray-900">about</Link>
//             <Link  to={"contactus"} className="mr-5 hover:text-gray-900">contact us </Link>
//             <Link to={"services"} className="mr-5 hover:text-gray-900">services</Link>   
//               <Link to={"products"} className="mr-5 hover:text-gray-900">products</Link>
           
//           </nav>
         
//           {user?.isLogin ? (
//             <div className="flex items-center">
//               <Link to={"/profile"}>
//                 <h1 className="mx-2">{user.username}</h1>
//               </Link>
//               <Button text={"SignOut"} onClick={handleSignOut} />
//             </div>
//           ) : (
//             <Link to="/signin" className="mr-5 hover:text-gray-900">
//               Login
//             </Link>)}
        
//           <Button
// onPress={()=>{
//   if (theme ==="light") {
//     settheme("dark")
//   } else {
//     settheme("light")
//   }
// }}
// title={theme ==="light"? "make it dark":"make it light"}/>
//         </div>
//       </header>
//       </div>
      
        
//     )
// }

// export default Header