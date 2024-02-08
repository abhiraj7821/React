import React, { useContext } from 'react'
import userContext from '../Context/userContext'

function Profile() {
    const user =useContext(userContext);
    if(!user) return <div>Please Log-in</div>
    
    return <div>Welcome {user.userName}</div>
}

export default Profile
