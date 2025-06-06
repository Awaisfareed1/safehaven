
import React from 'react'
import Head from 'next/head'
import AboutBanner from '@/components/AboutBanner'
import AboutVision from '@/components/AboutVision'
import AboutApproach from '@/components/AboutApproach'
import AboutTeam from '@/components/AboutTeam'

const AboutUs = () => {
  return (
    <>
      <Head>
        
        <title>About Us | Safe Haven</title>
        <meta name="description" content="Learn about our mission to empower families to build generational wealth and make confident financial decisions with clarity and purpose." />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutBanner />
      <AboutVision />
      <AboutApproach />
      <AboutTeam />
    </>
  )
}

export default AboutUs