import "./messenger.css"
import Topbar from '../../components/topbar/Topbar'
import Conversation from "../../components/conversations/Conversation"
import Message from "../../components/message/Message"
import {useContext, useEffect, useRef, useState} from "react"
import { AuthContext } from "../../context/AuthContext"
import miles from '../../components/images/mm.png'
import axios from "axios"
import { io } from 'socket.io-client'

const Messenger = () => {
    const [conversations, setConversations] = useState([])
    const [currentChat, setCurrentChat] = useState('')
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')
    const {user} = useContext(AuthContext);
    const socket = useRef(io('ws://localhost:7000'))

    useEffect(()=>{
        socket.current.emit('addUser', user._id)
        socket.current.on('getUser', users=>{

        })
    },[])

    useEffect(()=>{
        const getConversation = async ()=>{
            try {
                const res = await axios.get('/conversations/' + user._id )
                setConversations(res.data)
                // console.log(res);
            } catch (error) {
                console.log(error);
            }
        }
        getConversation()
    }, [user._id])
    // console.log(currentChat);

    useEffect(()=>{
        const getMessage = async () =>{
        try {
            const res = await axios.get('/messages/' + currentChat?._id)
            setMessages(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    getMessage()
    },[currentChat])

    // console.log(message);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const message = {
            sender: user._id,
            text: newMessage,
            conversationId: currentChat._id,
        }
        try {
            const res = await axios.post('/messages', message);
            setMessages([...messages, res.data])
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <>
            <Topbar />
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                       <input type="text" placeholder="Search for friends" className="chatMenuInput" />
                       {conversations.map((c)=>(
                           <div onClick={()=> setCurrentChat(c)}>
                               <Conversation conversation={c} currentUser={user}/>
                           </div>
                       ))}
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        {
                            currentChat ?
                            <>
                        <div className="chatBoxTop">
                            {
                                messages.map(m=>(
                                    <Message message={m} own={m.sender === user._id}/>
                                ))
                            }
                        </div>
                        <div className="chatBoxBottom">
                            <textarea placeholder="Enter message here" onChange={(e)=> setNewMessage(e.target.value)} value={newMessage}></textarea>
                            <button className="chatSubmitBtn" onClick={handleSubmit}>send</button>
                        </div>
                        </> : <div className="noChatSelected">
                            <div className="miles">
                                <img src={miles} alt="" />
                                <span>Miles</span>
                            </div>
                            <div className="info">
                                <p className="infoText">select a chat by clicking and start the discussion</p>
                            </div>
                        </div>
                        }
                    </div>
               </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        miosle
                    </div>
                </div>
            </div>
        </>
    )
}

export default Messenger
