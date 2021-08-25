import "./messenger.css"
import Topbar from '../../components/topbar/Topbar'
import Conversation from "../../components/conversations/Conversation"
import Message from "../../components/message/Message"

const Messenger = () => {
    return (
        <>
            <Topbar />
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                       <input type="text" placeholder="Search for friends" className="chatMenuInput" />
                       <Conversation />
                       <Conversation />
                       <Conversation />
                       <Conversation />
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        <div className="chatBoxTop">
                            <Message />
                            <Message own={true}/>
                            <Message />
                        </div>
                        <div className="chatBoxBottom">
                            <textarea placeholder="Enter message here"></textarea>
                            <button className="chatSubmitBtn">send</button>
                        </div>
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
