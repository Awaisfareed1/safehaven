import React from 'react'
import Head from 'next/head'
import ServicesBanner from '@/components/ServicesBanner'
import ServicesCards from '@/components/ServicesCards'
const Services = () => {
  return (
    <>
      <Head>
        <title> Services | Safe Haven </title>
        <meta name="description" content="Empowering families to build generational wealth and make confident financial decisions with clarity and purpose." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ServicesBanner />
      <ServicesCards />
    </>
  )
}

export default Services