import React from "react"
import logo from "../assets/logo_footer.svg"
import Button from "../components/input/Button.js"
import chevron from '../assets/chevron-right.png'

const Footer = () =>{
    return(
        <footer className="h-[400px] bg-[#21252B] px-[234px] py-[63px] text-white font-semibold">
            <div className="max-w-[200px] ">
                <img src={logo}></img>
            </div>
            <div className="grid grid-cols-4 mt-3">
                <div className="max-w-[210px] ">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi</p>
                    <button className="h-[40px] w-[205px] bg-[#89CDFE] mt-5 rounded">Get Quote</button>
                </div>
                <div>
                    <h5 className="font-bold text-xl">Contact info</h5>
                    <hr className="max-w-[100px] h-[5px]"></hr>
                    <p className="pb-1">259 Westminster <br/>StreetRowlett, TX 75088</p>
                    <p className="py-1">(856) 342-8875</p>
                    <p>buisness@gmail.com</p>
                    
                </div>
                <div>
                    <h5 className="font-bold text-xl">Quick Links</h5>
                    <hr className="max-w-[100px] h-[5px]"></hr>
                    <div className="grid grid-rows-3 gap-1">
                        <div className="flex">
                            <a href="#Hero">Home</a>
                            <img src={chevron} className='w-[20px] mx-2 justify-center align-middle'></img>
                        </div>
                        
                        <div className="flex">
                            <a href="#About-section">About Us </a>
                            <img src={chevron} className='w-[20px] mx-2 justify-center align-middle'></img>
                        </div>
                        <div className="flex">
                            <a href={"./ContactUs"}>Contact Us</a>
                            <img src={chevron} className='w-[20px] mx-2 justify-center align-middle'></img>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            <hr className="mt-8"></hr>
            <p className="my-8 font-normal">©2022 Tetra, All Rights reserved</p>
        </footer>
    )
}

export default Footer