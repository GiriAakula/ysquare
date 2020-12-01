import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = (props) => {
    const history = useHistory();
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const handleUsernameChange = e => {
        setUsername(e.target.value)
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        if(username && password){
            try{
                const response = await axios.post('http://localhost:5000/login', {username, password})
                localStorage.setItem('username', username)
                if(response.data.status === 200){
                history.push('/dashboard')
                }
                if(response.data.status === 401){
                    setError("Username or Password is incorrect.")
                }
            } catch(err){
                console.log(err)
            }
        }

    }
    return (
        <>
            <div className="card">
                <div className="innercard">
                    <form onSubmit={handleSubmit}>
                        <div className="username">
                            <label htmlFor="username">Username</label> <br />
                            <input onChange={handleUsernameChange} type="text" name="username" id="username" placeholder="Username" required/>
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label> <br />
                            <input onChange={handlePasswordChange} type="password" name="password" id="password" placeholder="Password" required/>
                        </div>
                        <div className="button">
                            <button type="submit">Login</button>
                        </div>
                        {error && <p className="errorText">{error}</p>}
                    </form>
                    <div className="adminRoute">
                        <Link to="/admin"><p>Click here if you are a admin.</p></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login