const AmbulanceAbout = () => {
  return (
<div>


        <div>
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
                About
               <span className="text-irisBlueColor font-bold text-[24px] leading-9">
               Basic Life Support Ambulance

                </span> 
            </h3>
            <p className="text_para">
            Basic Life Support Ambulance is commonly known as BLS ambulance and it provides basic life support to the patient or senior aboard. Equipped with the latest medical equipment such as an automatic external defibrillator, blood pressure monitoring equipment, Pulse Oximetry and Oxygen delivery services combined with competent nurses to assist patients who are not physically and emotionally stable. <br /><br />Basic life support ambulances are typically emergency ambulances and aid the necessary medical support during the transit till the patient is transported to the hospital.
            </p>
        </div>

       
        <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                Insights
            </h3>

            <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                <li className="p-4 rounded bg-[#fff9ea]">
                    <span className="text-yellowColor text-[15px] leading-6 font-semibold text-lg">
                        800+
                    </span>
                    <p className="text-[16px] leading-6 font-medium text-textColor">
                        Life Assisted
                    </p>

                
                </li>

                <li className="p-4 rounded bg-[#fff9ea]">
                    <span className="text-yellowColor text-[15px] leading-6 font-semibold text-lg">
                        Quick Response Time
                    </span>
                    <p className="text-[16px] leading-6 font-medium text-textColor">
                        Less than 15min.
                    </p>

                
                </li>
            </ul>
        </div>

    </div>
  );
};

export default AmbulanceAbout;