import React, { useState } from "react";

import Hero from "../../components/Hero";

import Arrow from "../../components/Arrow";



const AdminLogin = () => {

  const [email, setEmail] = useState("");

  const [otp, setOtp] = useState("");

  const [password, setPassword] = useState("");



  // Control flow states

  const [step, setStep] = useState(1); // 1: Email, 2: OTP, 3: Password

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);



  const handleVerifyEmail = async () => {

    setLoading(true);

    setError("");

    try {

      // Replace with your actual API call

      // const res = await api.checkEmail(email);

      if (email === "admin@example.com") {

        setStep(2);

      } else {

        setError("Invalid Credentials");

      }

    } catch (err) {

      setError("Email check failed");

    } finally {

      setLoading(false);

    }

  };



  const handleVerifyOTP = async () => {

    setLoading(true);

    try {

      // Replace with your actual API call

      // const res = await api.checkOTP(otp);

      setStep(3);

    } catch (err) {

      setError("Invalid OTP");

    } finally {

      setLoading(false);

    }

  };



  return (

    <div className="hero min-h-screen flex items-center justify-center py-[80px] px-[20px]">

      <div className="flex flex-col md:flex-row w-full max-w-[1400px] bg-[#0a0f14] rounded-3xl  border border-gray-800">

        {/* Left Section: Form */}

        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">

          <h2 className="text-[36px] md:text-[47px] text-white  font-manrope">

            Get Started Now

          </h2>

          <p className="text-gray-400 text-base md:text-xl mb-8 font-manrope">

            Lorem ipsum dolor sit amet consectetur. Adipiscing lectus tortor sit

            id risus amet.

          </p>



          <div className="space-y-6">

            {/* Email Field */}

            {/* <div>

              <label className="block text-[#FFFFFFCC] text-xl mb-2 font-manrope">Admin Email</label>

              <input

                type="email"

                placeholder="Example@gmail.com"

                value={email}

                onChange={(e) => setEmail(e.target.value)}

                disabled={step > 1}

                className={`font-manrope w-full bg-transparent border rounded-full px-5 py-3 text-white focus:outline-none transition-all ${error ? 'border-red-600' : 'border-gray-700 focus:border-cyan-400'} ${step > 1 ? 'opacity-50' : ''}`}

              />

              {error && <p className="text-red-600 text-xs mt-2 ml-2 font-manrope">{error}</p>}

              {step === 1 && (

                <button onClick={handleVerifyEmail} className="mt-2 text-cyan-400 text-xs hover:underline font-manrope">Verify Email</button>

              )}

            </div> */}

            {/* Admin Email Section */}

            <div className="flex flex-col">

              <label className="block text-gray-400 text-base md:text-xl mb-2 ml-1 font-manrope">

                Admin Email

              </label>



              <div className="relative group">

                <input

                  type="email"

                  placeholder="Example@gmail.com"

                  value={email}

                  onChange={(e) => setEmail(e.target.value)}

                  disabled={step > 1}

                  className={`w-full bg-transparent border rounded-full px-5 py-3 pr-28 text-white focus:outline-none transition-all

        ${error ? "border-red-600" : "border-gray-700 focus:border-cyan-400"}

        ${step > 1 ? "opacity-50 cursor-not-allowed" : ""}`}

                />



                {/* Inline Verify Button */}

                {step === 1 && email.length > 0 && (

                  <button

                    onClick={handleVerifyEmail}

                    disabled={loading}

                    className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors bg-black/20 py-1 px-2 rounded-lg"

                  >

                    {loading ? "Checking..." : "Verify"}

                  </button>

                )}

              </div>



              {/* Error Message */}

              {error && (

                <p className="text-red-600 text-xs mt-2 ml-4 animate-pulse">

                  {error}

                </p>

              )}

            </div>



            {/* OTP Field */}

            <div className={step < 2 ? "opacity-30 pointer-events-none" : ""}>

              <label className="block text-gray-400 text-base md:text-xl mb-2 font-manrope">

                OTP

              </label>

              <div className="relative">

                <input

                  type="text"

                  placeholder="Share the OTP received on the admin email"

                  value={otp}

                  onChange={(e) => setOtp(e.target.value)}

                  disabled={step !== 2}

                  className="w-full bg-transparent border border-gray-700 rounded-full px-5 py-3 text-white focus:outline-none focus:border-cyan-400 font-manrope"

                />

                <button

                  onClick={handleVerifyOTP}

                  className="absolute right-5 top-1/2 -translate-y-1/2 font-manrope text-cyan-400 text-sm hover:text-cyan-300"

                >

                  Verify

                </button>

              </div>

              <button className="mt-2 text-gray-500  hover:underline font-manrope">

                Resend OTP

              </button>

            </div>



            {/* Password Field */}

            <div className={step < 3 ? "opacity-30 pointer-events-none" : ""}>

              <label className="block text-gray-400 text-base md:text-xl mb-2  font-manrope">

                Password

              </label>

              <div className="relative">

                <input

                  type="password"

                  placeholder="••••••••••••••••"

                  value={password}

                  onChange={(e) => setPassword(e.target.value)}

                  disabled={step !== 3}

                  className="w-full bg-transparent border border-gray-700 rounded-full px-5 py-3 text-white focus:outline-none focus:border-cyan-400"

                />

              </div>

            </div>



            {/* Submit Button */}

            <button

              disabled={step < 3}

              className={`main-btn flex font-manrope ${

                step === 3

                  ? "bg-cyan-400 text-black"

                  : " cursor-not-allowed"

              }`}

            >

             <div className="text bg-secondary text-white text-base lg:text-lg leading-10 py-1 px-6 lg:leading-[40px] rounded-[50px]">

          Sign In

          </div>

          <Arrow customClass="bg-secondary text-white -rotate-45 " />

            </button>

           



            <button className="text-gray-400 text-base md:text-xl block mt-4 hover:underline  font-manrope">

              Can't Sign In? <span className="text-white">Forgot password</span>

            </button>

          </div>

        </div>



        {/* Right Section: Image/Branding */}

        <div className="hidden md:block w-1/2 p-4">

          <div className="h-full w-full rounded-2xl overflow-hidden relative">

            <img src="/admin-login.png" alt="Branding" className="w-full" />

            {/* <div className="absolute top-8 left-8">

              <span className="text-white text-xs font-bold uppercase tracking-widest opacity-70">The Varallo Group</span>

            </div> */}

          </div>

        </div>

      </div>

    </div>

  );

};



export default AdminLogin;