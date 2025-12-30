'use client'
import Link from 'next/link'
import { FaBookQuran, FaHouse, FaBars, FaXmark } from 'react-icons/fa6'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='bg-gradient-to-r from-green-900 to-emerald-800 text-white shadow-lg sticky top-0 z-50'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between py-4'>
          {/* Logo and Brand */}
          <Link href='/' className='flex items-center space-x-3'>
            <div className='relative'>
              <FaBookQuran className='h-10 w-10 text-emerald-300' />
              <div className='absolute -top-1 -right-1 h-4 w-4 bg-emerald-400 rounded-full'></div>
            </div>
            <div className='hidden sm:block'>
              <h1 className='text-xl md:text-2xl font-bold leading-tight'>
                Islamic Education
              </h1>
              <p className='text-emerald-200 text-xs md:text-sm'>
                Learn, Reflect, Implement
              </p>
            </div>
            <div className='sm:hidden'>
              <h1 className='text-lg font-bold'>IES</h1>
              <p className='text-emerald-200 text-xs'>Sheikh Seid</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-6'>
            <Link
              href='/'
              className='flex items-center space-x-2 hover:text-emerald-300 transition-colors px-3 py-2 rounded-lg hover:bg-white/10'
            >
              <FaHouse className='h-4 w-4' />
              <span className='font-medium'>Home</span>
            </Link>
            <Link
              href='/#lessons'
              className='hover:text-emerald-300 transition-colors px-3 py-2 rounded-lg hover:bg-white/10 font-medium'
            >
              Lessons
            </Link>
            <Link
              href='/#guide'
              className='hover:text-emerald-300 transition-colors px-3 py-2 rounded-lg hover:bg-white/10 font-medium'
            >
              How to Use
            </Link>
            <div className='h-6 w-px bg-emerald-700'></div>
            <div className='text-emerald-200 text-sm font-medium px-3 py-2'>
              24 Parts Available
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors'
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <FaXmark className='h-6 w-6' />
            ) : (
              <FaBars className='h-6 w-6' />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className='md:hidden pb-4 border-t border-emerald-700'>
            <div className='pt-4 space-y-2'>
              <Link
                href='/'
                onClick={() => setIsMenuOpen(false)}
                className='flex items-center space-x-3 hover:text-emerald-300 transition-colors px-3 py-3 rounded-lg hover:bg-white/10 block'
              >
                <FaHouse className='h-5 w-5' />
                <span className='font-medium'>Home</span>
              </Link>
              <Link
                href='/#lessons'
                onClick={() => setIsMenuOpen(false)}
                className='hover:text-emerald-300 transition-colors px-3 py-3 rounded-lg hover:bg-white/10 block font-medium'
              >
                All Lessons
              </Link>
              <Link
                href='/#guide'
                onClick={() => setIsMenuOpen(false)}
                className='hover:text-emerald-300 transition-colors px-3 py-3 rounded-lg hover:bg-white/10 block font-medium'
              >
                How to Use Guide
              </Link>
              <div className='px-3 py-3'>
                <div className='bg-emerald-800/50 rounded-lg p-3'>
                  <div className='text-emerald-300 text-sm font-medium mb-1'>
                    Available Content
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm'>Total Lessons:</span>
                    <span className='font-bold text-emerald-300'>24</span>
                  </div>
                  <div className='flex items-center justify-between mt-1'>
                    <span className='text-sm'>Audio Format:</span>
                    <span className='text-xs bg-emerald-700 px-2 py-1 rounded'>
                      m4a
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
