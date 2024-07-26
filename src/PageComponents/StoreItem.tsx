import React from 'react';
import { TfiLocationPin } from "react-icons/tfi";
import { Spinner } from '@chakra-ui/react';

// Define a type for the post
interface Post {
  id: number;
  title: string;
  images?: string[];
  cityDistrict: string;
  accommodationType?: string;
  noOfBed?: number;
  noOfBathroom?: number;
  facilities?: string[];
  price: number;
}

interface StoreItemProps {
  post: Post;
}

const StoreItem: React.FC<StoreItemProps> = ({ post }) => {
  return (
    <article key={post.id} className="mb-4 w-[500px] max-w-full overflow-hidden rounded-xl border text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl">
      <div className="w-full h-48 overflow-hidden">
        {post.images && post.images[0] ? (
          <img
            src={post.images[0]}
            alt=""
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-500">No image available</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="pb-1">
          <a
            href="#"
            className="text-lg hover:text-green-600 font-medium duration-500 ease-in-out"
          >
            {post.title}
          </a>
        </div>
        <div className="pb-6">
          <a
            href="#"
            className="flex items-center text-sm font-medium duration-500 ease-in-out"
          >
            <TfiLocationPin className="mr-2" />
            <span>{post.cityDistrict}</span>
          </a>
        </div>
        <ul className="box-border flex flex-wrap list-none border-t border-b border-solid border-gray-200 px-0 py-6">
                                {post.accommodationType && (
                                    <li className="mr-3 mb-2 flex items-center text-left bg-gray-100 p-2 rounded-md">
                                      <i className="mr-1 text-2xl text-green-600">
                                        {/* Cooking icon SVG */}
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          aria-hidden="true"
                                          className="h-5 w-5"
                                          preserveAspectRatio="xMidYMid meet"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M10.38 13.08A1 1 0 0 0 10 13H6a1 1 0 0 0 0 2h1.59l-5.3 5.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L9 16.41V18a1 1 0 0 0 2 0v-4a1 1 0 0 0-.08-.38a1 1 0 0 0-.54-.54ZM10 5a1 1 0 0 0-1 1v1.59l-5.29-5.3a1 1 0 0 0-1.42 1.42L7.59 9H6a1 1 0 0 0 0 2h4a1 1 0 0 0 .38-.08a1 1 0 0 0 .54-.54A1 1 0 0 0 11 10V6a1 1 0 0 0-1-1Zm3.62 5.92A1 1 0 0 0 14 11h4a1 1 0 0 0 0-2h-1.59l5.3-5.29a1 1 0 1 0-1.42-1.42L15 7.59V6a1 1 0 0 0-2 0v4a1 1 0 0 0 .08.38a1 1 0 0 0 .54.54ZM16.41 15H18a1 1 0 0 0 0-2h-4a1 1 0 0 0-.38.08a1 1 0 0 0-.54.54A1 1 0 0 0 13 14v4a1 1 0 0 0 2 0v-1.59l5.29 5.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"
                                          />
                                        </svg>
                                      </i>
                                      <span className="text-sm">{post.accommodationType}</span>
                                    </li>
                                  )}
                                  {post.noOfBathroom && (
                                    <li className="mr-3 mb-2 flex items-center text-left bg-gray-100 p-2 rounded-md">
                                      <i className="mr-1 text-2xl text-green-600">
                                        {/* Cooking icon SVG */}
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          aria-hidden="true"
                                          className="h-5 w-5"
                                          preserveAspectRatio="xMidYMid meet"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M10.38 13.08A1 1 0 0 0 10 13H6a1 1 0 0 0 0 2h1.59l-5.3 5.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L9 16.41V18a1 1 0 0 0 2 0v-4a1 1 0 0 0-.08-.38a1 1 0 0 0-.54-.54ZM10 5a1 1 0 0 0-1 1v1.59l-5.29-5.3a1 1 0 0 0-1.42 1.42L7.59 9H6a1 1 0 0 0 0 2h4a1 1 0 0 0 .38-.08a1 1 0 0 0 .54-.54A1 1 0 0 0 11 10V6a1 1 0 0 0-1-1Zm3.62 5.92A1 1 0 0 0 14 11h4a1 1 0 0 0 0-2h-1.59l5.3-5.29a1 1 0 1 0-1.42-1.42L15 7.59V6a1 1 0 0 0-2 0v4a1 1 0 0 0 .08.38a1 1 0 0 0 .54.54ZM16.41 15H18a1 1 0 0 0 0-2h-4a1 1 0 0 0-.38.08a1 1 0 0 0-.54.54A1 1 0 0 0 13 14v4a1 1 0 0 0 2 0v-1.59l5.29 5.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"
                                          />
                                        </svg>
                                      </i>
                                      <span className="text-sm">{post.noOfBed} Beds</span>
                                    </li>
                                  )}
                                  {post.noOfBathroom && (
                                    <li className="mr-3 mb-2 flex items-center text-left bg-gray-100 p-2 rounded-md">
                                      <i className="mr-1 text-2xl text-green-600">
                                        {/* Cooking icon SVG */}
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          aria-hidden="true"
                                          className="h-5 w-5"
                                          preserveAspectRatio="xMidYMid meet"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M10.38 13.08A1 1 0 0 0 10 13H6a1 1 0 0 0 0 2h1.59l-5.3 5.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L9 16.41V18a1 1 0 0 0 2 0v-4a1 1 0 0 0-.08-.38a1 1 0 0 0-.54-.54ZM10 5a1 1 0 0 0-1 1v1.59l-5.29-5.3a1 1 0 0 0-1.42 1.42L7.59 9H6a1 1 0 0 0 0 2h4a1 1 0 0 0 .38-.08a1 1 0 0 0 .54-.54A1 1 0 0 0 11 10V6a1 1 0 0 0-1-1Zm3.62 5.92A1 1 0 0 0 14 11h4a1 1 0 0 0 0-2h-1.59l5.3-5.29a1 1 0 1 0-1.42-1.42L15 7.59V6a1 1 0 0 0-2 0v4a1 1 0 0 0 .08.38a1 1 0 0 0 .54.54ZM16.41 15H18a1 1 0 0 0 0-2h-4a1 1 0 0 0-.38.08a1 1 0 0 0-.54.54A1 1 0 0 0 13 14v4a1 1 0 0 0 2 0v-1.59l5.29 5.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"
                                          />
                                        </svg>
                                      </i>
                                      <span className="text-sm">{post.noOfBathroom} Bathroom</span>
                                    </li>
                                  )}
                                  {post.facilities.includes("Wi-Fi") && (
                                    <li className="mr-3 mb-2 flex items-center text-left bg-gray-100 p-2 rounded-md">
                                      <i className="mr-1 text-2xl text-green-600">
                                        {/* Cooking icon SVG */}
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          aria-hidden="true"
                                          className="h-5 w-5"
                                          preserveAspectRatio="xMidYMid meet"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M10.38 13.08A1 1 0 0 0 10 13H6a1 1 0 0 0 0 2h1.59l-5.3 5.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L9 16.41V18a1 1 0 0 0 2 0v-4a1 1 0 0 0-.08-.38a1 1 0 0 0-.54-.54ZM10 5a1 1 0 0 0-1 1v1.59l-5.29-5.3a1 1 0 0 0-1.42 1.42L7.59 9H6a1 1 0 0 0 0 2h4a1 1 0 0 0 .38-.08a1 1 0 0 0 .54-.54A1 1 0 0 0 11 10V6a1 1 0 0 0-1-1Zm3.62 5.92A1 1 0 0 0 14 11h4a1 1 0 0 0 0-2h-1.59l5.3-5.29a1 1 0 1 0-1.42-1.42L15 7.59V6a1 1 0 0 0-2 0v4a1 1 0 0 0 .08.38a1 1 0 0 0 .54.54ZM16.41 15H18a1 1 0 0 0 0-2h-4a1 1 0 0 0-.38.08a1 1 0 0 0-.54.54A1 1 0 0 0 13 14v4a1 1 0 0 0 2 0v-1.59l5.29 5.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"
                                          />
                                        </svg>
                                      </i>
                                      <span className="text-sm">Wi-Fi</span>
                                    </li>
                                  )}
                                  {post.facilities.includes("Parking") && (
                                    <li className="mr-3 mb-2 flex items-center text-left bg-gray-100 p-2 rounded-md">
                                      <i className="mr-1 text-2xl text-green-600">
                                        {/* Cooking icon SVG */}
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          aria-hidden="true"
                                          className="h-5 w-5"
                                          preserveAspectRatio="xMidYMid meet"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M10.38 13.08A1 1 0 0 0 10 13H6a1 1 0 0 0 0 2h1.59l-5.3 5.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L9 16.41V18a1 1 0 0 0 2 0v-4a1 1 0 0 0-.08-.38a1 1 0 0 0-.54-.54ZM10 5a1 1 0 0 0-1 1v1.59l-5.29-5.3a1 1 0 0 0-1.42 1.42L7.59 9H6a1 1 0 0 0 0 2h4a1 1 0 0 0 .38-.08a1 1 0 0 0 .54-.54A1 1 0 0 0 11 10V6a1 1 0 0 0-1-1Zm3.62 5.92A1 1 0 0 0 14 11h4a1 1 0 0 0 0-2h-1.59l5.3-5.29a1 1 0 1 0-1.42-1.42L15 7.59V6a1 1 0 0 0-2 0v4a1 1 0 0 0 .08.38a1 1 0 0 0 .54.54ZM16.41 15H18a1 1 0 0 0 0-2h-4a1 1 0 0 0-.38.08a1 1 0 0 0-.54.54A1 1 0 0 0 13 14v4a1 1 0 0 0 2 0v-1.59l5.29 5.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"
                                          />
                                        </svg>
                                      </i>
                                      <span className="text-sm">Parking</span>
                                    </li>
                                  )}
                                  
                                  {post.facilities.includes("Aircondition") && (
                                    <li className="mr-3 mb-2 flex items-center text-left  bg-gray-100 p-2 rounded-md">
                                      <i className="mr-1 text-2xl text-green-600">
                                        {/* Cooking icon SVG */}
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          aria-hidden="true"
                                          className="h-5 w-5"
                                          preserveAspectRatio="xMidYMid meet"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="M10.38 13.08A1 1 0 0 0 10 13H6a1 1 0 0 0 0 2h1.59l-5.3 5.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L9 16.41V18a1 1 0 0 0 2 0v-4a1 1 0 0 0-.08-.38a1 1 0 0 0-.54-.54ZM10 5a1 1 0 0 0-1 1v1.59l-5.29-5.3a1 1 0 0 0-1.42 1.42L7.59 9H6a1 1 0 0 0 0 2h4a1 1 0 0 0 .38-.08a1 1 0 0 0 .54-.54A1 1 0 0 0 11 10V6a1 1 0 0 0-1-1Zm3.62 5.92A1 1 0 0 0 14 11h4a1 1 0 0 0 0-2h-1.59l5.3-5.29a1 1 0 1 0-1.42-1.42L15 7.59V6a1 1 0 0 0-2 0v4a1 1 0 0 0 .08.38a1 1 0 0 0 .54.54ZM16.41 15H18a1 1 0 0 0 0-2h-4a1 1 0 0 0-.38.08a1 1 0 0 0-.54.54A1 1 0 0 0 13 14v4a1 1 0 0 0 2 0v-1.59l5.29 5.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"
                                          />
                                        </svg>
                                      </i>
                                      <span className="text-sm">Aircondition</span>
                                    </li>
                                  )}
                                  
                                </ul>
        <div className="flex items-center justify-between pt-6">
          <p className="text-xl font-semibold text-green-600">${post.price}</p>
        </div>
      </div>
    </article>
  );
};

export default StoreItem;
