import "./message.css"
import icon from '../images/ket.jpg'

const Message = ({own}) => {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img src={icon} className="messageImg"/>
                <p className="messageContainer">hello this is Ketsia Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="messageBottom">1 hour ago</div>
        </div>
    )
}

export default Message
