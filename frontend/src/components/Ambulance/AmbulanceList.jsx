
import {ambulance} from "../../assets/data/ambulance";
import AmbulanceCard from "./AmbulanceCard";

const AmbulanceList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {ambulance.map((ambulance)=> (
        <AmbulanceCard key={ambulance.id} ambulance={ambulance}/>
      ))}
    </div>
  );
};

export default AmbulanceList;