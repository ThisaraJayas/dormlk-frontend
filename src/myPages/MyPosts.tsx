import { getUser } from '@/Redux/Auth/AuthAction';
import { DeleteByPostId, fetchPostsByUserId } from '@/Redux/Post/PostAction';
import { AppDispatch, RootState } from '@/Redux/store';
import { Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function MyPosts() {
  const dispatch = useDispatch<AppDispatch>();
  const {loginUser} = useSelector((state:RootState)=>state.User)
  const {allPostByUserId}=useSelector((state:RootState)=>state.Post)
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(()=>{
    dispatch(getUser())
  },[dispatch])


  useEffect(() => {
    if (loginUser?.id) {
      dispatch(fetchPostsByUserId(loginUser.id));
    }
  }, [dispatch, loginUser?.id]);

  console.log(allPostByUserId);
  
  const filteredPosts = filterStatus
    ? allPostByUserId.filter(post => post.postStatus === filterStatus)
    : allPostByUserId;

   const handleFilterClick = () => {
      setIsDropdownOpen(prevState => !prevState);
  };
  const handleFilterOptionClick = (status: string | null) => {
    setFilterStatus(status);
    setIsDropdownOpen(false);
  };
  const handleDelete = async(postId: number) => {
    try {
      // Dispatch delete action
      await dispatch(DeleteByPostId(postId));
  
      // Update local state to remove the deleted post
      dispatch(fetchPostsByUserId(loginUser.id));
    } catch (error) {
      console.error("Failed to delete post", error);
    }
  };
  return (
    <div>
    
    <div className="w-auto bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-2 ">
        <div className=" w-full">
          <div className="flex w-full flex-col items-center justify-between space-y-2 sm:flex-row sm:space-y-0">
            <form className="relative flex w-full max-w-2xl items-center">
              <svg className="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8" className=""></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
              </svg>
              <input type="name" name="search" className="h-12 w-full border-b-gray-400 bg-transparent py-4 pl-12 text-sm outline-none focus:border-b-2" placeholder="Search by Order ID, Date, Customer" />
            </form>
{/*     
            <button type="button" className="relative mr-auto inline-flex cursor-pointer items-center rounded-full border border-gray-200 bg-white px-5 py-2 text-center text-sm font-medium text-gray-800 hover:bg-gray-100 focus:shadow sm:mr-0">
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              <svg className="mr-2 h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filter
            </button> */}
            <div className="relative">
                <button
                  type="button"
                  onClick={handleFilterClick}
                  className="mr-auto inline-flex cursor-pointer items-center rounded-full border border-gray-200 bg-white px-10 py-2 text-center text-sm font-medium text-gray-800 hover:bg-gray-100 focus:shadow sm:mr-0"
                >
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                  <svg
                    className="mr-2 h-3 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                  Filter
                </button>
                {isDropdownOpen && (
                  <div className="absolute mt-2 flex flex-col bg-white rounded-md shadow-lg">
                    <button
                      onClick={() => handleFilterOptionClick(null)}
                      className="px-4 py-2 text-sm text-left hover:bg-gray-200"
                    >
                      All
                    </button>
                    <button
                      onClick={() => handleFilterOptionClick('PENDING')}
                      className="px-4 py-2 text-sm text-left hover:bg-gray-200"
                    >
                      Pending
                    </button>
                    <button
                      onClick={() => handleFilterOptionClick('ACCEPTED')}
                      className="px-4 py-2 text-sm text-left hover:bg-gray-200"
                    >
                      Accepted
                    </button>
                    <button
                      onClick={() => handleFilterOptionClick('REJECTED')}
                      className="px-4 py-2 text-sm text-left hover:bg-gray-200"
                    >
                      Rejected
                    </button>
                  </div>
                )}
              </div>
          </div>
        </div>
    
        <div className="mt-6 overflow-hidden rounded-xl bg-white px-6 shadow lg:px-4">
          <table className="min-w-full border-collapse border-spacing-y-2 border-spacing-x-2">
            <thead className="hidden border-b lg:table-header-group">
              <tr className="">
                <td className="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3">
                  Post Date
                  <svg xmlns="http://www.w3.org/2000/svg" className="float-right mt-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </td>
    
                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Post ID</td>
                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Title</td>
                
    
               
    
                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Status</td>
                <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">Delete Post</td>
              </tr>
            </thead>
    
            <tbody className="bg-white lg:border-gray-300">
            {filteredPosts.map((post,index)=>(
      <tr key={index} className="">
      <td className="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
        07 February, 2022
        <div className="mt-1 flex flex-col text-xs font-medium lg:hidden">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Jane Doeson
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            Desktop Computer
          </div>
          <div className="">24 x 10 x 5 cm</div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
            1 Kg
          </div>
        </div>
      </td>

      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">{String(post.id)}</td>

      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">{post.title}</td>

      {post.postStatus=='PENDING'}
      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-3 lg:table-cell">
        {/* Conditional styling based on the status */}
        <span className={`whitespace-nowrap rounded-full px-2 py-0.5 text-center text-xs ${
          post.postStatus === 'PENDING' ? 'bg-purple-100 text-purple-800' :
          post.postStatus === 'ACCEPTED' ? 'bg-green-100 text-green-800' :
          post.postStatus === 'REJECTED' ? 'bg-red-100 text-red-800' :
          'bg-gray-100 text-gray-800' // Default case if needed
        }`}>
          {post.postStatus === 'PENDING' ? 'Pending' :
           post.postStatus === 'ACCEPTED' ? 'Accepted' :
           post.postStatus === 'REJECTED' ? 'Rejected' :
           'Unknown Status'}
        </span>
      </td>
      <td className='hidden lg:table-cell'>
      <Button
          style={{
            backgroundColor: '#10b981', // Emerald 600
            borderColor: '#10b981', // Emerald 600
            color: '#ffffff', // White text
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#059669'; // Emerald 700
            e.currentTarget.style.borderColor = '#059669'; // Emerald 700
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#10b981'; // Emerald 600
            e.currentTarget.style.borderColor = '#10b981'; // Emerald 600
          }}
          onClick={() => handleDelete(post.id)} // Add onClick handler
          className="bg-emerald-600 border-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2"
        >
          Delete Post
        </Button>
      </td>
      <td className="whitespace-no-wrap py-4 lg:py-4 text-right text-sm text-gray-600 sm:px-3 lg:hidden flex items-center gap-4">
        <span className={`mt-1 block w-fit whitespace-nowrap rounded-full px-2 py-0.5 text-center text-xs ${
          post.postStatus === 'PENDING' ? 'bg-purple-100 text-purple-800' :
          post.postStatus === 'ACCEPTED' ? 'bg-green-100 text-green-800' :
          post.postStatus === 'REJECTED' ? 'bg-red-100 text-red-800' :
          'bg-gray-100 text-gray-800' // Default case if needed
        }`}>
          {post.postStatus === 'PENDING' ? 'Pending' :
           post.postStatus === 'ACCEPTED' ? 'Accepted' :
           post.postStatus === 'REJECTED' ? 'Rejected' :
           'Unknown Status'}
        </span>
        <Button
          style={{
            backgroundColor: '#10b981', // Emerald 600
            borderColor: '#10b981', // Emerald 600
            color: '#ffffff', // White text
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#059669'; // Emerald 700
            e.currentTarget.style.borderColor = '#059669'; // Emerald 700
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#10b981'; // Emerald 600
            e.currentTarget.style.borderColor = '#10b981'; // Emerald 600
          }}
          onClick={() => handleDelete(post.id)} // Add onClick handler
          className="bg-emerald-600 border-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2"
        >
          Delete Post
        </Button>
      </td>
      
    </tr>
    ))}
              
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
}













