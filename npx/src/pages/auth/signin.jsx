import { useState } from "react";

import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import { useNavigate } from "react-router";
import Button from "../../components/button";

import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase";
function Signinform() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

  const handleSignInwithgoogle = ()=>{
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result);
    
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
   
    console.log(error,errorCode,errorMessage);

    // ...
  });
  }
    const handleSignIn = async () => {
      try {
        setLoading(true);
        console.log(email, password);
        const user = await signInWithEmailAndPassword(auth, email, password);
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
 <h1 className="text-center  my-4">or</h1>

 <Button onClick={handleSignInwithgoogle} isLoading={loading} title={"signin  with google"} />

            </div>
          </div>
        );
    
}
export  default Signinform