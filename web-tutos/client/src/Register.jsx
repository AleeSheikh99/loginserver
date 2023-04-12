import React, { useState } from "react";
import { json } from "stream/consumers";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [passConf, setPassConf] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

        setName({... user, [name]:value});
    }
    const PostData = async(e)=>{
        e.preventDefault();
        const {name, email, pass, passConf} = user;
        const res = await fetch("/register" ,{
            method:Post,
            headers:{
                "Conten-Type" : "application/json"
            },
            body:JSON.stringify({
                name, email, pass, passConf
            })
        }) ;
        const data = await res.json();
        if(data.status === 422 || data)
        {
            window.alert("invalid resgistration ")
        }
        else{
            window.alert("Registration is sucessfull")
        }

    }
    

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form method="POST" className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <label htmlFor="password">Confrim-password</label>
            <input value={passConf} onChange={(e) => setPassConf(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit" onClick={PostData}>Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}
