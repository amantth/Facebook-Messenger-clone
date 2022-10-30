import React from "react";
import Button from '@mui/material/Button';
import { FormControl,InputLabel ,Input } from '@mui/material';
import { useState } from "react";
import Message from "./Message";
import FlipMove from "react-flip-move";
import firebase from 'firebase/compat/app';
import { db } from './firebase' 
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';

// import firebase from './firebase-config';
import { useEffect } from "react";

function App() {

  const[username,setUsername]=useState("")
  const [input, setInput] = useState("");
  const [messages, setMessage] = useState([]);

  //useState is variablE in REACT
  //useEffect run code on a conditio
  useEffect(() => { 
    db.collection("messages")
      .orderBy("timestamp", "desc").onSnapshot(snapshot => {
        setMessage(snapshot.docs.map(doc => ({id:doc.id,message:doc.data()})))
    })
  })
  useEffect(() => {
     setUsername(window.prompt("Please enter your name"))
  },[])//condition []//dependencies

  const sendMessage = (e) => {

    db.collection("messages").add({
      messages: input,
      username: username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })

    e.preventDefault(); 
    setInput("");
    
  } 
 
  return (
    <div className="App">
    <img className="flex ml-[40%]" src="data:image/jpeg;base64,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" alt="" />
      <h1 className=" flex ml-[40%] font-bold text-4xl">Hello Everyone</h1>
      <h2 className="flex ml-[40%]  font-bold  text-4xl">Welcome <span className="text-blue-600 pl-[10px]">{username}</span> </h2>
      <form className="fixed m-[20px] w-[100%] z-[10] bottom-[0] bg-[#e9e9eb] mb-[20px]">
        <FormControl className="!flex !flex-row">
        <InputLabel >Email a message</InputLabel>
         <Input className="flex-1" placeholder="Enter a message" value={input} onChange={(e)=>setInput(e.target.value)} type="text"  />
         
          <IconButton
            disabled={!input}
            type="submit"
            onClick={sendMessage}
            color="primary"
            vairant="container"
            className="flex-0"
          >

              <SendIcon />
          </IconButton>
          <Button type="submit" disabled={!input} variant="contained" color="primary" onClick={sendMessage}>Send message</Button>
        </FormControl>
      </form> 

      <FlipMove>
        {messages.map(({message,id}) => ( 
          <Message key={id} username={username} message={message} />  
           ))}
        </FlipMove>
      
    </div>
  );
}

export default App;
