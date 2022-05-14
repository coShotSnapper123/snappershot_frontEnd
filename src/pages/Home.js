import React,{useEffect,useState }from 'react'
import Header from "./layouts/Header/index"
import Footer from "./layouts/Footer/index"
import Slider from "./layouts/Slider/index";
import NotFound from "./NotFound/index";
import TrandingSearches from  "../components/TrendingSearches/index"
import Contributor  from "../components/Contributor/Contributor"
import LoginSignupBanner from '../components/LoginSignupBanner/LoginSignupBanner';
import Popular from '../components/Popular/Popular';
import Collection from '../components/Collection/Collection';

export default function Home() {
  // const [fontSize,setFontSize] =useState(0)  
  // const handleScroll = () => setFontSize(window.pageYOffset)
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)
  // }, []);
  return (
    <>

        {/* <Header logoChange={fontSize < 600 ? false : true} scrollFixed={fontSize < 600 ? "absolute_top" : "fixed-top"}/> */}
        <Slider />
        <Popular />
        <TrandingSearches />
        <LoginSignupBanner />  
        <Collection /> 
        <Contributor />
       
    </>
  )
}
