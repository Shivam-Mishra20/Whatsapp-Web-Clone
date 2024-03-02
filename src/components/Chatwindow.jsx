import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";

import { MdEdit } from "react-icons/md";



const Chatwindow = () => {
    return (
        <>
            <div className=' bg-[#F0F2F5] h-screen overflow-hidden   '>


                <div className=' flex flex-col items-center     '>

                    <div className=' text-white h-[139px]  bg-[#008069]  w-full '>
                        <div className=' flex gap-5 text-xl   text-start mt-16 px-4  '>
                            <FaArrowLeft />
                            <h3>Profile</h3>
                        </div>

                    </div>

                    <div className=' text-center flex flex-col w-100 h-100vh'>
                        <img src="https://img.freepik.com/free-vector/x9maha-shivratri-festival-background-with-shiv-ling-card-holiday-design_1035-22319.jpg?t=st=1709109846~exp=1709113446~hmac=9c3596562763c284cc7aea8527ac4c7ce423f86b2c85ed0cfed3deab31ea2fe8&w=740" alt="" className=' w-[200px] h-[180px] rounded-full  mx-auto  p-2 border hover:border-gray-400 hover:shadow-lg  mt-5' />

                    </div>






                </div>
                <div className=' text-start  bg-white py-1 px-4   min-h-22 mt-7  '>

                    <h2 className=' text-green-400 mb-2 '>Your name </h2>
                    <div className=' flex justify-between items-center'>
                        <h3 >Shivam mishra</h3>
                        <MdEdit  className=' text-2xl text-gray-600' />


                    </div>

                </div>
                <div className=' py-1 px-2 text-l'>
                     This is not your username or pin .This name will visible to your whatsapp contacts
                </div>
               
                <div className=' text-start  bg-white py-1 px-4   min-h-22 mt-7  '>

                    <h2 className=' text-green-400 mb-2 '> About </h2>
                    <div className=' flex justify-between items-center'>
                        <h3 > Jai shree Ram 🙏</h3>
                        <MdEdit  className=' text-2xl text-gray-600' />


                    </div>

                </div>





                

            </div>
        </>
    )
}

export default Chatwindow