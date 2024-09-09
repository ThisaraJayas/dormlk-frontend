import { getUser } from '@/Redux/Auth/AuthAction.ts'
import { fetchCommentsByPostId } from '@/Redux/Comment/CommentAction.ts'
import { fetchMessagesByUserId, fetchRecivedMessages } from '@/Redux/Messages/MessageAction.ts'
import { AppDispatch, RootState } from '@/Redux/store.ts'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Textarea } from '@chakra-ui/react'
import { fetchAllPosts } from '@/Redux/Post/PostAction.ts'
import MessageReply from './components/MessageReply.tsx'
import { updateMessageWithReply } from '@/Redux/Messages/MessageSlice.ts';

export default function MyProfile() {
  const dispatch = useDispatch<AppDispatch>()
  const {allMessage, messagesRecived} = useSelector((state:RootState)=>state.Message)
  const {loginUser} = useSelector((state:RootState)=>state.User)
  const {allPost} = useSelector((state:RootState)=>state.Post)

  console.log(allMessage);
  

  // const messagesReceived = loginUser ? allMessage.filter(message => message.post.user.id == loginUser.id) : []
console.log("mmmmmm   ",messagesRecived);

  useEffect(()=>{
    dispatch(getUser())
  },[dispatch])
  useEffect(()=>{
    dispatch(fetchAllPosts())
    
  },[dispatch])

  useEffect(() => {
    if (loginUser?._id) {
      const userId: string = loginUser._id.valueOf();
      console.log("UUUU ",userId);
      
      dispatch(fetchMessagesByUserId(userId));
      dispatch(fetchRecivedMessages(userId))
    }
  }, [dispatch, loginUser?._id]);

  const formatDateTime = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return new Intl.DateTimeFormat("en-US", options).format(
      new Date(dateString)
    );
  };
  const handleNewReply = (messageId, reply) => {
    // Dispatch an action to update the message with the new reply in the Redux store
    dispatch(updateMessageWithReply({ messageId, reply }));
    const userId: string = loginUser._id.valueOf();
    dispatch(fetchMessagesByUserId(userId));
    dispatch(fetchRecivedMessages(userId));
}

// Sort messages and replies by date in descending order
const sortedAllMessages = [...allMessage].sort((a, b) => new Date(b.createdDateTime).getTime() - new Date(a.createdDateTime).getTime());
const sortedMessagesRecived = [...messagesRecived].sort((a, b) => new Date(b.createdDateTime).getTime() - new Date(a.createdDateTime).getTime());

  return (
    <div>
      <Tabs isFitted variant='enclosed'>
  <TabList mb='1em'>
    <Tab>My Messages</Tab>
    <Tab>Received Messages</Tab>
  </TabList>
  <TabPanels>
  <TabPanel>
            {sortedAllMessages.map((message, index) => (
              <div key={index} className="rounded-lg mb-4 bg-gray-100 p-4">
                <span className="truncate text-sm text-gray-400">
                          Send on {' '}
                          <a href="#" className="font-medium text-blue-600">
                            <time className="text-xs" dateTime={new Date(message.createdDateTime).toISOString()}>
                               {formatDateTime(String(message.createdDateTime))}
                            </time>{" "}
                          </a>
                        </span>
                
                <p>Property : {message.post.title}</p>
                <p className='mt-3'><b>{message.message}</b></p>

                {message.replies && message.replies.length > 0 && (
  <div className="mt-4">
    {message.replies.map((reply, replyIndex) => (
      <div
        key={replyIndex}
        className={`rounded-lg mb-2 p-4 ${
          reply.user && reply.user._id === loginUser?._id ? 'bg-blue-200' : 'bg-green-200'
        }`}
      >
        <p className="text-gray-500 mb-2">
          {reply.user && reply.user._id === loginUser?._id ? 'You' : 'Reply:'}
        </p>
        <p>{reply.reply}</p>
      </div>
    ))}
                    <MessageReply messageId={message._id} onNewReply={handleNewReply} />
                  </div>
                )}
              </div>
            ))}
          </TabPanel>
    {/* .......................................tab2........................ */}
   
<TabPanel>
            <div>
              {sortedMessagesRecived.map((message, index) => (
                <div key={index} className="mx-auto my-10 max-w-4xl rounded-xl border px-4 py-6 text-gray-700">
                  <div className="">
                    <div className="flex items-center">
                      
                      <p className=" w-56">
                        <strong className="block font-medium text-gray-700">{message.fullName}</strong>
                        <span className="truncate text-sm text-gray-400">
                        Received on {' '}
                          <a href="#" className="font-medium text-blue-600">
                          <time className="text-xs" dateTime={new Date(message.createdDateTime).toISOString()}>
                               {formatDateTime(String(message.createdDateTime))}
                            </time>{" "}
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                  <p>Property : {message.post.title}</p>
                  <p className='mt-2'><b>{message.message}</b></p>

                  {message.replies && message.replies.length > 0 && (
                    <div className="mt-4">
                      {message.replies.map((reply, replyIndex) => (
                        <div
                          key={replyIndex}
                          className={`rounded-lg mb-2 p-4 ${
                            reply.user._id === loginUser?._id ? 'bg-blue-200' : 'bg-green-200'
                          }`}
                        >
                          <p className="text-gray-500 mb-2">
                            {reply.user._id === loginUser?._id ? 'You' : 'Reply:'}
                          </p>
                          <p>{reply.reply}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mb-3">
                    {/* Additional content or styling can be added here */}
                  </div>
                  <div className="rounded-lg bg-gray-100 p-4">
                    <p className="mb-2 text-gray-500">
                      {/* Display the message creation time or similar */}
                      You commented on 
                    </p>
                    <MessageReply messageId={message._id} onNewReply={handleNewReply} />
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
  </TabPanels>
</Tabs>
     

    </div>
  )
}
