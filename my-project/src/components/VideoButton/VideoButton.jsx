import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaTimes } from "react-icons/fa";
import { SlideRight } from "../../utility/animation";
import video from '../../../videos/MicrosoftTeams-video.mp4';

const VideoButton = () => {
    const [showVideo, setShowVideo] = useState(false);

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
                    onClick={() => setShowVideo(true)}
                >
                    <FaPlay /> Watch Now
                </button>
            </motion.div>

            {/* Video Modal */}
            {showVideo && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
                    onClick={() => setShowVideo(false)}
                >
                    <div
                        className="relative w-11/12 md:w-3/4 h-3/4 bg-black rounded-lg overflow-hidden shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        

                        {/* Video Player */}
                        <video
                            className="w-full h-full object-contain"
                            controls
                            autoPlay
                            src={video}
                        />
                    </div>
                    <button
                            onClick={() => setShowVideo(false)}
                            className="absolute top-3 right-3 text-white text-xl p-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                            aria-label="Close Video"
                        >
                            <FaTimes />
                        </button>
                </div>
            )}
        </div>
    );
};

export default VideoButton;
