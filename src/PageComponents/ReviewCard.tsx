import React from 'react'
import im1 from '../styles/home1.jpg'

export default function ReviewCard() {
  return (
    <div>
        
<div className="mx-auto my-8 flex max-w-screen-sm rounded-xl border border-gray-100 p-4 text-left text-gray-600 shadow-lg sm:p-8">
  <img className="mr-5 block h-3 w-3 max-w-full text-left rounded-full align-middle sm:h-16 sm:w-16" src={im1} alt="Profile Picture" />
  <div className="w-full text-left">
    <div className="mb-2 flex flex-col justify-between text-gray-600 sm:flex-row">
      <h3 className="font-medium">Diana Anderson</h3>
      <time className="text-xs" dateTime="2022-11-13T20:00Z">July 18, 2022 at 10:36 AM</time>
    </div>
    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing eliggggggggggggfgegeh grgh rrtrtt!</p>
    <div className="mt-5 flex items-center justify-between text-gray-600">
      
    </div>
  </div>
</div>

    </div>
  )
}
