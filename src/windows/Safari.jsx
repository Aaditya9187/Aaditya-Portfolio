import { WindowControls } from '#components'
import { blogPosts } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import { ChevronLeft, ChevronRight, Copy, MoveRight, PanelLeft, Plus, SearchIcon, Share, ShieldHalf } from 'lucide-react'
import React from 'react'

const Safari = () => {
  return (
    <>
      <div id='window-header' className='window-drag-handle'>
        <WindowControls target="safari" />
        <PanelLeft className='ml-10 icon' />
        <div className='flex items-center gap-1 ml-5'>
          <ChevronLeft className='icon' />
          <ChevronRight className='icon' />
        </div>
        <div className='flex-1 flex-center gap-3'>
          <ShieldHalf className='icon' />
          <div className='search'>
            <SearchIcon className='icon' />
            <input
              type='text'
              placeholder='Search or enter website name'
              className='flex-1'
            />
          </div>
        </div>
        <div className='flex items-center gap-5'>
          <Share className='icon' />
          <Plus className='icon' />
          <Copy className='icon' />
        </div>
      </div>
      <div className="blog py-16 px-4 text-center bg-white">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-900 tracking-tight drop-shadow-sm">
          My Developer Blogs
        </h2>

        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="relative w-full max-w-md rounded-3xl p-[2px] bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 animate-pulseGlow">
            <div className="bg-white rounded-3xl p-8 flex flex-col items-center justify-center shadow-xl border border-gray-100">
              <div className="mb-4 animate-bounce">
                <svg
                  className="w-12 h-12 text-pink-500 drop-shadow-lg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-2 drop-shadow-sm">
                Coming Soon 🚀
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center max-w-sm">
                Developer blogs full of tutorials, tips, and insights are on the way. Stay tuned for exciting content to boost your coding skills!
              </p>
              <div className="mt-6 w-20 h-1 rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400 animate-glowLine"></div>
            </div>
          </div>
        </div>

        {/* Tailwind Custom Animations */}
        <style jsx>{`
    @keyframes pulseGlow {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.03); opacity: 0.9; }
    }
    .animate-pulseGlow {
      animation: pulseGlow 2.5s ease-in-out infinite;
    }

    @keyframes glowLine {
      0%, 100% { opacity: 0.5; }
      50% { opacity: 1; }
    }
    .animate-glowLine {
      animation: glowLine 2s infinite alternate;
    }
  `}</style>
      </div>



      {/* 
      <div className='blog'>
        <h2> My Developer Blogs </h2>
        <div className='space-y-8'> {blogPosts.map(({ id, image, title, date, link }) => (
          <div key={id} className='blog-post'>
            <div className='col-span-2 '> <img src={image} alt={title} loading='lazy' />
            </div>
            <div className='content'>
              <p>{date}</p>
              <h3>{title}</h3>
              <a href={link} target='_blank' rel='noopener noreferrer'>
                Check out the full post <MoveRight className='icon-hover' /> </a>
            </div>
          </div>
        ))}
        </div>
      </div>
      */}

    </>
  )
}

const SafariWindow = WindowWrapper(Safari, 'safari')

export default SafariWindow;
