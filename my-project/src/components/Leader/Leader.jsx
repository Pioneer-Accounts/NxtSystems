import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ceopic from "../../../images/ceopic.jpg"


const Leader = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    return (
      <div className='w-3/4 m-auto'>
          <div className='mt-20'>
            <h2 className='text-center text-4xl mb-4 font-playfair'>Our <span className='text-primary font-playfair'>Leaders</span></h2>
          <Slider {...settings}>
              {data.map((d)=>(
                  <div className='bg-gray-300 h-[330px] text-black rounded-xl font-playfair'>
                      <div className='h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center hover:bg-indigo-600'>
                          <img src={d.img} className='h-52 w-52 rounded-sm hover:scale-105' />
                      </div>

                      <div className='flex flex-col justify-center items-center gap-4 p-4'>
                        <p className='text-xl font-semibold'>{d.name}</p>
                        <p>{d.review}</p>
                      </div>
                  </div>
              ))}
              </Slider>
          </div>
      </div>
    )
  }



const data = [
    {
        name: `Dr.Bikas Maity`,
        img:`../../../images/ceopic.jpg`,
        review: `CEO/MD`
    },
    {
        name: `Hemanta Bhaumik`,
        img:`../../../images/exepic.jpg`,
        review: `Executive`
    },
    {
        name: `Dr.Nirmal Das`,
        img:`../../../images/headpic.jpg`,
        review: `Head, IT Division`
    },
    {
        name: `Mr.B.K.Bera`,
        img:`../../../images/capic.jpg`,
        review: `Chartered Accountant`
    },

]




export default Leader