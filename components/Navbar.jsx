import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FiMoon, FiSun } from 'react-icons/fi';
import { motion } from 'framer-motion';
import NavLogo from '../public/assets/navLogo.png'

const links = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
  { href: '/#contact', label: 'Contact' },
];

const iconButton = 'rounded-full shadow-lg shadow-line p-3 cursor-pointer hover:scale-105 ease-in duration-300';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [dark, setDark] = useState(false);
  const hamburgerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const drawerRef = useRef(null);

  // Return focus to the toggle before the drawer is hidden, so aria-hidden/inert never
  // lands on an element that still contains the focused node.
  const closeNav = () => {
    if (drawerRef.current?.contains(document.activeElement)) hamburgerRef.current?.focus();
    setNav(false);
  };

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch (e) {}
  };

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
  }, []);

  useEffect(() => {
    const handleShadow = () => setShadow(window.scrollY >= 90);
    window.addEventListener('scroll', handleShadow);
    return () => window.removeEventListener('scroll', handleShadow);
  }, []);

  useEffect(() => {
    // React 18 has no `inert` prop support; toggle the attribute directly.
    drawerRef.current?.toggleAttribute('inert', !nav);
    if (!nav) return;
    // Defer a frame so the drawer is rendered visible before focus moves into it.
    const raf = requestAnimationFrame(() => closeButtonRef.current?.focus());
    const onKey = (e) => e.key === 'Escape' && closeNav();
    window.addEventListener('keydown', onKey);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('keydown', onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nav]);

  const themeButton = (
    <motion.button
      type='button'
      onClick={toggleTheme}
      whileHover={{ rotate: 20, scale: 1.08 }}
      whileTap={{ scale: 0.85 }}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      className='flex h-9 w-9 items-center justify-center rounded-full border border-line bg-transparent text-ink transition-colors hover:border-accent hover:text-accent'
    >
      {dark ? <FiSun size={16} aria-hidden /> : <FiMoon size={16} aria-hidden />}
    </motion.button>
  );

  return (
    <header
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl shadow-line z-[100] glass text-ink transition-all ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100] bg-canvas text-ink transition-all ease-in-out duration-300'
      }
    >
      <nav aria-label='Primary' className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/' aria-label='Mohammad Imran – home' className='inline-flex'>
          <Image src={NavLogo} alt='' className='h-14 w-auto' />
        </Link>
        <div>
          <ul className='hidden md:flex items-center'>
            {links.map(({ href, label }) => (
              <li key={href} className='ml-10 text-sm uppercase nav-link'>
                <Link href={href}>{label}</Link>
              </li>
            ))}
            <li className='ml-10'>{themeButton}</li>
          </ul>
          {/* Mobile controls */}
          <div className='md:hidden flex items-center gap-4'>
            {themeButton}
            <button
              ref={hamburgerRef}
              type='button'
              onClick={() => setNav(true)}
              aria-label='Open menu'
              aria-expanded={nav}
              aria-controls='mobile-menu'
              className='bg-transparent p-1 text-ink'
            >
              <AiOutlineMenu size={25} aria-hidden />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        onClick={closeNav}
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          ref={drawerRef}
          id='mobile-menu'
          role='dialog'
          aria-modal='true'
          aria-label='Menu'
          aria-hidden={!nav}
          onClick={(e) => e.stopPropagation()}
          className={
            nav
              ? 'visible fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-canvas text-ink p-10 transition-all ease-in duration-500'
              : 'invisible fixed left-[-100%] top-0 p-10 transition-all ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/' aria-label='Mohammad Imran – home' onClick={closeNav} className='inline-flex'>
                <Image src={NavLogo} alt='' className='h-10 w-auto' />
              </Link>
              <button
                ref={closeButtonRef}
                type='button'
                onClick={closeNav}
                aria-label='Close menu'
                className={`${iconButton} bg-transparent text-ink`}
              >
                <AiOutlineClose aria-hidden />
              </button>
            </div>
            <div className='border-b border-line my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <nav aria-label='Mobile'>
              <ul className='uppercase'>
                {links.map(({ href, label }) => (
                  <li key={href} className='py-4 text-sm'>
                    <Link href={href} onClick={closeNav} className='block'>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-accent'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/mohammadimran1802/'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='LinkedIn profile'
                  className={iconButton}
                >
                  <FaLinkedinIn aria-hidden />
                </a>
                <a
                  href='https://github.com/beingimran'
                  target='_blank'
                  rel='noreferrer'
                  aria-label='GitHub profile'
                  className={iconButton}
                >
                  <FaGithub aria-hidden />
                </a>
                <a href='mailto:imranben35@gmail.com' aria-label='Email Mohammad Imran' className={iconButton}>
                  <AiOutlineMail aria-hidden />
                </a>
                <Link href='/resume' aria-label='View resume' onClick={closeNav} className={iconButton}>
                  <BsFillPersonLinesFill aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
