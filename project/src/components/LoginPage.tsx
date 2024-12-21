import React from 'react';
import { LogIn } from 'lucide-react';
import { LoginPageProps } from '../types';

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
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
          <button
            onClick={onLogin}
            className="w-full bg-indigo-900 hover:bg-indigo-800 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <LogIn size={20} />
            Login
          </button>
          <button className="w-full bg-indigo-900 hover:bg-indigo-800 text-white py-3 px-6 rounded-lg transition-colors">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;