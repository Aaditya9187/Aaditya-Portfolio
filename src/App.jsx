import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { useEffect } from 'react'

import { NavBar, Welcome, Dock, Home } from '#components';
import { Finder, Resume, Safari, Terminal, Text, Image, Contact, Photos } from '#windows';

gsap.registerPlugin(Draggable);

const App = () => {
  useEffect(() => {
    const saved = localStorage.getItem('wallpaperUrl');
    if (saved) {
      document.documentElement.style.setProperty(
        '--wallpaper-url', `url('${saved}')`
      );
    }
  }, []);
  return (
    <main>
      <NavBar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Image />
      <Text />
      <Finder />
      <Contact />
      <Home />
      <Photos />
    </main>
  )
}

export default App
