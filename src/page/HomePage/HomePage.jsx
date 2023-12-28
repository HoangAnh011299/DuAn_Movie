import React from 'react'
import ListMovie from './ListMovie'
import TabMovie from './TabMovie/TabMovie'
import Footer from './TabMovie/Footer'
import News from './TabMovie/News'

export default function HomePage() {
  return (
    <div>
        <ListMovie/>
        <br />
        <TabMovie/>
        <br />
        <News/>
        <br />
        <Footer/>
    </div>
  )
}
 