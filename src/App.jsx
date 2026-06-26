import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./firebase";

import Board from "./components/Board";
import Login from "./components/Login";
import Profile from "./components/Profile";

import "./App.css";

function App() {

    const [user, setUser] = useState(null);

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return unsubscribe;

    }, []);

    return (

        <div className="container">

            <h1>Tic Tac Toe</h1>

            {user ? (
                <>
                    <Profile user={user} />
                    <Board />
                </>
            ) : (
                <Login />
            )}

        </div>

    );
}

export default App;