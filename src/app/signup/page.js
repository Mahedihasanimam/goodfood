"use client";

import Link from "next/link";
import React from "react";

const SignupPage = () => {
  const handleSignup = async (event) => {
    event.preventDefault();
    const newUser = {
      userName: event.target.user.value,
      email: event.target.email.value,
      contact: event.target.contact.value,
      address: event.target.address.value,
      password: event.target.password.value,
      confirmPassword: event.target.confirmPassword.value,
    };
    console.log(newUser);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/signup/api`, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers:{
        "content-type":"application/json"
      }
    });
    // console.log(res);
    if(res.status===200){
      event.target.reset()
    }
  };

  return (
    <div className="bgimg bg-bottom min-h-[900px] h-screen p-4 bg-no-repeat bg-cover">
      <div className="lg:w-1/2 w-full my-2 float-end p-8 space-y-8 rounded-xl bg-[#E7E7E7] bg-opacity-90 text-black">
        <h1 className="text-2xl font-bold text-center">
          Sign up to your account
        </h1>
        <p className="text-center">
          Please enter your email and password to continue
        </p>
        <form onSubmit={handleSignup} className="space-y-4">
          <div className="space-y-1 text-sm">
            <label htmlFor="user" className="block">
              User Name
            </label>
            <input
              type="text"
              name="user"
              id="user"
              placeholder="Your user name"
              className="w-full p-4 rounded-full py-3 border-blue-600 border-opacity-30 bg-white opacity-90 focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="mehedi@gmail.com"
              className="w-full p-4 rounded-full py-3 border-blue-600 border-opacity-30 bg-white opacity-90 focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="contact" className="block">
              Contact No.
            </label>
            <input
              type="tel"
              name="contact"
              id="contact"
              placeholder="+88018...."
              className="w-full p-4 rounded-full py-3 border-blue-600 border-opacity-30 bg-white opacity-90 focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="address" className="block">
              Permanent Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="R no 1, Block B, CITY X, BD"
              className="w-full p-4 rounded-full py-3 border-blue-600 border-opacity-30 bg-white opacity-90 focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="**************"
              className="w-full p-4 rounded-full py-3 border-blue-600 border-opacity-30 bg-white opacity-90 focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="confirmPassword" className="block">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="**************"
              className="w-full p-4 rounded-full py-3 border-blue-600 border-opacity-30 bg-white opacity-90 focus:border-violet-400"
            />
          </div>
          <button className="block w-fit bg-green-800 px-10 py-2 text-center rounded-lg mx-auto border-none text-white">
            Sign Up
          </button>
        </form>
        <p className="text-lg text-center sm:px-6 text-gray-400">
          Have an account?
          <Link href="/login" rel="noopener noreferrer" className="font-bold">
            <span className="text-yellow-400"> Log in</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
