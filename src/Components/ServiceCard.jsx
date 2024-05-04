import PropTypes from 'prop-types'
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({service}) => {
    const {title,img,price} = service;
    return (
        <div className="rounded-xl  border-2 hover:shadow-xl hover:scale-105">
        <figure className="p-7">
          <img src={img} alt="" className="rounded-xl" />
        
        <div className=" text-left">
          <h2 className="text-2xl my-2 font-bold">{title}</h2>
          
          <div className="flex w-full items-center justify-between">
            <p className='font-semibold text-[#FF3811]'>Price: ${price}</p>
            <p className='text-[#FF3811] p-2 rounded-full hover:bg-slate-200  cursor-pointer'><FaArrowRight /></p>
          </div>
        </div>
        </figure>
      </div>
    );
};

ServiceCard.propTypes={
    service:PropTypes.object
}



export default ServiceCard;