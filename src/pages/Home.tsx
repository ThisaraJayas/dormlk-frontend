import HomeHeader from '@/PageComponents/HomeHeader'
import HomeItems from '@/PageComponents/HomeItems'
import HomeStat from '@/PageComponents/HomeStat'
import HomeTitle from '@/PageComponents/HomeTitle'
import React from 'react'


export default function Home() {
  return (
    <div>
         <div className="homeContainer"> {/* This div has the background image */}
      <HomeHeader />
      {/* Other content can go here */}
    </div>
    <HomeStat/>
    <HomeTitle/>
        <HomeItems/>
        
    </div>
  )
}
