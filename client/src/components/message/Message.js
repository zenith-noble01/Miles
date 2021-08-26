import "./message.css"
import icon from '../images/ket.jpg'
import {format} from 'timeago.js'

const Message = ({message, own}) => {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img src={icon} className="messageImg"/>
                <p className="messageContainer">
                    {message.text}
                </p>
            </div>
            <div className="messageBottom">{format(message.createdAt)}</div>
        </div>
    )

}

export default Message
