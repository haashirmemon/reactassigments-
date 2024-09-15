import { useState } from "react";

import { signInWithEmailAndPassword, } from "firebase/auth";

import { useNavigate } from "react-router";
import Button from "../../components/button";


import { auth } from "./firebase";
import { Link } from "react-router-dom";
function Signinform() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    

    const handleSignIn = async () => {
      try {
        setLoading(true);
        console.log(email, password);
        const user = await signInWithEmailAndPassword(auth,email, password );
        console.log("user==>", user);
        navigate("/");
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    
  
        return (
          <div className="container mx-auto justify-center items-center ">
            <div className="flex flex-col items-center">
              <h1 className="my-3 font-bold">sign in form</h1>
              <input
                className="w-full lg:w-1/2 border p-2 my-2 rounded-md"
                placeholder="Email"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className="w-full lg:w-1/2 border p-2 my-5 mb-6 rounded-md"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
  
      <Button onClick={handleSignIn} isLoading={loading} title={"Login"} />
      <h1 className="text-center  my-4">dont' have account</h1>
 <button className="inline-flex items-center font-bold bg-red-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 rounded text-base mt-4 md:mt-0 my-4 mx-4">

          <Link  to={"/signin/signup"}className="mr-5 text-black">create account 
          </Link>
          <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>




            </div>
          </div>
        );
    
}
export  default Signinform