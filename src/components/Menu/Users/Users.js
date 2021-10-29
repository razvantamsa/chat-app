import React, {useState, useEffect} from 'react'
import * as api from "../../../api/api";

const Users = ({users, setUsers}) => {

    let toRender;
    if(users){
        toRender = users.map( user => 
            <div className="user" key={user.id}>
                {user.name}
            </div>
            )
    }

    return (
        <div className="Users">
            {toRender}
        </div>
    )
}

export default Users
