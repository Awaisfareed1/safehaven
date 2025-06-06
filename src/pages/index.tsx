import HeroSlider from '@/components/HeroSlider'
import React from 'react'
import Head from 'next/head'
import HomeTeam from '@/components/HomeTeam'
import HomeWhy from '@/components/HomeWhy'
import HomeFinance from '@/components/HomeFinance'
import HomeTestimonials from '@/components/HomeTestimonials'
import HomeAbout from '@/components/HomeAbout'
const index = () => {
  return (
    <>
    <Head>
      <title>Safe Haven | Home</title>
      <meta name="description" content="Empowering families to build generational wealth and make confident financial decisions with clarity and purpose." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HeroSlider/>
    <HomeTeam />
    <HomeWhy />
    <HomeFinance />
    <HomeTestimonials />
    <HomeAbout />
    </>
  )
}

export default index