import React from 'react'

const Bar = ({user, activeUsers, room}) => {
    return (
        <div className="Bar">
            <ul>
                <li className="activeUser">{user.name}</li>
                <li>
                    <div className="dropcontent">
                        <i className="fas fa-cog"></i>
                        <div className="drop-down">
                            <p>Active users: {activeUsers.length + 1}</p>
                            <p>Messages in this room: {room.messages.length}</p>
                        </div>
                    </div>        
                </li>
                <li><i className="fas fa-times"></i></li>
            </ul>
        </div>
    )
}

export default Bar
