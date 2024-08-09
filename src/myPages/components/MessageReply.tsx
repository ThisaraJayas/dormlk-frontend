import { Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function MessageReply({messageId}) {
    const [messageReply, setMessageReply]=useState('')
    console.log(messageReply);
    console.log(messageId);
    
    
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
