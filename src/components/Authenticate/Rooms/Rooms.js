import React, {useState, useEffect} from 'react';
import Room from "./components/Room";

const Rooms = ({room_name, setRoomName, rooms, setRooms}) => {

    let toRender;
    if(rooms)
    {
        toRender = rooms.map( (currentRoom) => 
            <Room key={currentRoom.topic} room_name={room_name} setRoomName={setRoomName} currentRoom={currentRoom} setRooms={setRooms}/>
        )
    }

    return (
        <div className="Rooms">
            {toRender}
        </div>
    )
}

export default Rooms