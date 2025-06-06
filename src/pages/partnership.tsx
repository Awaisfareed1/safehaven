import BusinessOpportunity from '@/components/BusinessOpportunity'
import PartnershipBanner from '@/components/PartnershipBanner'
import Head from 'next/head'
import React from 'react'

const partnership = () => {
  return (
    <>
    <Head>
      <title>Partnership | Safe Haven</title>
      <meta name="description" content="Join us in our mission to empower families to build generational wealth and make confident financial decisions with clarity and purpose." />

      <link rel="icon" href="/favicon.ico" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />

    </Head>
    <PartnershipBanner />
    <BusinessOpportunity />
    </>
  )
}

export default partnership