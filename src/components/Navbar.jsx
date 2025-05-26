// // src/components/Navbar.jsx
// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // export default function Navbar() {
// //   return (
// //     <nav className="bg-gray-800 text-white">
// //       <div className="max-w-7xl mx-auto flex justify-between items-center bg-red-400 py-[1rem]">
// //         <h1 className="font-bold text-lg">MySite</h1>
// //         <div className="space-x-4">
// //           <Link to="/" className="hover:underline">Home</Link>
// //           <Link to="/about" className="hover:underline">About</Link>
// //           <Link to="/contact" className="hover:underline">Contact</Link>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }

// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/logo_color.png'

// export default function Navbar({isHomePage}) {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     if (!isHomePage) return; 

//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [isHomePage]);

//   const navbarClass = isHomePage
//     ? scrolled
//       ? 'bg-white shadow-md text-black'
//       : 'bg-transparent text-white'
//     : 'bg-white shadow-md text-black';

//   return (
//     <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${navbarClass}`}>
//       {/* <nav className="max-w-full mx-auto flex items-center justify-between px-[10%] py-10"> */}
//       <nav className="w-full max-w-screen-2xl mx-auto px-6 md:px-[5%] lg:px-[10%] py-3 flex items-center justify-between">
//         {/* <Link to="/" className="text-xl font-bold text-blue-600"><img src={logo} alt="SLN logo image" /></Link> */}
//         <Link to="/"><img src={logo} className='w-[6rem]' alt="SLN logo image" /></Link>
//         <ul className="flex gap-10 text-sm font-medium">
//           <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
//           <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
//           <li><Link to="/services" className="hover:text-blue-500">Services</Link></li>
//           <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }


import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo_color.png';

export default function Navbar({ isHomePage }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const navbarClass = isHomePage
    ? scrolled
      ? 'bg-white shadow-md text-black'
      : 'bg-transparent text-white'
    : 'bg-white shadow-md text-black';

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${navbarClass}`}>
      <nav className="w-full max-w-screen-2xl mx-auto px-6 md:px-[5%] lg:px-[10%] py-3 flex items-center justify-between">
        <NavLink to="/">
          <img src={logo} className="w-[6rem]" alt="SLN logo image" />
        </NavLink>
        <ul className="flex gap-10 text-sm font-medium">
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/services', label: 'Services' },
            { to: '/contact', label: 'Contact' },
          ].map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `relative pb-1 transition-colors duration-300 ${
                    isActive ? 'text-blue-600' : 'hover:text-blue-500'
                  }`
                }
              >
                <span
                  className={`
                    relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5
                    after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300
                    after:w-0 hover:after:w-full
                    ${window.location.pathname === to ? 'after:w-full' : ''}
                  `}
                >
                  {label}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

// import { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import logo from '../assets/logo_color.png';

// export default function Navbar({ isHomePage }) {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     if (!isHomePage) return;

//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [isHomePage]);

//   const navbarClass = isHomePage
//     ? scrolled
//       ? 'bg-white shadow-md text-black'
//       : 'bg-transparent text-white'
//     : 'bg-white shadow-md text-black';

//   const navLinks = [
//     { to: '/', label: 'Home' },
//     { to: '/about', label: 'About' },
//     { to: '/services', label: 'Services' },
//     { to: '/contact', label: 'Contact' },
//   ];

//   return (
//     <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${navbarClass}`}>
//       <nav className="w-full max-w-screen-2xl mx-auto px-6 md:px-[5%] lg:px-[10%] py-3 flex items-center justify-between relative">
//         {/* Logo */}
//         <NavLink to="/">
//           <img src={logo} className="w-[6rem]" alt="SLN logo image" />
//         </NavLink>

//         {/* Desktop Nav */}
//         <ul className="hidden md:flex gap-10 text-sm font-medium">
//           {navLinks.map(({ to, label }) => (
//             <li key={to}>
//               <NavLink
//                 to={to}
//                 className={({ isActive }) =>
//                   `relative pb-1 transition-colors duration-300 ${
//                     isActive ? 'text-blue-600' : 'hover:text-blue-500'
//                   }`
//                 }
//               >
//                 <span
//                   className={`
//                     relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5
//                     after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300
//                     after:w-0 hover:after:w-full
//                     ${window.location.pathname === to ? 'after:w-full' : ''}
//                   `}
//                 >
//                   {label}
//                 </span>
//               </NavLink>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Toggle Button */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="md:hidden text-3xl focus:outline-none z-50 relative"
//         >
//           {menuOpen && '☰'}
//         </button>

//         {/* Mobile Nav */}
//         {menuOpen && (
//           <ul className="md:hidden fixed top-0 left-0 w-full h-full background shadow-md text-white py-6 flex flex-col items-center justify-center gap-6 text-sm font-medium transition-all duration-300">
//              <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="md:hidden text-3xl focus:outline-none z-1000 fixed top-[4.5%] right-[5.5%]"
//         >
//           {menuOpen && '×'}
//         </button>
//             {navLinks.map(({ to, label }) => (
//               <li key={to}>
//                 <NavLink
//                   to={to}
//                   className={({ isActive }) =>
//                     `block pb-1 transition-colors duration-300 ${
//                       isActive ? 'text-blue-600' : 'hover:text-blue-500'
//                     }`
//                   }
//                   onClick={() => setMenuOpen(false)} // Close on click
//                 >
//                   {label}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         )}
//       </nav>
//     </header>
//   );
// }

