import React from 'react'
import ContactHero from '@/components/ContactHero'
import ContactForm from '@/components/ContactForm'
import Head from 'next/head'
const contactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Safe Haven</title>
        <meta name="description" content="Get in touch with us to learn how we can help you build generational wealth and make confident financial decisions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactHero />
      <div className="bg-gray-100">
        <ContactForm />
      </div>
    </>
  )
}

export default contactUs