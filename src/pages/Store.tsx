import StoreItem from '@/PageComponents/StoreItem';
import { fetchAllPosts } from '@/Redux/Post/PostAction';
import { AppDispatch, RootState } from '@/Redux/store';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface Post {
  id: number;
  title: string;
  cityDistrict: string;
  accommodationType: string;
}

export default function Store() {
  const dispatch = useDispatch<AppDispatch>();
  const { allPost } = useSelector((state: RootState) => state.Post);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  // Filter posts based on search query
  const filteredPosts = allPost.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Store</h1>
      {/* Search Input */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>

      <div className='m-11'>
        <h2>Posts:</h2>
        {filteredPosts.length ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPosts.map((post) => (
              <StoreItem key={post.id} post={post} />
            ))}
          </ul>
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </div>
  );
}
