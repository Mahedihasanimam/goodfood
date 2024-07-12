import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="bgimg bg-bottom h-screen p-4 bg-no-repeat bg-cover">
        <div className="lg:w-1/2 w-full h-full my-2 float-end  p-8 space-y-8 rounded-xl bg-[#E7E7E7]  text-black">
          <h1 className="text-2xl font-bold text-center">
            Sign in to your account
          </h1>
          <p className="text-center ">
            Please enter your email and password to continue
          </p>
          <form className="space-y-8">
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full lg:p-6 p-4 rounded-full py-3  border-blue-600 border-opacity-30 bg-white opacity-90 focus:border-violet-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block  font-bold">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full  lg:p-6  rounded-full  py-3 border-opacity-30 border-blue-600 focus:border-violet-400"
              />
                
              <div className="flex justify-between text-xs text-gray-400 my-6">
                <div>
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    aria-label="Remember me"
                    className="mr-1 rounded-sm focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2 dark:accent-violet-600"
                  />
                  <label
                    htmlFor="remember"
                    className="text-xl dark:text-red-600"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  className="text-red-600 text-lg"
                  rel="noopener noreferrer"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
            <button className="block w-fit bg-green-800 px-10 py-2 text-center rounded-lg mx-auto  border-none text-white">
              Log in
            </button>
          </form>
 
          <p className="text-lg text-center sm:px-6 text-gray-400">
            Don't have an account?
            <Link
              href="/signup"
              rel="noopener noreferrer"
              className=" font-bold"
            >
              <span className="text-yellow-500">Sign up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
