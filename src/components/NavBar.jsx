import dayjs from 'dayjs'
import { navIcons, navLinks, locations } from "#constants";
import useWindowStore from '#store/window';
import useLocationStore from '#store/location';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const NavBar = () => {

  const { openWindow } = useWindowStore();
  const { setActiveLocation } = useLocationStore();

  const wrapperRef = useRef(null);
  const gifRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const gif = gifRef.current;

    if (!wrapper || !gif) return;

    // Initial state (hidden + down)
    gsap.set(gif, {
      opacity: 0,
      y: 8
    });

    const enter = () => {
      gsap.to(gif, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power3.out"
      });
    };

    const leave = () => {
      gsap.to(gif, {
        opacity: 0,
        y: 8,
        duration: 0.3,
        ease: "power3.out"
      });
    };

    wrapper.addEventListener("mouseenter", enter);
    wrapper.addEventListener("mouseleave", leave);

    return () => {
      wrapper.removeEventListener("mouseenter", enter);
      wrapper.removeEventListener("mouseleave", leave);
    };
  }, []);
  
  const handleNavLinkClick = (type) => {
    if (!type) return;

    // Ensure Finder opens at Work instead of Trash by default
    if (type === 'finder') {
      setActiveLocation(locations.work);
    }

    openWindow(type);
  };

  const handleIconClick = ({ type, action }) => {
    if (!type) return;
    
    openWindow(type);
    
    // If action is specified, perform it (e.g., "about" opens About me location)
    if (action === 'about') {
      setActiveLocation(locations.about);
    }
  }

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <div className="portfolio-wrapper" ref={wrapperRef}>
          <p className="font-bold portfolio-text">Swastik's Portfolio</p>

          <div className="portfolio-text-container">
            <div className="overlay-gif" ref={gifRef}></div>
          </div>
        </div>
        <ul>
          {navLinks.map(({ name, id, type }) => (
            <li key={id} onClick={() => handleNavLinkClick(type)}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {navIcons.map(({ id, img, type, action }) => (
            <li key={id} onClick={() => handleIconClick({ type, action })}>
              <img
                src={img}
                className={`icon-hover ${type ? 'cursor-pointer' : ''}`}
                alt={`icon-${id}`}
              />
            </li>
          ))}
        </ul>
        <time>
          {dayjs().format('ddd MMM D h:mm A')}
        </time>
      </div>
    </nav>
  );
};

export default NavBar;
