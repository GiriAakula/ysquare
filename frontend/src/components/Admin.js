import React, { useEffect, useState } from 'react';
import axios from 'axios';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000');

const Admin = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/getUsers")
            .then((data) => {
                if (data) {
                    setUsers(data.data.users)
                }
            })
    }, []);

    const handleClick = (user) => {
        console.log(user.target.innerText)
        socket.emit('clickedUser', user.target.innerText)
    };

    const fillUsers = () => {
        return users.map((user, index) => {
            return (
                <div className="user" key={index} onClick={(index) => handleClick(index)}>
                    <p>{user}</p>
                </div>
            )
        })
    };

    return (
        <>
            <div className="card">
                <h1>Hello, Admin!</h1>
                <div className="innercard">
                    <div className="notificationcard admin">
                        <h4>YOUR USERS</h4>
                        {fillUsers()}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin