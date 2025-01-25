import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosWifi } from "react-icons/io";
import { HiTv } from "react-icons/hi2";
import { HiLightBulb } from "react-icons/hi";
import { GiVolleyballBall } from "react-icons/gi";
import { IoMdSchool } from "react-icons/io";
import { Link } from 'react-router-dom';
import BillsCollection from './BillsCollection';





const Bills = () => {
  return (
    <div className='bg-white h-[80vh] overflow-scroll '>


      {/* -------Page Title------ */}
      <div className='flex justify-center text-2xl font-bold text-purple-800 '>
        <h1>BILLS</h1>
      </div>
      {/* -------End of page title-------- */}



     
      <div>
        <BillsCollection />
      </div>

    </div>
  )
}

export default Bills