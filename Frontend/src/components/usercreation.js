import React, {useState} from "react";
import { createUser } from "../api";

const Newuser = () => {
    const [userData,setUserData] = useState({username: '', email: ''});
    const [message,setmessage] = useState('');
    const handle = async(e) => {
        e.preventDefault();
        try{
            const user = await createUser(userData);
            setmessage('User created');
            console.log(user);
        }catch(error){
            setmessage('Failed in creating user')
        }
    };

    return (
        <div>
            <h2>Create User</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handle}>
                <input type="text" placeholder="Please enter your name" value={userData.username} onChange={(e) => setUserData({...userData,username:e.target.value})}/>
                <input type="email" placeholder="Please enter your email" value={userData.email} onChange={(e) => setUserData({...userData,email:e.target.value})}/>
                <button type="Submit">Add</button>
            </form>
        </div>
    );
};

export default Newuser