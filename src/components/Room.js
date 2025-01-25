import React from "react";
import { Link } from "react-router-dom";
import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";
const Room = ({ room }) => {
  const { id, name, image, size, maxPerson, description, price } = room;
  return (
    <div className="bg-white shadow-2xl min-h-[500px] group">
      <div className="overflow-hidden ">
        <img
          src={image}
          alt="room pic"
          className="group-hover:scale-110 transition-all duration-300 w-full"
        />
      </div>
      <div
        className="bg-white shadow-lg max-w-[300px] mx-auto h-[60px] 
      -translate-y-1/2 flex justify-center items-center uppercase font-tertiary
       tracking-[1px] font-semibold text-base"
      >
        <div className="flex justify-between w-[80%]">
          <div className="flex items-center gap-x-2">
            <div className="text-accent">
              <BsArrowsFullscreen className="text-[15px]" />
            </div>
            <div className="flex gap-x-1">
              <div>size</div>
              <div>{size}m2</div>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="text-accent">
              <BsPeople className="text-[18px]" />
            </div>
            <div className="flex gap-x-1">
              <div>max people</div>
              <div>{maxPerson}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link className=" no-underline" to={`/room/${id}`}>
        <h3 className="text-accent">{name}</h3>
        </Link>
        <p className="max-w-[300px] mx-auto mb-3 lg:mb-6">{description.slice(0,56)}</p>
      </div>
      <div className="text-center">
        <Link className=" no-underline ext-[15px] mx-auto tracking-[3px] font-tertiary uppercase text-white flex-1 transition-all px-8 flex justify-center items-center max-w-[240px] h-[48px]  btn-secondary" to={`/room/${id}`}>
        book now from ${price}
        </Link>
      </div>
    </div>
  );
};

export default Room;
