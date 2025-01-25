import React, { createContext, useEffect, useState } from "react";
import { roomData } from "../data";

export const RoomContext = createContext();
const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [total, setTotal] = useState(0);
  const [adults, setAdults] = useState("0 Adult");
  const [kids, setKids] = useState("0 kid");
  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  });
  const handleClick = (e) => {
    e.preventDefault();
    console.log(total);
    const newRooms = roomData.filter((room) => {
      return total <= room.maxPerson;
    });
    setRooms (newRooms)
  };
  return (
    <RoomContext.Provider
      value={{
        rooms,
        adults,
        setAdults,
        kids,
        setKids,
        total,
        setTotal,
        handleClick,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
