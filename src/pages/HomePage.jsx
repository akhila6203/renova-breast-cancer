import HeroSlider from "../components/HeroSlider";
import HomePathway from "../components/home/HomePathway";
import HomeServices from "../components/home/HomeServices";
import HomeAboutTeaser from "../components/home/HomeAboutTeaser";
import HomeDoctors from "../components/home/HomeDoctors";
import HomeWhy from "../components/home/HomeWhy";
import HomePatientCare from "../components/home/HomePatientCare";
import TestimonialsSlider from "../components/TestimonialsSlider";
import VideoSlider from "../components/VideoSlider";
import HomeBlogs from "../components/home/HomeBlogs";
import HomeContactBanner from "../components/home/HomeContactBanner";
import HomeBrochures from "../components/home/HomeBrochures";
import WaveDivider from "../components/WaveDivider";
import PhotoGallery from "../components/PhotoGallery";

import TrustStrip from "../components/home/TrustStrip";
import TreatmentProcess from "../components/home/TreatmentProcess";


export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <TrustStrip />

      <HomePathway />
      {/* <WaveDivider from="#FFFFFF" to="#F6F9F6" /> */}
      <HomeServices />
      {/* <WaveDivider from="#F6F9F6" to="#FFFFFF" flip /> */}
      <HomeBrochures />
      <WaveDivider from="#FFFFFF" to="#F6F9F6" /> 
      <HomeAboutTeaser />
      <HomeDoctors />
      <HomeWhy />

      <TreatmentProcess />
      
      <HomePatientCare />
      <TestimonialsSlider />
      <VideoSlider />
      <PhotoGallery/>
      <HomeBlogs />
      <HomeContactBanner />
    </>
  );
}
