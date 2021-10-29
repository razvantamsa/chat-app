import React from 'react'

const Message = ({message, user}) => {

    let nameOfClass = "Message";
    if(user.name === message.author){
        nameOfClass += " thisUser";
        console.log(nameOfClass);
    }

    return (
        <div className={nameOfClass}>
            { (user.name === message.author) ? "You" : message.author}: {message.text}
        </div>
    )
}

export default Message
