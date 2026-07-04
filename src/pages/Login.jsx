// src/pages/Login.jsx

import { FaGoogle, FaGithub } from "react-icons/fa";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full min-h-screen flex bg-black">

      {/* Left Side */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-black">

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 flex flex-col justify-center px-16 text-white">
          <span className="mb-4 inline-block rounded-full border border-white/20 px-4 py-2 text-sm">
            Enterprise MLM Platform
          </span>

          <h1 className="mb-6 text-6xl font-bold leading-tight">
            Welcome Back
          </h1>

          <p className="max-w-lg text-lg text-orange-100">
            Manage distributors, commissions, genealogy, payouts,
            analytics, and business growth from one powerful dashboard.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">
              <h3 className="text-3xl font-bold">99.9%</h3>
              <p className="text-orange-100">Platform Uptime</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md">
              <h3 className="text-3xl font-bold">18M+</h3>
              <p className="text-orange-100">Users Managed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex w-full lg:w-1/2 items-center justify-center px-6 py-10 bg-white">

        <div className="w-full max-w-md">

          {/* Logo */}
          <div className="mb-10 text-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="mx-auto h-16 w-auto"
            />

            <h2 className="mt-6 text-4xl font-bold text-gray-900">
              Sign In
            </h2>

            <p className="mt-2 text-gray-500">
              Access your MLM management dashboard
            </p>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 rounded-xl border border-gray-200 py-3 transition hover:bg-gray-50">
              <FaGoogle />
              Google
            </button>

            <button className="flex items-center justify-center gap-3 rounded-xl border border-gray-200 py-3 transition hover:bg-gray-50">
              <FaGithub />
              GitHub
            </button>
          </div>

          <div className="my-8 flex items-center">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="px-4 text-sm text-gray-400">
              OR CONTINUE WITH EMAIL
            </span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* Form */}
          <form className="space-y-5">

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email Address
              </label>

              <input
                type="email"
                placeholder="admin@example.com"
                className="w-full rounded-xl border border-gray-300 px-4 py-4 outline-none transition focus:border-orange-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Password
              </label>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-gray-300 px-4 py-4 pr-14 outline-none transition focus:border-orange-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>

              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" />
                Remember me
              </label>

              <a
                href="#"
                className="text-sm text-orange-600 hover:text-orange-700"
              >
                Forgot Password?
              </a>
            </div>

            <button
              className="
                w-full
                rounded-xl
                bg-orange-500
                py-4
                font-semibold
                text-white
                transition
                hover:bg-orange-600
              "
            >
              Login
            </button>

          </form>

          <p className="mt-8 text-center text-gray-500">
            Don't have an account?{" "}
            <a
              href="/register"
              className="font-semibold text-orange-600"
            >
              Create Account
            </a>
          </p>

        </div>
      </div>
    </div>
  );
}