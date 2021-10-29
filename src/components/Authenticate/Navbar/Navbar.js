import React from 'react'
import Rooms from "../Rooms/Rooms";

const Navbar = ({room_name, setRoomName, rooms, setRooms, users}) => {

    console.log(users);

    return (
        <div className="Navbar">
            <div className="displayRooms">
                <i class="fas fa-comments"></i>
                <Rooms room_name={room_name} setRoomName={setRoomName} rooms={rooms} setRooms={setRooms}/>
            </div>
            <div className="displayUsers">
                <i class="fas fa-users"></i>
                <div class="Users">
                    { users.map( user => (
                        <div className="joinUsers mb-3"> 
                            <p className="user"><i className="fas fa-user"></i> {user.name}</p>
                            <p className="user"><i className="fas fa-street-view"></i>{user.room}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="displayInfo">
                <i class="fas fa-info-circle"></i>
                <p className="Info">Defines the columns and rows of the grid with a space-separated list of values. 
                The values represent the track size, and the space between them represents the grid line.</p>
            </div>
        </div>
    )
}

export default Navbar
