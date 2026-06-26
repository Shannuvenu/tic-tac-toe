import { signOut } from "firebase/auth";
import { FaSignOutAlt } from "react-icons/fa";

import { auth } from "../firebase";

function Profile({ user, avatar }) {

    function logout() {
        localStorage.removeItem("avatar");
        signOut(auth);
    }

    if (!user) {
        return null;
    }

    return (
        <div className="profile-card">

            <div className="profile-left">

                <img
                    src={avatar || user.photoURL}
                    alt="avatar"
                    className="profile-avatar"
                />

                <div>
                    <h2>{user.displayName || "Player"}</h2>
                    <p>{user.email}</p>
                </div>

            </div>

            <button
                className="logout-btn"
                onClick={logout}
            >
                <FaSignOutAlt />
                &nbsp; Logout
            </button>

        </div>
    );
}

export default Profile;