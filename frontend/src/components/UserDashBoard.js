import React, { useEffect, useState } from 'react'
import io from 'socket.io-client';
import { useHistory} from 'react-router-dom';

const socket = io.connect('http://localhost:5000');
const UserDashBoard = () => {
    const history = useHistory();
    const [click, setClick] = useState(false);

    socket.on('message', (data) => {
        if (localStorage.getItem('username') === data) {
            setClick(true);
        }
    })
        const handleClick = () => {
            localStorage.removeItem('username');
            history.push('/')
        }
        return (
            <>
                <div className="card">
                <p className="local">User: {localStorage.getItem('username')}</p>
                    <div className="innercard">
                        <div className="notificationcard">
                            <h1>Notifications</h1>
                            {click &&
                                <div className="notification">
                                    <p>Admin clicked you!</p>
                                </div>
                            }
                        </div>
                        <div className="logout" onClick={handleClick} >
                            <button>LOGOUT</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

export default UserDashBoard