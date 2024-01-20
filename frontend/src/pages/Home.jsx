import React from "react";
import doctor from "../assets/images/doctor.webp"
import Ambulance from "../assets/images/ambulance.jpg";
import Hospital from "../assets/images/hospital.jpg";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import ServiceList from "../components/Services/ServiceList";
import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import faqImg from "../assets/images/faq-img.png";
import FaqList from "../components/Faq/FaqList";
import About from "../components/About/about";
import icon01 from "../assets/images/icon01.png"
import icon02 from "../assets/images/icon02.png"
import icon03 from "../assets/images/icon03.png"
import {Link} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";

const Home = () => {
  return(
    <>

      {/* hero Section */}
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

              {/* hero content */}
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[50px] md:leading-[70px]">
                    We Help Patients Live a Healthy, Longer Life.
                  </h1>
                  <p className="text_para">
                  Discover seamless healthcare access at your fingertips. From scheduling doctor appointments to requesting emergency ambulance services, our platform simplifies the way you engage with healthcare. Enjoy real-time updates, user-friendly interfaces, and a comprehensive network of healthcare providers. Your well-being, just a click away."
                  </p>

                  <button className="btn">Book an Ambulance </button>
                </div>

                {/* hero counter */}
                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">300+
                    </h2>
                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                    <p className="text_para">Costumer Served</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">100+
                    </h2>
                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                    <p className="text_para">Ambulance Available</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">250+
                    </h2>
                    <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                    <p className="text_para">partnered Hospitals </p>
                  </div>
                </div>
              </div>
              {/* hero content */}


              <div className="flex gap-[30px] justify-end">
                <div className="mt-[30px]">
                  <img className=" rounded-lg w-full mb-[30px]" src={Ambulance} alt="" />
                </div>
                <div>
                  <img src={heroImg01} alt="" className="w-full mb-[30px]" />
                  <img src={Hospital} alt="" className="rounded-md w-full mb-[30px] border-"/>
                </div>
              </div>
            </div>
          </div>
      </section>
      {/* hero Section end */} 

      {/* how it start */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">Providing the best medical service
            </h2>
            <p className="text_para text-center">World class care for everyone. Our health system offer unmatched,expert healthcare.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between flex-col md:flex-row gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">

            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" className="h-28 w-28"/>
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic
                </p>

                <Link to= '/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[20px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none" >
                  <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                </Link>

              </div>

            </div>

            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" className="h-28 w-28"/>
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Book an Ambulance
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic
                </p>

                <Link to= '/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[20px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none" >
                  <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                </Link>

              </div>
            </div>

            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" className="h-28 w-28" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Book a Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic
                </p>

                <Link to= '/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[20px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none" >
                  <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                </Link>

              </div>

            </div>

          </div>
        </div>
      </section>
      {/* how it end */}

      {/* about start */}
      <About />
      {/* about end */}

      {/* =========== services section ==============*/}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our WebApp Features</h2>
            <p className="text_para text-center">World-class care for everyone. Our health system offers unmatched,  expert health care.
            </p>
          </div>

          <ServiceList/> 
        </div>
      </section>
      {/* =========== services section end ==========*/}

      {/* =========== features section ==============*/}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">

            {/* ========= features section ============*/}
            <div className="xl:w-[670px]">
              <h2 className="text-[30px] leading-9 text-headingColor font-[700]">Get Best Treatment during Emergency.
              </h2>

              <ul className="pl-4">
                <li className="text_para">
                  1.Quick Book an Ambulance.
                </li>
                <li className="text_para">
                  2. Search for your Doctor here,  Schedule the appointment directly.
                </li>
                <li className="text_para">
                  3. Get to the Hospital, get Treatment on Priority during Emergencies.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Book Ambulance Now</button>
              </Link>
            </div>

            {/* ============ feature img ============== */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />
            
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10:00 PM
                    </p>
                  </div>
                  <span className="w-12 h-12 ">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div className="w-[80px] lg:w-[110px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500]  rounded-full flex items-center">
  Emergency
</div>


                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Dr. Hansraj Hathi </h4>
                </div>

              </div>
            
            </div>

          </div>
        </div>
      </section>
      {/* =========== features section end ===========*/}
    
      {/* =============== faq section ================*/}
      <section>
        <div className="container">
          <div className="flex justify-center gap-[50px] lg:gap-20">
            <div className="w-1/4 hidden md:block">
              <img src={faqImg} alt="" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Most questions by our beloved patients
              </h2>

              <FaqList />
            </div>

          </div>
        </div>
      </section>
      {/* ============== faq section end =============*/}
    
    </> 
  );  
};

export default Home;