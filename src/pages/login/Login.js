import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        // Example login logic, replace with your actual authentication request
        if (username === "user" && password === "pass") {
            const token = "exampleToken123"; // In a real scenario, get this from the server
            localStorage.setItem("token", token);
            navigate("/"); // Redirect to home after login
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button onClick={handleLogin}>Log In</button>
        </div>
    );
}

export default Login;
