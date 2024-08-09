import { Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function MessageReply() {
    const [messageReply, setMessageReply]=useState('')
    console.log(messageReply);
    
  return (
    <div>
         <Textarea
                    value={messageReply}
                    onChange={(e) => setMessageReply(e.target.value)}
                    placeholder="Enter your property description here."
                  />
    </div>
  )
}
