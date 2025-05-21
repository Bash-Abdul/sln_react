// src/components/Layout.jsx
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import HeroSection from './HomePage/HeroSection';
import FixedButtons from './FixedButtons';

export default function Layout({ children }) {
    const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <>
      <Navbar isHomePage={isHomePage}/>
      <FixedButtons/>

      {/* {showHero && <HeroSection/>} */}
      {isHomePage && <HeroSection />}
      <main className={`w-full max-w-7xl px-4 mx-auto py-8 ${!isHomePage ? 'pt-[7rem]' : ''}`}>
        {children}
      </main>
      <Footer />
    </>
  );
}
