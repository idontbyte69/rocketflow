'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../layout/Navbar';

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showCookie, setShowCookie] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign in:', formData);
    // Add your sign-in logic here
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    // Add your Google OAuth logic here
  };

  const handleFacebookLogin = () => {
    console.log('Facebook login clicked');
    // Add your Facebook OAuth logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-rose-100 flex items-center justify-center pt-16 px-4">
        <div className="w-full max-w-md">
          {/* Main Login Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-4">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 relative">
                <Image src="/signinlog.png" alt="RocketFlow Logo" width={64} height={64} className="object-contain" priority />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">Login</h1>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter Your Email"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter Your Password"
                  />
                </div>
              </div>

              {/* Show Password & Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={showPassword}
                    onChange={(e) => setShowPassword(e.target.checked)}
                    className="mr-2 h-4 w-4 text-coral-500 focus:ring-coral-500 border-gray-300 rounded"
                  />
                  <span className="text-coral-500">show password</span>
                </label>
                <Link href="/forgot-password" className="text-gray-500 hover:text-coral-500 transition-colors">
                  Forgot password?
                </Link>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full bg-coral-500 hover:bg-coral-600 text-white py-3 rounded-lg font-medium transition-colors mt-6"
              >
                Sign in
              </button>
            </form>

            {/* Social Login */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <button 
                  type="button"
                  onClick={handleGoogleLogin}
                  className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="sr-only">Sign in with Google</span>
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                    />
                  </svg>
                </button>
                <button 
                  type="button"
                  onClick={handleFacebookLogin}
                  className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="sr-only">Sign in with Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="text-center mt-6">
              <span className="text-gray-600">Don't have an account? </span>
              <Link href="/signup" className="text-coral-500 hover:text-coral-600 font-medium transition-colors">
                Sign Up
              </Link>
            </div>

            {/* Team Member Login */}
            <div className="text-center mt-4">
              <Link href="/team-login" className="text-gray-500 hover:text-coral-500 text-sm transition-colors">
                Login as Team Member
              </Link>
            </div>
          </div>
        </div>

        {/* Cookie Notification */}
        {showCookie && (
          <div className="fixed bottom-0 left-0 right-0 bg-coral-500 text-white p-4 flex items-center justify-between">
            <p className="text-sm flex-1">
              We use cookies to ensure that we give you the best experience on our website. If you continue to use this site, it is implied you accepted it.
            </p>
            <button
              onClick={() => setShowCookie(false)}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded ml-4 text-sm font-medium transition-colors"
            >
              Got it!
            </button>
          </div>
        )}
      </div>
    </>
  );
}