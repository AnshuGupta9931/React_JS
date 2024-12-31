import React from 'react'
import AboutHeader from './AboutHeader'
import { Outlet } from 'react-router-dom'
function AboutLayout() {
  return (
    <>
    <AboutHeader/>
   <Outlet/>
    </>
  )
}

export default AboutLayout