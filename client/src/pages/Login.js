import React from 'react'
import LoginImg from "../assets/user-login.svg"
import Button from "../components/input/Button.js"
import useMediaQuery from "../hooks/useMediaQuery";

const Login = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
    const isBelowLargeScreens = useMediaQuery("(max-width: 1024px)");
    return(
        <div className={'d-flex flex-row content-center h-full'}>
            <div className={`max-w-[1400px] mx-auto h-[calc(100%-40px)] flex content-center ${
            isAboveMediumScreens ? "justify-between" : "justify-center"
            } items-center gap-8 px-4`}>

        
                {/* Login Form */}
                <form className={`w-[480px] h-[540px] bg-white p-10 place-self-end self-center rounded-xl shadow-md flex flex-col justify-center z-[30] ${isBelowLargeScreens ? "ml-auto" : ""} ${!isAboveMediumScreens ? "ml-0" : ""}`}>
                    <div>
                        <h1 className="text-center font-bold text-5xl">Welcome Back</h1>
                        <div className="relative py-4">
                            <div className="absolute inset-0 flex items-center top-[5px]">
                                <div className="w-full border-2 border-black-500 border-opacity-100"></div>
                            </div>
                            <div className="relative flex justify-center">
                                <span className="bg-white px-4 font-semibold text-2xl my-7">Login to your account</span>
                            </div>
                        </div>
                        <div className='grid grid-rows-2 gap-5'>
                            <div className='flex flex-col'>
                                <label htmlFor="username" className='font-bold py-1'>User Name</label>
                                <input type="text" id="username" className="h-12 px-3 bg-white border-2 border-slate-500 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md"></input>
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="password" className='font-bold py-1'>Password</label>
                                <input type="password" id="password" className="h-12 px-3 -white border-2 border-slate-500 focus:outline-none focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md"></input>
                            </div>
                        </div>
                        
                        <Button type='submit' content="Log in"></Button>
                        <div className='py-6'>Don't have an account? <a href='../SignUp' className='underline text-[#89CDFE]'>Sign Up</a> here.</div>
                    </div>
                </form>
                
                {/* Image Right */}
                <div className={`${
                isBelowLargeScreens
                    ? "absolute -left-[3vw] top-[50%] -translate-y-[50%]"
                    : ""
                }`}>
                    <img src={LoginImg} alt="user-login-img"/>
                </div>
            </div>
            <div className='h-[10px] text-[#A9A9A9] ml-[10%]'>©2022 Tetra Fuel, All Rights reserved</div>
        </div>
    )
}

export default Login