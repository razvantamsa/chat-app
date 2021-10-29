const BASE_URL = "http://localhost:5000/";
const USERS = "users/";
const ROOMS = "rooms/";


//USERS

export async function getUsers(){
    const response = await fetch(BASE_URL + USERS, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const json = await response.json();
    return json;
}

export async function getUser(id){
    const response = await fetch(BASE_URL + USERS + id, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const json = await response.json();
    return json;
}

export async function postUser(user_info){
    const response = await fetch(BASE_URL + USERS, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user_info)
    });
    const json = await response.json();
    return json;
}

export async function patchUser(user_info, id){
    const response = await fetch(BASE_URL + USERS + id, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user_info)
    });
    const json = await response.json();
    return json;
}

export async function deleteUser(id){
    const response = await fetch(BASE_URL + USERS + id, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const json = await response.json();
    return json;
}

//ROOMS

export async function getRooms(){
    const response = await fetch(BASE_URL + ROOMS, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const json = await response.json();
    return json;
}

export async function getRoom(topic){
    const response = await fetch(BASE_URL + ROOMS + topic, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const json = await response.json();
    return json;
}

export async function postRoom(room_info){
    const response = await fetch(BASE_URL + ROOMS, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(room_info)
    });
    const json = await response.json();
    return json;
}

export async function patchRoom(room_info, topic){
    const response = await fetch(BASE_URL + ROOMS + topic, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(room_info)
    });
    const json = await response.json();
    return json;
}

export async function deleteRoom(topic){
    const response = await fetch(BASE_URL + ROOMS + topic, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const json = await response.json();
    return json
}