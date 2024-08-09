import { createReply } from '@/Redux/Reply/ReplyAction';
import { AppDispatch, RootState } from '@/Redux/store';
import { Button, Textarea } from '@chakra-ui/react'
import { Reply, Send } from 'lucide-react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function MessageReply({messageId}) {
    const [messageReply, setMessageReply]=useState('')
    const dispatch = useDispatch<AppDispatch>()
    const {reply} =useSelector((state:RootState)=>state.Reply)
    console.log(messageReply);
    console.log(messageId);
    
    const handleReplySubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(createReply({ messageId, reply:messageReply })); 
  };
    
  return (
    <div>
        <form onSubmit={handleReplySubmit}>
         <Textarea
                    value={messageReply}
                    onChange={(e) => setMessageReply(e.target.value)}
                    placeholder="Enter your property description here."
                  />
                  <Button className="bg-emerald-600 hover:bg-emerald-700" type="submit">
              Reply <Reply className="ml-1 h-4" />
            </Button>
                  </form>
    </div>
  )
}
