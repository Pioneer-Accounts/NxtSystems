import React from 'react'
import { MdOutlineWebhook } from "react-icons/md";
import { SiAppstore } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { delay } from 'motion';
import { motion } from 'motion/react';
import { div } from 'motion/react-client';
import { SlideLeft } from '../../utility/animation';


const EquipmentData = [
    {
        id:1,
        title:"Web Development",
        desc: "Build modern and scalable websites that enhance user experience and drive business growth.",
        icon: <MdOutlineWebhook/>,
        delay: 0.3,
    },
    {
        id:2,
        title:"App Development",
        desc: "Create intuitive and innovative mobile apps that deliver exceptional performance on all platforms.",
        icon: <SiAppstore/>,
        delay: 0.6,
    },
    {
        id:3,
        title:"Digital Marketing",
        desc: "Boost your online presence with tailored digital marketing strategies and SEO services.",
        icon: <FaDatabase/>,
        delay: 0.9,
    },
    
]

const Equipments = () => {
  return (
    <div>
        <div className="container py-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
                <div className='space-y-6 p-6'>
                    <h1 className='text-3xl md:text-4xl font-bold'>Our Exclusive Services</h1>
                    <p className='text-gray-500'></p>
                </div>
                {EquipmentData.map((item)=>{
                    return(
                        <motion.div
                        variants={SlideLeft(item.delay)}
                        initial="hidden"
                        whileInView="visible"
                        key={item.id}
                        className='space-y-4 p-6 bg-[#fbfbfb] hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]'>
                        <div className='text-4xl'>{item.icon}</div>
                        <p className='text-2xl font-semibold'>{item.title}</p>
                        <p className='text-gray-500'>{item.desc}</p>    
                        </motion.div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Equipments