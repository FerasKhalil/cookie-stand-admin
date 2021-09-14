import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <Head>
    <title>Firas Next app</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>

    <Header/>
    <Main/> 
    <Footer/>
    </div>
  )
}
