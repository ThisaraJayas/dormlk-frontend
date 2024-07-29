import HomeBanner from '@/PageComponents/HomeBanner'
import HomeHeader from '@/PageComponents/HomeHeader'
import HomeHeaderTabs from '@/PageComponents/HomeHeaderTabs'
import HomeItems from '@/PageComponents/HomeItems'
import HomeStat from '@/PageComponents/HomeStat'
import HomeTestimonial from '@/PageComponents/HomeTestimonial'
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
    <HomeHeaderTabs/>
    <HomeTitle/>
        <HomeItems/>
        <HomeTestimonial/>
        <HomeBanner/>
    </div>
  )
}
