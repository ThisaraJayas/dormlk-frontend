import { getUser } from '@/Redux/Auth/AuthAction'
import { fetchCommentsByPostId } from '@/Redux/Comment/CommentAction'
import { fetchMessagesByUserId, fetchRecivedMessages } from '@/Redux/Messages/MessageAction'
import { AppDispatch, RootState } from '@/Redux/store'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Textarea } from '@chakra-ui/react'
import { fetchAllPosts } from '@/Redux/Post/PostAction'
import MessageReply from './components/MessageReply'

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
    if (loginUser?.id) {
      dispatch(fetchMessagesByUserId(loginUser.id));
      dispatch(fetchRecivedMessages(loginUser.id))
    }
  }, [dispatch, loginUser?.id]);

  const formatDateTime = (dateString) => {
    const options = {
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

  return (
    <div>
      <Tabs isFitted variant='enclosed'>
  <TabList mb='1em'>
    <Tab>My Messages</Tab>
    <Tab>Recived Messages</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    {allMessage.map((messages,index)=>(
        <div key={index} className="rounded-lg mb-4 bg-gray-100 p-4">
    <p className="mb-2 text-gray-500">You Send Message on Sep 4</p>
    <p className="">{messages.message}</p>
  </div>
      ))}
      
      <div className="mx-auto  max-w-2xl rounded-xl border px-4 py-6 text-gray-700">
  <div className="mb-5">
    <div className="flex items-center">
      
      <p className="ml-4 w-56">
        <strong className="block font-medium text-gray-700">Johanson Levinsiki</strong>
        <span className="truncate text-sm text-gray-400">Replied in <a href="#" className="font-medium text-blue-600">Programming Crash Course</a></span>
      </p>
    </div>
  </div>
  <div className="mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque nemo accusamus soluta!</div>
  
</div>
    </TabPanel>
    {/* .......................................tab2........................ */}
    <TabPanel>
  <div>
    {/* Check if there are any messages where the post's user matches the loginUser */}
    
      <div>
        {/* Render content for messages from posts belonging to the logged-in user */}
        {messagesRecived.map((message, index) => (
          <div key={index} className="mx-auto my-10 max-w-4xl rounded-xl border px-4 py-6 text-gray-700">
            <div className="mb-5">
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src="/images/ddHJYlQqOzyOKm4CSCY8o.png" // Replace with dynamic image source if needed
                  alt="User"
                />
                <p className="ml-4 w-56">
                  <strong className="block font-medium text-gray-700">{message.fullName}</strong>
                  <span className="truncate text-sm text-gray-400">
                    Replied in{' '}
                    <a href="#" className="font-medium text-blue-600">
                    <time className="text-xs" dateTime={message.createdDateTime}>
                {formatDateTime(message.createdDateTime)}
              </time>{" "}
                    </a>
                  </span>
                </p>
              </div>
            </div>
              <div className="mb-3">{message.message}</div>

            <div className="mb-3">
              {/* Additional content or styling can be added here */}
            </div>
            <div className="rounded-lg bg-gray-100 p-4">
              <p className="mb-2 text-gray-500">
                {/* Display the message creation time or similar */}
                You commented on 
              </p>
             <MessageReply messageId={message.id}/>
            </div>
          </div>
          
        ))}
      </div>
    {/* )} */}
  </div>
</TabPanel>
  </TabPanels>
</Tabs>
     

    </div>
  )
}
