import React, { useState, useEffect } from 'react';
import { MessageList, Input } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';
import '../styles/ChatWindow.css';
import { useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"
import "../styles/ChatWindow.css"



export default function ChatWindow(props) {

  // For Navigation
  const navigate = useNavigate();

  // Get the user email from the global state
  const user_email = useSelector(state => state.users.user_email);
  const sponsor_email = useSelector(state => state.sponsors.sponsor_email);
  const userID = useSelector(state => state.users.userId);
  const sponsorID = useSelector(state => state.sponsors.sponsorId);

  // Get the user_id and sponsorId from the url
  const { userId, sponsorId } = useParams();

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [socket, setSocket] = useState(null);

  // If user or sponsor is logged in only then show else take him/her to signin page
  // Must have user/sponsr email in state and their Ids should match the Url ids
  useEffect(() => {
    if((user_email || sponsor_email) &&
       ((sponsorId == sponsorID) || (userId == userID))){
      console.log("Someone is logged!");
      console.log((sponsorId == sponsorID) || (userId == userID));
    }
    else{
      navigate("/user_signin");
    }
  }, [user_email, sponsor_email])


  // Loads the messages from the database and displays on screen
  useEffect(() => {
    // Data to send to the server
    const data = {
      is_user: user_email ? true : false,
      user_id: userId,
      sponsor_id: sponsorId,
    };

    // Send a post request to get all the chats for the current user and sponsor
    axios
      .post("http://localhost:8000/app/get_user_sponsor_chats/", data)
      .then((response) => {
        // Response data
        let chats = response.data;

        console.log("All chats", chats);

        // If the sender is user and I am user dont show the message
        // If sender is sponsor and I am user show the message
        // If sender is user and I am sponsor show the message
        chats.forEach((chat) => {
          // If sent by user and I am user show on right
          if (
            (chat.sender === "sponsor" && !user_email) ||
            (chat.sender === "user" && user_email)
          ) {
            console.log("Sent by sponsor");
            setMessages((prevMessages) => [
              ...prevMessages,
              {
                position: "right",
                type: "text",
                text: chat.message,
                date: new Date(),
                sender: chat.sender,
              },
            ]);
          } else {
            setMessages((prevMessages) => [
              ...prevMessages,
              {
                position: "left",
                type: "text",
                text: chat.message,
                date: new Date(),
                sender: chat.sender,
              },
            ]);
          }
        });
      });
  }, [userId, sponsorId]);

  // Connects to the socket and handles messages
  useEffect(() => {
    const newSocket = new WebSocket(
      `ws://127.0.0.1:8000/chats/${props.userId}/${props.sponsorId}`
    );

    newSocket.onopen = () => {
      console.log("WebSocket connected");
      setSocket(newSocket);
    };

    newSocket.onmessage = (event) => {
      // Parse the incoming message from netwoek
      const message = JSON.parse(event.data);

      console.log(message)


     // Sent by user received by user(as email)
      if (message.event.sender === "user" && user_email) {
        console.log("ran1")
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            position: "right",
            type: "text",
            text: message.message,
            date: new Date(),
            sender: "user",
          },
        ]);
      }

      
      // Sent by sponsor and received by user(as email)
      if (message.event.sender === "sponsor" && user_email) {
        console.log("ran2")
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            position: "left",
            type: "text",
            text: message.message,
            date: new Date(),
            sender: "sponsor",
          },
        ]);
      }

      // Sent by sponsor and received by sponsor(as not email)
      if (message.event.sender === "sponsor" && !user_email) {
        console.log("ran3")
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            position: "right",
            type: "text",
            text: message.message,
            date: new Date(),
            sender: "sponsor",
          },
        ]);
      }

      // Sent by the user and received by sponsor(as no email)
      if (message.event.sender === "user" && !user_email) {
        console.log("ran4")
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            position: "left",
            type: "text",
            text: message.message,
            date: new Date(),
            sender: "user",
          },
        ]);
      }
    };

    newSocket.onclose = () => {
      console.log("WebSocket disconnected");
      setSocket(null);
    };

    return () => {
      if (socket) {
        socket.close();
        console.log("WebSocket closed");
      }
    };
  }, [user_email]);

  const handleSendMessage = () => {
    // On click on send display message on right
    if (socket && newMessage.trim() !== "") {
      socket.send(
        JSON.stringify({
          message: newMessage,
          type: user_email ? "user" : "sponsor",
          userId: userId,
          sponsorId: sponsorId,
        })
      );
   
    }
  };

  return (
    <div className='ChatWindowRoot'>

      <Navbar></Navbar>

      <div className='message-list'>
        <MessageList
          lockable={true}
          toBottomHeight={"100%"}
          dataSource={messages.map((message) => ({
            ...message,
            //position: message.sender === 'user'&&user_email ? 'right' : 'left'
          }))}
        />
      </div>

      <div className="InputContainer">
        <Input
          className="InputMessage"
          placeholder="Type your message..."
          multiline={false}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          rightButtons={<button onClick={handleSendMessage}>Send</button>}
        />
      </div>
    </div>

  );
}
