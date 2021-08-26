import "./conver.css"
import icon from '../images/ket.jpg'
import { useEffect, useState } from "react"
import axios from "axios"

const Conversation = ({conversation, currentUser}) => {
    const [user, setUser] = useState('')
    const Pf = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(()=>{
        const friendId = conversation.members.find(m => m !== currentUser._id)
        const getUser = async () =>{
            try {
                const res = await axios("/users?userId=" + friendId)
                setUser(res.data)
            } catch (error) {
                console.log(error);
            }
        }

        getUser()
    },[ currentUser, conversation])
    return (
        <div className="conversation">
            <img src={user.profilePicture ? user.profilePicture : Pf+"person/noAvatar.png"}  />
            <span>{user.username}</span>
        </div>
    )
}

export default Conversation
