import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./firebase";

import Login from "./components/Login";
import Profile from "./components/Profile";
import Board from "./components/Board";
import AvatarPicker from "./components/AvatarPicker";

import "./App.css";

function App() {
    const [user, setUser] = useState(null);
    const [avatar, setAvatar] = useState(
        localStorage.getItem("avatar") || null
    );

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return unsubscribe;
    }, []);

    function handleAvatarSelect(selectedAvatar) {
        setAvatar(selectedAvatar);
        localStorage.setItem("avatar", selectedAvatar);
    }

    if (!user) {
        return <Login />;
    }

    if (!avatar) {
        return (
            <AvatarPicker
                selected={avatar}
                setSelected={handleAvatarSelect}
            />
        );
    }

    return (
        <div className="app">

            <Profile
                user={user}
                avatar={avatar}
            />

            <Board />

        </div>
    );
}

export default App;