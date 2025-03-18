import React from 'react'
import { useState } from "react";
// import { AnimatePresence } from 'motion/react';
import { FaPlay } from "react-icons/fa";
import HeroImg from "../../../images/banner.png"
import { motion } from 'motion/react';
import { SlideLeft, SlideRight } from '../../utility/animation';
import VideoButton from '../VideoButton/VideoButton';


const Hero = () => {
    return <>
        <section>
            <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative'>
                {/* Brand info */}
                <div className='flex flex-col justify-center py-14 md:py-0 font-playfair'>
                    <div className='text-center md:text-left'>
                        <motion.h1
                        variants={SlideRight(0.6)}
                        initial="hidden"
                        animate="visible"
                        className='text-5xl lg:text-6xl font-bold leading-[1] xl:leading-[1]'>Embedding Ideas and Intelligence into <span className='text-primary'>Reality</span>{" "} </motion.h1>
                        <motion.p 
                        variants={SlideRight(1.2)}
                        initial="hidden"
                        animate="visible"
                        className='text-gray-600 xl:max-w-[500px]'>
                        Empower your business with next-gen technology, seamless integrations, and future-proof infrastructure. From full-stack development to cloud computing and cybersecurity, we deliver IT solutions that drive efficiency, growth, and innovation.
                        </motion.p>
                        {/* button section */}
                        <VideoButton/>
                    </div>
                </div>
                {/* Hero Image  */}
                <div className='flex justify-center items-center'>
                    <motion.img 
                    variants={SlideLeft(0.6)}
                    initial="hidden"
                    animate="visible"
                    src={HeroImg} alt="" className='w-[325px] md:w-[550px] xl:w-[700px] drop-shadow' />
                </div>
            </div>
        </section>
    </>
};

export default Hero