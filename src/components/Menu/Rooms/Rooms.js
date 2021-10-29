import React, {useState, useEffect} from 'react';
import Room from "./components/Room";
import AddRoom from "./components/AddRoom";
import "./Rooms.css";

const Rooms = ({room, setRoom, createRoom, rooms, setRooms}) => {

    let toRender;
    if(rooms)
    {
        toRender = rooms.map( (currentRoom) => 
            <Room key={currentRoom.topic} room={room} setRoom={setRoom} currentRoom={currentRoom} setRooms={setRooms}/>
        )
    }

    return (
        <div className="Rooms">
                <AddRoom createRoom={createRoom} setRoom={setRoom}/>
                {toRender}
            </div>
    )
}

export default Rooms