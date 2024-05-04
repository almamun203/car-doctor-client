import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import image1 from '../assets/assets/images/banner/1.jpg'
import image2 from '../assets/assets/images/banner/2.jpg'
import image3 from '../assets/assets/images/banner/3.jpg'
import image4 from '../assets/assets/images/banner/4.jpg'
import image5 from '../assets/assets/images/banner/5.jpg'
import image6 from '../assets/assets/images/banner/6.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full rounded-2xl">
        <div id="slide1" className="carousel-item relative w-full  rounded-2xl">
          <img src={image1} className="w-full" />
          <div className="absolute flex gap-4 transform -translate-y-1/2  right-5 bottom-5">
            <a href="#slide6" className="btn btn-circle hover:text-black bg-transparent text-white"><FaArrowLeft /></a> 
            <a href="#slide2" className="btn btn-circle border-none bg-[#FF3811] "><FaArrowRight/></a>
          </div>
          <div className='absolute flex l   text-white  w-1/3 bg-gradient-to-r from-[#151515] h-full to-[rgba(21,21,21,0)] items-center pl-4 md:pl-16'>
     <div className='flex flex-col md:gap-8'>
     <h2 className="md:text-6xl text-3xl font-bold">Affordable  Price For  Car Servicing</h2>
     <p className="text-sm font-semibold">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
     <div className='flex gap-3 '>
      <button className='btn hover:text-black bg-[#FF3811] border-none text-white'>
            Discover More
      </button>
      <button className='btn hover:text-black bg-transparent border-white text-white '>
           Latest Project
      </button>
     </div>
     </div>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={image2} className="w-full" />
          <div className="absolute flex gap-4 transform -translate-y-1/2 right-5 bottom-5">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={image3} className="w-full" />
          <div className="absolute flex gap-4 transform -translate-y-1/2 right-5 bottom-5">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={image4} className="w-full" />
          <div className="absolute flex gap-4 transform -translate-y-1/2 right-5 bottom-5">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide5" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={image5} className="w-full" />
          <div className="absolute flex gap-4 transform -translate-y-1/2 right-5 bottom-5">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide6" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={image6} className="w-full" />
          <div className="absolute flex gap-4 transform -translate-y-1/2 right-5 bottom-5">
            <a href="#slide5" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;