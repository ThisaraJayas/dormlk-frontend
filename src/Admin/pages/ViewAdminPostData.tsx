import { fetchPostsByPostId } from '@/Redux/Post/PostAction.ts';
import { AppDispatch, RootState } from '@/Redux/store.ts';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function ViewAdminPostData() {
  const dispatch = useDispatch<AppDispatch>();
  const { itemPost } = useSelector((state: RootState) => state.Post);

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [messageText, setMessageText] = useState('');

  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (id) {
      const Id: string = String(id);
      dispatch(fetchPostsByPostId(Id));
    }
  }, [dispatch, id]);

  console.log(itemPost);
  return (
    <div>ViewAdminPgostData</div>
  )
}
