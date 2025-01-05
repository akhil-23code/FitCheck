import React, { useState } from 'react';
import { LogIn } from 'lucide-react';
import { LoginPageProps } from '../types';
import { registerUser, loginUser } from '../api'; // Import the API functions

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const result = await loginUser(username, password);
        if (result.token) {
            localStorage.setItem('token', result.token);  // Store JWT token
            alert('Login successful');
            onLogin();  // Trigger any parent login functionality
        } else {
            alert('Login failed: ' + result.error);
        }
    };

    const handleRegister = async () => {
        const result = await registerUser(username, password);
        if (result.message) {
            alert('Registration successful');
        } else {
            alert('Registration failed: ' + result.error);
        }
    };

    return (
        <div className="min-h-screen relative">
            <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                alt="Runner starting position"
                className="absolute inset-0 w-full h-full object-cover brightness-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                <h1 className="text-center font-mono">
                    <div className="text-2xl md:text-4xl mb-2">FITCHECK APP</div>
                    <div className="text-4xl md:text-6xl font-bold mb-2">ARE YOU</div>
                    <div className="text-4xl md:text-6xl font-bold mb-2">RUN-READY</div>
                    <div className="text-4xl md:text-6xl font-bold">TO GET FIT?</div>
                </h1>
                <div className="mt-8 space-y-4 w-full max-w-xs">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full py-2 px-4 rounded-lg text-black"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full py-2 px-4 rounded-lg text-black"
                    />
                    <button
                        onClick={handleLogin}
                        className="w-full bg-indigo-900 hover:bg-indigo-800 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                    >
                        <LogIn size={20} />
                        Login
                    </button>
                    <button
                        onClick={handleRegister}
                        className="w-full bg-indigo-900 hover:bg-indigo-800 text-white py-3 px-6 rounded-lg transition-colors"
                    >
                        Register Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
