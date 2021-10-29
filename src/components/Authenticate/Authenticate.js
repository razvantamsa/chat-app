import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./Authenticate.css";
import Navbar from "./Navbar/Navbar";
import * as api from "../../api/api";

const Authenticate = () => {

    const [rooms, setRooms] = useState([]);
    const [users, setUsers] = useState([]);

    //functions
    async function initiateRoomsAndUsers(){
        let initRooms = await api.getRooms();
        let initUsers = await api.getUsers();
        setRooms(initRooms);
        setUsers(initUsers);
    }

    async function validateInput(e){

        const userRepeats = users.find(user => user.name === username);
        if(userRepeats || !username || !room_name)
            e.preventDefault();
    }

    useEffect(() => {
        //effect
        initiateRoomsAndUsers();
        return () => {
            //cleanup
        }
    }, [JSON.stringify(rooms)]);


    const [username, setUsername] = useState("");
    const [room_name, setRoomName] = useState("");

    return (
        <div className="Authenticate">
            <Navbar room_name={room_name} setRoomName={setRoomName} rooms={rooms} setRooms={setRooms} users={users}/>
            <div className="joinRoom form-group">
                <h3>Chat Now!</h3>
                <input 
                    value={room_name} 
                    onInput={(e) => setRoomName(e.target.value)}
                    className="selectedRoom form-control"
                    placeholder={(room_name) ? room_name : "No room selected"}
                />
                <input
                    value={username}
                    onInput={(e) => setUsername(e.target.value)}
                    placeholder="Name"
                    className="form-control"
                />
                <Link onClick={(e) => validateInput(e)} to={`/chat?name=${username}&room_name=${room_name}`}>
                    <button className="form-control" type="submit">Submit</button>
                </Link>
            </div>
        </div>
    )
}

export default Authenticate
