import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <div className="text-center ">
                <h3 className="text-sm font-bold text-[#FF3811]">Services</h3>
                <h3 className="text-5xl font-bold">Our Services Area</h3>
                <p className="text-sm ">the majority have suffered alteration in some form, by injected humour, or randomized words which don`t look even slightly believable. </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center my-10">
                    {
                        services.map(service=><ServiceCard
                             key={service._id} 
                             service={service}></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;