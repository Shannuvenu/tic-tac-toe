import { auth } from "../firebase";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { FcGoogle } from "react-icons/fc";

import toast from "react-hot-toast";

function Login() {

    const login = async () => {

        try{

            const provider = new GoogleAuthProvider();

            await signInWithPopup(auth,provider);

            toast.success("Welcome!");

        }

        catch{

            toast.error("Login Failed");

        }

    }

    return(

        <button
        className="googleBtn"
        onClick={login}
        >

            <FcGoogle
            size={25}
            />

            Login with Google

        </button>

    )

}

export default Login;