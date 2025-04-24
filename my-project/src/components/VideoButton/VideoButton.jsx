import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaTimes } from "react-icons/fa";
import { SlideRight } from "../../utility/animation";
// import video from '../../../videos/MicrosoftTeams-video.mp4';
import { Link, useNavigate } from "react-router-dom"; // Updated import

const VideoButton = () => {
    const [showVideo, setShowVideo] = useState(false);
    const navigate = useNavigate(); // Add navigate hook

    return (
        <div>
            <motion.div
                variants={SlideRight(1.5)}
                initial="hidden"
                animate="visible"
                className="flex justify-center items-center gap-8 md:justify-start !mt-4"
            >
                <button
                    className="primary-btn flex justify-center items-center gap-2"
                    onClick={() => navigate('/product')} // Fixed onClick handler
                >
                 Explore our Products
                </button>
            </motion.div>

           
                    <button
                            // onClick={() => setShowVideo(false)}
                            className="absolute top-3 right-3 text-white text-xl p-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                            aria-label="Close Video"
                        >
                            <FaTimes />
                        </button>
             
            
        </div>
    );
};

export default VideoButton;
