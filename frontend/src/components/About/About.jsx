import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutcardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";



 const About = () => {
  return (<section>
    <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">

            {/* about image */}
            <div className="relative w-1/4 lg:w-1/ xl:w-[655px] z-10 order-2 lg:order-1">
  <img src={aboutImg} alt="" className="max-w-full h-auto" />
  
</div>


            {/* about text start */}

            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">

            <h2 className="text-[28px] font-bold leading-tight">Proud to be the one of the Nations Best Helpers</h2>
                <p className="text__para mt-[30px]">Providing ambulance services and doctor appointments simultaneously is a life-saving initiative that significantly reduces response times in emergency situations. 
</p>

                <p className="text__para mt-[30px]"> This dual approach ensures that immediate medical attention is initiated while the ambulance is en route to the location. This innovative strategy has proven to be instrumental in saving lives, offering timely medical intervention and care right from the moment an emergency is reported. By seamlessly integrating these services, we aim to optimize emergency response, enhance patient outcomes, and contribute to a safer and healthier community.
                
                </p>


            </div>
             

            </div>

    </div>

  </section>
  );
};

export default About;
