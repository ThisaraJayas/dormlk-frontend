import DefaulltHeader from '@/PageComponents/DefaulltHeader'
import Footer from '@/PageComponents/Footer'
import { ListPost } from '@/PageComponents/ListPost'
import ListPostSteper from '@/PageComponents/ListPostSteper'
import React from 'react'

export default function Post() {
  return (
    <div>
        <DefaulltHeader/>
        {/* <ListPost/> */}
        <ListPostSteper/>
        <Footer/>
    </div>
  )
}
