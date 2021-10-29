import React, {useState, useEffect} from 'react'
import * as api from "../../../../api/api";

const Room = ({room_name, setRoomName, currentRoom, setRooms}) => {

    const [userLen, setUserLen] = useState(0);

    async function countUsersInRoom(topic){
        let users = await api.getUsers();
        let usersInRoom = users.filter( user => user.room === topic);
        let userLen = usersInRoom.length;
        console.log(users);
        setUserLen(userLen);
        if(userLen === 0){
            const deletedRoom = await api.deleteRoom(currentRoom.topic);
            const rooms = await api.getRooms();
            setRooms(rooms);
        }
    }

    useEffect(() => {
        // effect
        countUsersInRoom(currentRoom.topic);
        return () => {
            //cleanup
        }
    }, [userLen])

    return (
        <div className="room mb-2 border-bottom border-white" onClick={() => setRoomName(currentRoom.topic)}>
            <p className="room-dropdown p-3">Topic: {currentRoom.topic} <i className="fas fa-sign-in-alt"></i></p>
            <div className="room-content">
                <p>Users: {userLen}</p>
                <p>Nr of messages: {currentRoom.messages.length}</p>
            </div>
        </div>
    )
}

export default Room
