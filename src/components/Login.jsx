import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

function Login() {

    const handleLogin = async () => {
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <button onClick={handleLogin}>
                Login with Google
            </button>
        </div>
    );
}

export default Login;