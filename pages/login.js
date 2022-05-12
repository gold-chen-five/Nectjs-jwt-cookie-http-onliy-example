import React,{useState} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter()
    const formStyle = {
        display: "flex",
        flexDirection: "column",
        maxWidth: "560px",
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const credentials = { username, password };

        const user = await axios.post("/api/auth/login", credentials);

        if(user.status === 200){
            router.push('/dashboard/user')
        }
        
    };
    return (
        <form style={formStyle} onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="username"> Username </label>
            <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="password"> Username </label>
            <input
            type="text"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            />

            <button> Log in </button>
        </form>

    )
}
