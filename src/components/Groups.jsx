import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
 import { Container } from './Sidebar';



const Groups = ({open ,setopen }) => {
  return (
    <Container className='   min-h-[94vh]   max-h-[94vh]  h-full          bg-white  '  onClick={()=>setopen(!open)}>
      <div className='  overflow-y-hidden'>

        <div className=' bg-[#008069]  flex items-center  gap-3 w-full h-20 pl-2'>
          <div>
            <FaArrowLeft className=' text-white text-2xl' />

          </div>
          <div>
            <span className=' text-white text-2xl'>Communities</span>
          </div>

        </div>

        <div className=' bg-white shadow-2xl h-[80px]  flex  items-center gap-2 p-2'>
          <span className=' bg-[#008069] rounded-xl p-1  text-3xl text-white'><HiMiniUserGroup />
          </span>
          <span className=' pl-2  text-l'> New Community</span>
        </div>

        <div>
          <div className=' bg-white mt-2 h-[150px]'>
            <div className=' flex items-center  border'>

              <div>
                <img src="https://img.freepik.com/free-photo/3d-realistic-isolated-isometric-instagram-icon_125540-2039.jpg?w=740&t=st=1709558672~exp=1709559272~hmac=82670e511b153002c09e3bb6383b7b7474d7c3cd24ef68f78e0b59b18853f141" alt="" className=' w-9 rounded-2xl p-1' />

              </div>
              <div>
                <span className='  text-black text-xl text-bold '>Instagram</span>

              </div>

            </div>



          </div>


        </div>


      </div>


    </Container>


  )
}

export default Groups