import {Card, CardContent, Typography } from '@mui/material'
import React,{forwardRef} from 'react'

const Message=forwardRef(({username, message },ref)=> {
  const isUser = username === message.username;
  
  return (
<div ref={ref} className={`p-[10px] m-[10px] w-fit ${isUser && " ml-auto text-white text-right"}`}>     
      <Card className={isUser ? "!bg-[#0b81ff]":"!bg-[#e9e9eb]"} >
        <CardContent>
        <Typography
          color="black"
          variant='h5'
          component="h2"
        >
          {!isUser && `${message.username || "unkown user"}:`} {message.messages}
        </Typography>
        </CardContent>      
      </Card>
</div>
    
    
  ) 
})

export default Message
