import React from "react";
// import img from "62adb076bf8f81508113b9205e86a804def16831.png";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDF6E9] px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-6xl w-full bg-[#FFF8EC] rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1765447041709-9f1efbc81606?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8
            "
            alt="Jewellery Model"
            className="w-full h-full object-cover"
          />

          {/* TEXT OVER IMAGE */}
          <div className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-sm p-5 rounded-md text-white font-serifLuxury text-sm leading-relaxed">
            Where master craftsmanship meets contemporary luxury in every fine
            detail. G-Crown by Graphura creates jewellery that reflects power,
            grace, and individuality.
          </div>

          {/* IMAGE BORDER */}
          <div className="absolute inset-4 border border-white/60 rounded-md"></div>
        </div>

        {/* RIGHT FORM */}
        <div className="p-6 sm:p-8 md:p-12 font-['Cormorant_Garamond']">
          <h2 className="text-2xl sm:text-3xl text-[#1C3A2C] mb-2">
            Sign Up
          </h2>

          <p className="text-xs sm:text-sm text-[#CBA135] mb-4 sm:mb-6">
            Fill your information below or register with your social account
          </p>

          {/* NAME */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div>
              <label className="text-xs sm:text-sm text-[#1C3A2C]">
                First Name*
              </label>
              <input
                placeholder="Bessie"
                className="w-full mt-1 px-2.5 sm:px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-[#1C3A2C] text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="text-xs sm:text-sm text-[#1C3A2C]">
                Last Name*
              </label>
              <input
                placeholder="Cooper"
                className="w-full mt-1 px-2.5 sm:px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-[#1C3A2C] text-sm sm:text-base"
              />
            </div>
          </div>

          {/* EMAIL */}
          <div className="mb-3 sm:mb-4">
            <label className="text-xs sm:text-sm text-[#1C3A2C]">
              Email*
            </label>
            <input
              placeholder="example@gmail.com"
              className="w-full mt-1 px-2.5 sm:px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-[#1C3A2C] text-sm sm:text-base"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-3 sm:mb-4">
            <label className="text-xs sm:text-sm text-[#1C3A2C]">
              Password*
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full mt-1 px-2.5 sm:px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-[#1C3A2C] text-sm sm:text-base"
            />
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="mb-3 sm:mb-4">
            <label className="text-xs sm:text-sm text-[#1C3A2C]">
              Confirm New Password*
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full mt-1 px-2.5 sm:px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-[#1C3A2C] text-sm sm:text-base"
            />
          </div>

          {/* REMEMBER */}
          <div className="flex items-center gap-2 text-sm mb-6">
            <input type="checkbox" className="accent-primaryGreen" />
            Remember me
          </div>

          {/* SIGN UP BUTTON */}
          <button className="w-full bg-[#1C3A2C] text-white py-2.5 sm:py-3 rounded-md hover:bg-[#0F231C] transition text-sm sm:text-base font-semibold">
            Sign Up
          </button>

          {/* OR */}
          <div className="flex items-center gap-3 my-4 text-sm text-gray-400">
            <div className="flex-1 h-px bg-gray-300"></div>
            or Sign Up with
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* GOOGLE */}
          <button className="w-full border py-3 rounded-md flex justify-center gap-2 hover:bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1765447041709-9f1efbc81606?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
              className="w-5"
            />
            Sign Up With Google
          </button>

          {/* SIGN IN */}
          <p className="text-sm text-center mt-5">
            Already have an account?
            <span className="text-#1C3A2C ml-1 cursor-pointer font-medium">
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;