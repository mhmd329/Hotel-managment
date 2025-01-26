import React, { createContext, useEffect, useState } from "react";
import { roomData } from "../data";

export const RoomContext = createContext();
const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [total, setTotal] = useState(0);
  const [adults, setAdults] = useState("0 Adult");
  const [kids, setKids] = useState("0 kid");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  },[adults,kids]);
  const handleClick = (e) => {
    e.preventDefault();
setLoading(true)
    const newRooms = roomData.filter((room) => {
      return total <= room.maxPerson;
    });
    setTimeout(() => {
      setRooms (newRooms)
      setLoading(false)
    }, 2000);
    
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
        loading
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
