import React from 'react'
import userContext from '../context/UserContext'
import { useContext } from 'react'
function Profile() {
    const {User} = useContext(userContext)
 if(!User) return <div>Please Login</div>
 return <div>Welcome {User.username}</div>
}

export default Profile