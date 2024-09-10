import ChakraCarousel from '@/PageComponents/ChakraCarousel.tsx';
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
  useEffect(() => {
    if (itemPost && itemPost.images && itemPost.images.length > 0) {
      setSelectedImage(itemPost.images[0]); // Set the first image as the default selected image
    }
  }, [itemPost]);

  const handleThumbnailClick = (image: string) => {
    setSelectedImage(image);
  };
  // Add a loading or error state if necessary
  if (!itemPost) {
    return <div>Loading...</div>; // You can replace this with a more sophisticated loading indicator
  }

  return (
    <div><section className="py-12 mt-6 sm:py-16">
       <div className="lg:col-span-3 lg:row-end-1">
              <div className="lg:flex lg:items-start">
                <div className="lg:order-2 lg:ml-5">
                  <ChakraCarousel gap='1'>
                    {itemPost.images &&
                      itemPost.images.map((image, index) => (
                        <div
                          key={index}
                          className={`flex-shrink-0 w-full h-[400px] overflow-hidden rounded-lg`}
                        >
                          <img
                            className="w-full h-full object-cover"
                            src={image}
                            alt={`Large view ${index}`}
                            onClick={() => handleThumbnailClick(image)}
                          />
                        </div>
                      ))}
                  </ChakraCarousel>
                </div>
              </div>
            </div>
            <h1 className="sm: text-4xl font-bold text-gray-900 sm:text-4xl">
                {itemPost.title}
              </h1>
              <h1 className="sm: text-1xl text-gray-600 sm:text-1xl">
                {itemPost.location}
              </h1>
              <h2 className="mt-8 text-base text-gray-900">Facilities</h2>
              <div className="mt-3 flex  flex-wrap items-center gap-1">
                {itemPost.facilities &&
                  itemPost.facilities.map((facitites, index) => (
                    <label key={index} className="">
                      <p className="bg-emerald-600 text-white rounded-lg border border-emerald-600 px-6 py-2 font-bold">
                        {facitites}
                      </p>
                    </label>
                  ))}
              </div>

              <h2 className="mt-8 text-base text-gray-900">House Details</h2>

              <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                <label className="">
                  <input
                    type="radio"
                    name="subscription"
                    value="4 Months"
                    className="peer sr-only"
                  />
                  <p className="bg-white text-emerald-600 rounded-lg border border-emerald-600 px-6 py-2 font-bold">
                    {itemPost.accommodationType}
                  </p>
                </label>
                <label className="">
                  <input
                    type="radio"
                    name="subscription"
                    value="4 Months"
                    className="peer sr-only"
                  />
                  <p className="bg-white text-emerald-600 rounded-lg border border-emerald-600 px-6 py-2 font-bold">
                    {itemPost.noOfBathroom} Beds
                  </p>
                </label>
                <label className="">
                  <input
                    type="radio"
                    name="subscription"
                    value="8 Months"
                    className="peer sr-only"
                    checked
                  />
                  <p className="bg-white text-emerald-600 rounded-lg border border-emerald-600 px-6 py-2 font-bold">
                    {itemPost.noOfBathroom} Bathrooms
                  </p>
                </label>
              </div>
            </section>
    </div>
  )
}
