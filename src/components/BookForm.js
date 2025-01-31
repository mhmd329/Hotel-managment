import React, { useContext } from "react";
import CheckIn from "./CheckIn";
import AdultsDropdown from "./AdultsDropdown";
import KidsDropDown from "./KidsDropdown";
import CheckOut from "./CheckOut";
import { RoomContext } from "../context/RoomContext";
const BookForm = () => { 
  const {handleClick} = useContext(RoomContext)
  return (
    <form className="h-[300px]  w-full lg:h-[70px]">
      <div className="flex flex-col w-full h-full lg:flex-row">
        <div className="flex-1 w-full border-r">
          <CheckIn/>
        </div>
        <div className="flex-1 border-r">
          <CheckOut/>
        </div>
        <div className="flex-1 border-r">
          <AdultsDropdown/>
        </div>
        <div className="flex-1 border-r">
          <KidsDropDown/>
        </div>
        <button onClick={(e)=>handleClick(e)} type="submit" className="text-[15px] tracking-[3px] font-tertiary uppercase text-white flex-1 transition-all px-8 flex justify-center items-center btn-primary ">check now</button>
      </div>
    </form>
  );
};

export default BookForm;
