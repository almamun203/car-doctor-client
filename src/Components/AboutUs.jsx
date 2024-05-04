import person from "../assets/assets/images/about_us/person.jpg";
import parts from "../assets/assets/images/about_us/parts.jpg";

const AboutUs = () => {
  return (<> 
    <div className="hero min-h-screen">
       
      <div className="hero-content flex-col lg:flex-row">
        <div className="md:w-[50%] relative flex flex-col justify-center">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img src={parts} className="absolute w-1/2 md:w-1/2 border-8 border-white rounded-lg shadow-2xl -bottom-10 right-24" />
        </div>
        <div className="md:w-[50%]">
        <h3 className="text-sm text-[#FF3811] font-bold mb-5">About Us</h3>
          <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
          <p className="py-6">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don`t look even slightly believable. 
          <br />
          the majority have suffered alteration in some form, by injected humour, or randomized words which don`t look even slightly believable. 
          </p>
          <button className="btn hover:text-black bg-[#FF3811] border-none text-white">Get More Info</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
