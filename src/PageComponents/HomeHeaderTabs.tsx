import React, { useEffect } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator, Flex, Image, Box, Spinner } from '@chakra-ui/react'
import anexImg from '../assets/homeIcons/real-estate.png'
import sharedImg from '../assets/homeIcons/roommate.png'
import aprtmnetImg from '../assets/homeIcons/apartment.png'
import dblRoomImg from '../assets/homeIcons/room-mate.png'
import houseImg from '../assets/homeIcons/home(2).png'
import studioImg from '../assets/homeIcons/home-office.png'
import hostelImg from '../assets/homeIcons/hostel.png'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/Redux/store'
import { fetchPostByHouseType } from '@/Redux/Post/PostAction'
import { TfiLocationPin } from 'react-icons/tfi'



export default function HomeHeaderTabs() {
    const dispatch = useDispatch<AppDispatch>();
  const { allPostByHouseType, status } = useSelector((state: RootState) => state.Post);
  const handleTabChange = (HouseType) => {
    console.log(HouseType);
    dispatch(fetchPostByHouseType(HouseType));
  };


  useEffect(() => {
    handleTabChange("Annex");
  }, [dispatch]);

  return (
    <Box style={{ margin: '0 20px', marginTop:'3%' }}>
      <Tabs position='relative' variant='unstyled' onChange={(index) => {
              const HouseType = ["Annex", "Shared Room", "Apartment", "Double Room","House","Studio Apartment","Hostel"];
              handleTabChange(HouseType[index]);
            }}>
        <Flex justifyContent='center'>
          <Box overflowX='auto' width='100%'>
            <TabList display='flex' justifyContent='center'>
              <Tab minWidth='120px' px={4}>
                <Flex direction='column' align='center'>
                  <Image src={anexImg} alt='Icon One' boxSize='64px' mb={1} />
                  <span>Annex</span>
                </Flex>
              </Tab>
              <Tab minWidth='120px' px={4}>
                <Flex direction='column' align='center'>
                  <Image src={sharedImg} alt='Icon Two' boxSize='64px' mb={1} />
                  <span>Shared</span>
                </Flex>
              </Tab>
              <Tab minWidth='120px' px={4}>
                <Flex direction='column' align='center'>
                  <Image src={aprtmnetImg} alt='Icon Three' boxSize='64px' mb={1} />
                  <span>Appartment</span>
                </Flex>
              </Tab>
              <Tab minWidth='120px' px={4}>
                <Flex direction='column' align='center'>
                  <Image src={dblRoomImg} alt='Icon Four' boxSize='64px' mb={1} />
                  <span>Double</span>
                </Flex>
              </Tab>
              <Tab minWidth='120px' px={4}>
                <Flex direction='column' align='center'>
                  <Image src={houseImg} alt='Icon Five' boxSize='64px' mb={1} />
                  <span>House</span>
                </Flex>
              </Tab>
              <Tab minWidth='120px' px={4}>
                <Flex direction='column' align='center'>
                  <Image src={studioImg} alt='Icon Six' boxSize='64px' mb={1} />
                  <span>Studio</span>
                </Flex>
              </Tab>
              <Tab minWidth='120px' px={4}>
                <Flex direction='column' align='center'>
                  <Image src={hostelImg} alt='Icon Seven' boxSize='64px' mb={1} />
                  <span>Hostel</span>
                </Flex>
              </Tab>
            </TabList>
          </Box>
        </Flex>
        <TabIndicator mt='-1.5px' height='2px' bg='green.100' borderRadius='1px' />
        <TabPanels>
        {["Annex", "Shared Room", "Apartment", "Double Room","House","Studio Apartment","Hostel"].map(
                (houseType, index) => (
                  <TabPanel key={index}  ml={{ base: '3%', md: '3%' }} mr={{ base: '3%', md: '3%' }}>
                    <section className="flex flex-col items-center bg-white" >
                      <div  className="mt-10 grid max-w-md grid-cols-1 gap-6 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:gap-8">
                        {status === "loading" ? (
                          <div className="flex justify-center">
                            <Spinner size="lg" />
                          </div>
                        ) : (
                            allPostByHouseType?.slice(0,6).map((post) => (
                            <article className="mb-4 w-[500px] max-w-full overflow-hidden rounded-xl border text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xls">
                              <div className="w-full h-48 overflow-hidden">
                                <img
                                  src={post.images[0]}
                                  alt=""
                                  className="w-full h-full object-cover"
                                />
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

                                <ul className="m-0 flex list-none items-center justify-between px-0 pt-3 pb-0">
                                  <li className="text-left">
                                    <span className="text-sm text-gray-400">
                                      Mothly Price
                                    </span>
                                    <p className="m-0 text-base font-medium">
                                      LKR {post.price}/.
                                    </p>
                                  </li>

                                  <li className="text-left">
                                    <span className="text-sm text-gray-400">
                                      Rating
                                    </span>
                                    <ul className="m-0 flex items-center p-0 font-medium">
                                      <li className="inline text-yellow-500">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-4 w-4"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                        >
                                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                      </li>
                                      <li className="inline text-yellow-500">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-4 w-4"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                        >
                                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                      </li>
                                      <li className="inline text-yellow-500">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-4 w-4"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                        >
                                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                      </li>
                                      <li className="inline text-yellow-500">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-4 w-4"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                        >
                                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                      </li>
                                      <li className="inline text-yellow-500">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-4 w-4"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                          stroke-width="2"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                          />
                                        </svg>
                                      </li>
                                      <li className="ml-2 inline text-base">
                                        5.0(30)
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>
                            </article>
                          ))
                        )}
                      </div>
                    </section>
                  </TabPanel>
                )
              )}
        </TabPanels>
      </Tabs>
    </Box>
  )
}
