import React, { useState } from 'react';
import { Lock, Mail } from 'lucide-react';
import { UserRole } from '../types';

interface LoginPageProps {
  onLogin: (role: UserRole) => void;
  onBack: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onBack }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check for hardcoded password
    if (password !== '123456768') {
      setError('ভুল পাসওয়ার্ড! (Password: 123456768)');
      return;
    }

    // Mock Database Logic
    if (email === 'admin@demo.com') {
      onLogin('admin');
    } else if (email === 'user@demo.com') {
      onLogin('student');
    } else if (email === 'anisul@gmail.com') {
      // Treating instructor as student view for now, or you can add specific instructor view
      onLogin('instructor'); 
    } else {
      setError('এই ইমেইল দিয়ে কোনো অ্যাকাউন্ট পাওয়া যায়নি!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">লগইন</h2>
          <p className="text-gray-500 mt-2">আপনার অ্যাকাউন্টে প্রবেশ করুন</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm text-center border border-red-100">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ইমেইল</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-brand-500 focus:border-brand-500 sm:text-sm p-2.5 border"
                placeholder="user@demo.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">পাসওয়ার্ড</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-brand-500 focus:border-brand-500 sm:text-sm p-2.5 border"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="submit"
              className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition"
            >
              লগ ইন করুন
            </button>
            <button
              type="button"
              onClick={onBack}
              className="w-full flex justify-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition"
            >
              হোমপেজে ফিরে যান
            </button>
          </div>
        </form>
        <div className="mt-6 p-4 bg-gray-50 rounded-lg text-xs text-gray-500 text-center space-y-1">
          <p className="font-semibold mb-2 border-b pb-1">Demo Credentials (Pass: 123456768)</p>
          <div className="grid grid-cols-2 gap-2 text-left px-2">
            <div>
              <span className="font-bold block text-gray-700">Admin:</span> 
              admin@demo.com
            </div>
            <div>
              <span className="font-bold block text-gray-700">Student:</span> 
              user@demo.com
            </div>
            <div className="col-span-2 mt-1">
              <span className="font-bold text-gray-700">Instructor:</span> anisul@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;