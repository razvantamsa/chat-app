import React, {useState} from 'react'

const AddRoom = ({setRoom, createRoom}) => {

    const [addRoom, setAddRoom] = useState("");

    return (
        <div className="createRoom">
        <h3>Create Room</h3>
        <input
            placeholder="Room Topic"
            className="form-control"
            value={addRoom}
            onInput={(e) => setAddRoom(e.target.value)}
        />
        <button 
            type="submit" 
            onClick={(e) => {(!addRoom) ? e.preventDefault() : 
                createRoom(addRoom);
                setRoom(addRoom); 
                setAddRoom("")}}
            className="form-control">
            Add
        </button>
    </div>
    )
}

export default AddRoom
