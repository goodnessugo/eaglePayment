import React, { useState } from 'react'
import { BiTransferAlt } from 'react-icons/bi';
import { FaList } from 'react-icons/fa';
import { IoIosWifi } from 'react-icons/io';
import { LiaMoneyBillWaveSolid } from 'react-icons/lia';
import { SlClose } from "react-icons/sl";
import { TbDeviceMobileMessage } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const SideNavigation = () => {


    const [modal, setModal] = useState(false);


    const toggleModal = () => {
        setModal(!modal)
    }



    return (
        <div>



            {/* <div className='top-0 left-0  bg-gray-500/50  w-screen h-[100vh]'>
                <div className='  bg-yellow-500 w-[80vw] h-[100vh]'>

                    <div className='flex justify-between items-center px-5 bg-red-500  h-[10vh]'>
                        <h1>Account Name</h1>
                        <div>
                            <SlClose className='text-2xl' onClick={toggleModal} />
                        </div>
                    </div>

                </div>

            </div> */}

            <div className=' flex flex-col  h-[88vh] overflow-scroll  '>
                {/* overview */}
                <Link to='/' >
                    <div className='flex items-center gap-2 text-xl cursor-pointer hover:bg-gray-200 py-5 pl-3 '>
                        <FaList className='' />
                        <h1>Overview</h1>
                    </div>

                </Link>

                {/* Transfer */}
                <Link to='/transfer' >
                    <div className='flex items-center gap-2 text-xl cursor-pointer hover:bg-gray-200 py-5 pl-3 '>
                        <BiTransferAlt className='text-3xl' />
                        <h1>Transfer</h1>
                    </div>

                </Link>
                {/* Data */}
                <Link to='/' >
                    <div className='flex items-center gap-2 text-xl cursor-pointer hover:bg-gray-200 py-5 pl-3 '>
                        <IoIosWifi className='text-4xl text-red-500' />
                        <h1>Data</h1>
                    </div>

                </Link>
                {/* Airtime */}
                <Link to='/airtime' >
                    <div className='flex items-center gap-2 text-xl cursor-pointer hover:bg-gray-200 py-5 pl-3 '>
                        <TbDeviceMobileMessage className='text-3xl' />
                        <h1>Airtime</h1>
                    </div>

                </Link>
                {/* Bills */}
                <Link to='/bills' >
                    <div className='flex items-center gap-2 text-xl cursor-pointer hover:bg-gray-200 py-5 pl-3 '>
                        < LiaMoneyBillWaveSolid className='text-3xl' />
                        <h1>Bills</h1>
                    </div>

                </Link>


                {/* ---------logout-----*/}
                <Link to='/' >
                    <div className='flex bg-red-200 items-center gap-2 text-xl cursor-pointer hover:bg-red-500 py-5 pl-3 '>
                        <FaList className='' />
                        <h1>LOGOUT</h1>
                    </div>

                </Link>


            </div>


        </div>
    )
}

export default SideNavigation