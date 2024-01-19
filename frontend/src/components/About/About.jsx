import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutcardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";



 const About = () => {
  return (<section>
    <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">

            {/* about image */}
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">

                <img src={aboutImg} alt="" />

                <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">

                    <img src={aboutcardImg} alt="" />

                </div>
            </div>

            {/* about text start */}

            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">

                <h2 className="heading">Proud to be the one of the nations Best Doctor</h2>
                <p className="text__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa illum vel pariatur atque eaque sint magnam rem necessitatibus quae libero, esse animi eos reprehenderit incidunt porro ratione? Similique aliquid nemo natus, eligendi rem cumque voluptas enim aliquam nisi earum exercitationem ut dolorum reiciendis quaerat, consectetur voluptatem neque corporis. Assumenda, soluta?</p>

                <p className="text__para mt-[30px]"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique atque perspiciatis, facilis molestias ipsa exercitationem recusandae ea enim deleniti! Pariatur accusamus voluptatibus esse, nulla suscipit fugit enim vel aliquam beatae voluptas harum minus id ab placeat praesentium blanditiis doloremque ex corporis libero fugiat facilis! Explicabo recusandae eveniet beatae eaque id?
                
                </p>

                <Link to="/"><button className="btn">Learn More</button></Link>

            </div>
             

            </div>

    </div>

  </section>
  );
};

export default About;
