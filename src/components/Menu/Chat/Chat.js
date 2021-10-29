import React, { useEffect, useState } from 'react'
import Message from "./components/Message";
import Bar from "./components/Bar";
import "./Chat.css";

const Chat = ({user, users, room}) => {

    const [activeUsers, setActiveUsers] = useState([]);

    async function initActiveUsers(){
        let x = await users.filter( obj => obj.room === room.topic);
        setActiveUsers(x);
    }

    function sendMessage(e){
        console.log(e.target.value);
        e.preventDefault();
    }

    useEffect(() => {
        
        initActiveUsers();

        return () => {
            setActiveUsers([]);
        }
    }, [room.topic, user.id, JSON.stringify(users)])
    
    return (
        <div className="Chat">
            <h1>{room.topic}</h1>
            <Bar user={user} activeUsers={activeUsers} room={room}/>
            <div className="messages">
                Ogey
                {(room.messages.map( (message) => 
                    <Message message={message} user={user}/>
                ))}
            </div>
            <form className="postMessage form-group" onSubmit={(e) => sendMessage(e)}>
                <input type="text" className="form-control p-4" placeholder="Message here"/>
                <button type="submit" className="form-control p-4">Send</button>
            </form>
        </div>
    )
}

export default Chat
