import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff, CheckCircle, ChevronDown } from "lucide-react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen py-16 bg-slate-100 flex items-center justify-center p-2">
      {isLogin ? (
        // LOGIN PAGE
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden grid lg:grid-cols-2">
          {/* Left Side */}
          <div className="bg-[#eef3ff] p-8">
            <h3 className="text-xl text-slate-700 mb-2">
              BEGIN YOUR
            </h3>

            <h1 className="text-lg font-bold text-slate-800 mb-10">
              MLM JOURNEY SEAMLESSLY
            </h1>

            <div className="space-y-5 text-xl text-slate-700">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-orange-600" />
                Choose your desired plan
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-orange-600" />
                Customize your MLM software
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-orange-600" />
                Ready to go
              </div>
            </div>

            <h2 className="text-center text-lg mt-16 text-slate-700">
              SIMPLIFY YOUR MLM JOURNEY NOW!
            </h2>

            <div className="border-t border-dashed border-orange-200 my-5" />

            <div className="bg-white rounded-3xl ">
              <img
                src="https://i.pinimg.com/1200x/dd/7c/50/dd7c501e118a859e18f3646efee2c174.jpg"
                alt="Awards"
                className="rounded-xl w-full h-1/2"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center p-10">
            <div className="w-full max-w-md">
            <div className=" justify-center flex items-center text-center ">
              <div>
                 <img src="/mlm_logo.png" className="h-16" alt="" />

              </div>
            </div>
              <p className="text-center text-md text-slate-700 mb-10">
                Sign in to Infinite MLM Software
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-lg mb-2">
                    Username
                  </label>

                  <input
                    type="email"
                    placeholder="Example@email.com"
                    className="w-full h-14 border border-gray-300 rounded-2xl px-5 outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-lg mb-2">
                    Password
                  </label>

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="At least 8 characters"
                      className="w-full h-14 border border-gray-300 rounded-2xl px-5 pr-14 outline-none focus:ring-2 focus:ring-orange-500"
                    />

                    <button
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="absolute right-4 top-4"
                    >
                      {showPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>
                  </div>
                </div>

                <button className="w-full h-14 rounded-2xl bg-orange-500 text-white text-xl font-semibold shadow-lg hover:bg-orange-600 transition">
                  Login
                </button>

                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-gray-200" />
                  <span>Or</span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                <button className="w-full h-14 bg-gray-300 rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-200 transition">
                  <FcGoogle size={28} />
                  <span className="font-medium">
                    Sign in with Google
                  </span>
                </button>

                <p className="text-center text-lg">
                  Don't have an account?{" "}
                  <button
                    onClick={() => setIsLogin(false)}
                    className="text-orange-600 font-medium"
                  >
                    Sign up
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // SIGNUP PAGE
        <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl p-10">
          <h2 className="text-xl text-center text-slate-800 mb-10">
            Sign in to Infinite MLM Software
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-lg mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Example@email.com"
                className="w-full h-14 border border-gray-300 rounded-2xl px-4 outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-lg mb-2">
                Phone
              </label>

              <div className="flex items-center border border-gray-300 rounded-2xl h-14 px-4">
                <div className="flex items-center gap-2 pr-3 border-r">
                  🇮🇳
                  <ChevronDown size={14} />
                </div>

                <input
                  type="text"
                  placeholder="+91 Enter Phone Number"
                  className="flex-1 px-3 outline-none"
                />
              </div>
            </div>

            <div className="text-right">
              <button className="text-orange-600">
                Forgot Password?
              </button>
            </div>

            <button className="w-full h-14 rounded-2xl bg-orange-500 text-white text-xl font-semibold shadow-lg hover:bg-orange-600 transition">
              Register
            </button>

            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-gray-200" />
              <span>Or</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <button className="w-full h-14 bg-gray-300 rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-200 transition">
              <FcGoogle size={28} />
              <span className="font-medium">
                Sign in with Google
              </span>
            </button>

            <p className="text-center text-lg">
              You have an account?{" "}
              <button
                onClick={() => setIsLogin(true)}
                className="text-orange-600 font-medium"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}