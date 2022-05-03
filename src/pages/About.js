import React from 'react'
import Banner from '../components/Banner/Banner'
import TotalDownload from '../components/TotalDownload/TotalDownload';
import Teams from '../components/Teams/Teams';
import Vision from '../components/Vision/Vision';
import JoinCommunity from '../components/JoinCommunity/JoinCommunity';

export default function About() {
  return (
    <>
        <Banner />
        <TotalDownload />
        <Teams />
        <Vision />
        <JoinCommunity mtb="mtb_50" />
    </>
  )
}
