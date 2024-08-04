import ItemBreadChumb from "@/PageComponents/ItemBreadChumb";
import React, { useEffect, useRef, useState } from "react";
import "../styles/item.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Redux/store";
import { useParams } from "react-router-dom";
import { fetchPostsByPostId } from "@/Redux/Post/PostAction";
import ChakraCarousel from "@/PageComponents/ChakraCarousel";
import Comment from "../PageComponents/Comment";
import StarRatings from 'react-star-ratings'; 

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Flex,
  Image,
  Box,
  Spinner,
} from "@chakra-ui/react";
import ReviewCard, { averageRating } from "@/PageComponents/ReviewCard";
import { fetchCommentsByPostId } from "@/Redux/Comment/CommentAction";

var totalComments = 0;
export default function Item() {
  const dispatch = useDispatch<AppDispatch>();
  const { itemPost } = useSelector((state: RootState) => state.Post);
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState("");
  const { allComment } = useSelector((state: RootState) => state.Comment);
 totalComments = allComment.length

  useEffect(() => {
    dispatch(fetchCommentsByPostId(id));
  }, [dispatch, id]);

console.log("RRR ",totalComments);

  useEffect(() => {
    if (id) {
      dispatch(fetchPostsByPostId(id));
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
    <div>
      <section className="py-12 mt-6 sm:py-16">
        <div className="container mx-auto px-4">
          <ItemBreadChumb />
          <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3 lg:row-end-1">
              <div className="lg:flex lg:items-start">
                <div className="lg:order-2 lg:ml-5">
                  <ChakraCarousel>
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

            <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
              <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
                {itemPost.title}
              </h1>

              <div className="mt-5 flex items-center">
                <div className="flex items-center">
                <StarRatings
                  rating={averageRating}
                  starRatedColor="orange"
                  numberOfStars={5}
                  starDimension="15px"
                  starSpacing="1px"
                />
                <span className="ml-1 mt-1 text-sm">({averageRating.toFixed(1)})</span>
                </div>
                
              
               
              
            
            
                <p className="ml-4 mt-1 text-sm font-medium text-gray-500">
                  {totalComments} Reviews
                </p>
              </div>

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

              <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                <div className="flex items-end">
                  <h1 className="text-3xl font-bold">{itemPost.price}</h1>
                  <span className="text-base">/month</span>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-emerald-600 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-emerald-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 mr-3 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  Contact
                </button>
              </div>
              <h2 className="mt-4 text-base text-gray-900">Contact Details</h2>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                  <svg
                    className="mr-2 block h-5 w-5 align-middle text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      className=""
                    ></path>
                  </svg>
                  Email : {itemPost.emailContact}
                </li>

                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                  <svg
                    className="mr-2 block h-5 w-5 align-middle text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      className=""
                    ></path>
                  </svg>
                  Mobile : {itemPost.mobileContact}
                </li>
                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                  <svg
                    className="mr-2 block h-5 w-5 align-middle text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      className=""
                    ></path>
                  </svg>
                  WhatsApp : {itemPost.whatsappContact}
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              {/* <nav className="flex gap-4"> */}
              {/* <a
                    href="#"
                    title=""
                    className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"
                  >
                    {" "}
                    Description{" "}
                  </a>

                  <a
                    href="#"
                    title=""
                    className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600"
                  >
                    Reviews
                    <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100">
                      {" "}
                      1,209{" "}
                    </span>
                  </a>
                </nav> */}
              <Tabs>
                <TabList>
                  <Tab
                    sx={{
                      _selected: {
                        color: "black",
                        borderBottomColor: "black",
                      },
                    }}
                  >
                    <p
                      title=""
                      className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600"
                    >
                      {" "}
                      Description{" "}
                    </p>
                  </Tab>
                  <Tab
                    sx={{
                      _selected: {
                        color: "black",
                        borderBottomColor: "black",
                      },
                    }}
                  >
                    <p
                      title=""
                      className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600"
                    >
                      Reviews
                      <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100">
                        {" "}
                       {totalComments}{" "}
                      </span>
                    </p>
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <div className="mt-8 flow-root sm:mt-12">
                      <h1 className="text-3xl font-bold">
                        Description of Property
                      </h1>
                      <p className="mt-4">{itemPost.description}</p>
                      {/* <h1 className="mt-8 text-3xl font-bold">Description of Property</h1>
          <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.</p>
          <p className="mt-4">Amet consectetur adipisicing elit. Optio numquam enim facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore rerum nostrum eius facere, ad neque.</p> */}
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <ReviewCard postId={id} />
                  </TabPanel>
                </TabPanels>
              </Tabs>

              <div className="border-b mt-7 border-gray-300"></div>
              <div className="flow-root sm:mt-12">
                <h1 className="text-2xl font-bold">Write your Review</h1>
                <Comment postId={id} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
