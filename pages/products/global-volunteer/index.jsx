import React from 'react'
import HtmlHead from "@components/partner-portal/HtmlHead";
import Nav from "@components/Nav";
import HomeVideo from "@components/homevideo";
import Counter from "@components/CounterSection";
import VideoTestimonials from '@components/products/VideoTestimonials';
import Layout from '@components/products/Layout';
import Projectsigv from '@components/products/projects';

function Volunteer() {
  return (
    <>
      <HtmlHead title={"Global Volunteer - AIESEC in Sri Lanka"} description={"Global Volunteer is a cross-cultural experience for youth (age 18 – 30) who want to gain personal development and leave an impact on the world."}/>
      <Nav/>
      <Layout bgColor="global-volunteer" textColor="white">
      {/* Use bgColor everywhere you need global volunteer colour */}
      
      <HomeVideo/>
      {/*<Counter/> */}
      <br />
      <br />
      <VideoTestimonials/>
      </Layout>
      <Layout textColor="global-volunteer">
      <Projectsigv/>
      </Layout>

    



    </>
  )
}

export default Volunteer