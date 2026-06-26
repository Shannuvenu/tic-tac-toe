import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Profile({ user }) {

    const logout = () => {
        signOut(auth);
    };

    return (
        <div style={{ textAlign: "center" }}>

            <img
                src={user.photoURL}
                alt=""
                width="80"
                style={{ borderRadius: "50%" }}
            />

            <h2>{user.displayName}</h2>

            <p>{user.email}</p>

            <button onClick={logout}>
                Logout
            </button>

        </div>
    );
}

export default Profile;