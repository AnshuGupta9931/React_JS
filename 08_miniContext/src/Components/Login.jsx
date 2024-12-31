import React,{useState,useContext} from 'react'
import userContext from '../context/UserContext'
import UserContextProvider from '../context/UserContextProvider'
function Login() {
    const [username, setusername] = useState(null)
    const [password, setpassword] = useState(null)
    const {setUser} = useContext(userContext);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username,password});
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" value={username} onChange={(e)=> setusername(e.target.value)} placeholder='username' />
        <br/>
        <input type="password" value={password} onChange={(e)=> setpassword(e.target.value)} placeholder='password'/>
        <br/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login