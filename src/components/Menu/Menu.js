import React, {useState, useEffect} from 'react';
import queryString from "query-string";
import Rooms from "./Rooms/Rooms";
import Users from "./Users/Users";
import Chat from "./Chat/Chat";
import * as api from "../../api/api";
import "./Menu.css";

const Menu = ({location}) => {

    const defaultRoom = {topic: "", messages: []};
    const defaultUser = {id: "", name: "", room: ""};
    const [user, setUser] = useState(defaultUser);
    const [room, setRoom] = useState(defaultRoom);
    const [rooms, setRooms] = useState([]);
    const [users, setUsers] = useState([]);
    const ENDPOINT = "localhost:5000";

    //functions
    async function initiateRoomsAndUsers(){
        
        let resultRooms = await api.getRooms();
        const otherRooms = resultRooms.filter( (obj) => obj.topic !== room.topic);
        setRooms(otherRooms);
        
        let resultUsers = await api.getUsers();
        const otherUsers = resultUsers.filter( (obj) => obj.id != user.id);
        setUsers(otherUsers); 
    }

    async function createRoom(topic){
        const body = {topic: topic};
        let x = await api.postRoom(body);
        initiateRoomsAndUsers();
    }

    async function setRoomUp(room_name){
        const [roomExists] = await api.getRoom(room_name);
        if(roomExists){
            setRoom( (room) => (
                console.log(roomExists.topic),
                {
                ...room,
                topic: roomExists.topic,
                messages: roomExists.messages
            }));
            console.log(room);
            return;
        }
        const newRoom = await api.postRoom({topic: room_name});
        setRoom(newRoom);
    }

    async function setUserUp(name, room_name){
        const result = await api.getUsers();
        const userExists = result.find(user => user.name === name);
        console.log("Topic of room is" + room.topic);
        if(userExists){
            setUser( (user) => ({
                ...user,
                name: userExists.name,
                room: userExists.room,
                id: userExists.id
              }));
        }
        else{
            const id = (Math.random() + 1).toString(36).substring(7);
            const newUser = await api.postUser({id: id, name: name, room: room_name});
            setUser(newUser);
        }
    }

    async function exitRoom(){
        if(user.id){
            const deletedUser = await api.deleteUser(user.id);
        }
        const usersLeft = await api.getUsers();
        const userExists = usersLeft.find(obj => obj.room === room.topic);
        console.log(userExists)
        if(!userExists){
            const deletedRoom = await api.deleteRoom(room.topic);
        }
    }

    useEffect(() => {
        //effect
        const {name, room_name} = queryString.parse(location.search);

        setRoomUp(room_name);
        setUserUp(name, room_name);
        initiateRoomsAndUsers();

        return () => {
            exitRoom();
        }
    }, [room.topic, user.name, location.search])

    return (
        <div className="Menu">
            <Rooms room={room} setRoom={setRoom} createRoom={createRoom} rooms={rooms} setRooms={setRooms}/>
            <Chat user={user} users={users} room={room}/>
            <Users users={users} setUsers={setUsers}/>
        </div>
    )
}

export default Menu
