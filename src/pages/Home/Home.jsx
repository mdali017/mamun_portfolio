import React from 'react'
import NavBar from '../../components/Shared/NavBar'
import HeroSection from './HeroSection/HeroSection'
import AboutSection from './AboutSection/AboutSection'
import ServicesSection from './ServicesSection/ServicesSection'
import PortfolioSection from './PortfolioSection/PortfolioSection'
import BlogSection from './BlogSection/BlogSection'
import ContactSection from './ContactSection/ContactSection'
import Footer from '../../components/Shared/Footer'

const Home = () => {
  return (
    <div>
        <NavBar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <BlogSection />
        <ContactSection />
        <Footer />
    </div>
  )
}

export default Home