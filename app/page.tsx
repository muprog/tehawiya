// import PartCard from '@/components/PartCard'
// import { parts } from '@/data/parts'
// import { FaGraduationCap, FaHeadphones, FaBookOpen } from 'react-icons/fa6'

// export default function Home() {
//   return (
//     <div className='space-y-8'>
//       {/* Hero Section */}
//       <div className='text-center mb-12'>
//         <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
//           Welcome to Islamic Education Series
//         </h1>
//         <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
//           A comprehensive learning platform combining audio lessons with PDF
//           materials for effective Islamic education
//         </p>

//         <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
//           <div className='bg-white p-6 rounded-xl shadow-md border border-emerald-100'>
//             <FaBookOpen className='h-12 w-12 text-green-600 mx-auto mb-4' />
//             <h3 className='text-xl font-semibold mb-2'>Study Materials</h3>
//             <p className='text-gray-600'>
//               Comprehensive PDFs with detailed explanations
//             </p>
//           </div>

//           <div className='bg-white p-6 rounded-xl shadow-md border border-emerald-100'>
//             <FaHeadphones className='h-12 w-12 text-green-600 mx-auto mb-4' />
//             <h3 className='text-xl font-semibold mb-2'>Audio Lessons</h3>
//             <p className='text-gray-600'>
//               Clear audio explanations by qualified instructors
//             </p>
//           </div>

//           <div className='bg-white p-6 rounded-xl shadow-md border border-emerald-100'>
//             <FaGraduationCap className='h-12 w-12 text-green-600 mx-auto mb-4' />
//             <h3 className='text-xl font-semibold mb-2'>Structured Learning</h3>
//             <p className='text-gray-600'>
//               Step-by-step progression through topics
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Parts List */}
//       <div>
//         <div className='flex items-center justify-between mb-8'>
//           <h2 className='text-3xl font-bold text-gray-800'>Available Parts</h2>
//           <span className='bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold'>
//             {parts.length} Parts Available
//           </span>
//         </div>

//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
//           {parts.map((part) => (
//             <PartCard key={part.id} part={part} />
//           ))}
//         </div>
//       </div>

//       {/* Instructions */}
//       <div className='bg-gradient-to-r from-emerald-50 to-blue-50 p-8 rounded-2xl border border-emerald-200 mt-12'>
//         <h3 className='text-2xl font-bold text-gray-800 mb-4'>
//           How to Use This Platform
//         </h3>
//         <ol className='list-decimal pl-5 space-y-3 text-gray-700'>
//           <li>Select a part from the list above to begin learning</li>
//           <li>Open the PDF to follow along with the written material</li>
//           <li>Play the audio lesson and listen while reading the PDF</li>
//           <li>Pause and replay sections as needed for better understanding</li>
//           <li>Take notes in the provided spaces within the PDF</li>
//           <li>
//             Complete one part before moving to the next for structured learning
//           </li>
//         </ol>
//       </div>
//     </div>
//   )
// }

'use client'

import { useState, useMemo } from 'react'
import PartCard from '@/components/PartCard'
import { parts } from '@/data/parts'
import {
  FaGraduationCap,
  FaHeadphones,
  FaBookOpen,
  FaMagnifyingGlass,
  FaFilter,
  FaSort,
  FaArrowUp,
  FaArrowDown,
} from 'react-icons/fa6'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'title'>('newest')

  // Filter and sort parts
  const filteredParts = useMemo(() => {
    let result = [...parts]

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (part) =>
          part.title.toLowerCase().includes(query) ||
          part.description.toLowerCase().includes(query)
      )
    }

    // Sort
    switch (sortBy) {
      case 'newest':
        result.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
        break
      case 'oldest':
        result.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())
        break
      case 'title':
        result.sort((a, b) => a.title.localeCompare(b.title))
        break
    }

    return result
  }, [searchQuery, sortBy])

  return (
    <div className='space-y-8'>
      {/* Hero Section */}
      <div className='text-center mb-12'>
        <div className='mb-8'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
            Akidetu Tehawiya In Amharic
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Learn Islam through structured audio lessons and comprehensive study
            materials
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className='bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-2xl border border-emerald-200'>
        <div className='mb-6'>
          <h2 className='text-2xl font-bold text-gray-800 mb-2'>
            Find Your Lesson
          </h2>
          <p className='text-gray-600'>
            Search through all Islamic education parts
          </p>
        </div>

        {/* Search Bar */}
        <div className='mb-6'>
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <FaMagnifyingGlass className='h-5 w-5 text-gray-400' />
            </div>
            <input
              type='text'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder='Search by title or description...'
              className='pl-10 pr-4 py-3 w-full border border-emerald-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent'
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600'
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filters */}
        <div className='flex flex-col sm:flex-row gap-4'>
          <div className='flex-1'>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Sort by
            </label>
            <div className='flex gap-2'>
              {[
                {
                  value: 'newest',
                  label: 'Newest',
                  icon: <FaArrowDown className='h-3 w-3' />,
                },
                {
                  value: 'oldest',
                  label: 'Oldest',
                  icon: <FaArrowUp className='h-3 w-3' />,
                },
                {
                  value: 'title',
                  label: 'Title A-Z',
                  icon: <FaSort className='h-3 w-3' />,
                },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSortBy(option.value as any)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
                    sortBy === option.value
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-white text-gray-700 border-emerald-200 hover:bg-emerald-50'
                  }`}
                >
                  <span>{option.icon}</span>
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className='flex items-end'>
            <div className='bg-white px-4 py-3 rounded-lg border border-emerald-200'>
              <div className='flex items-center space-x-2 text-emerald-700'>
                <FaFilter className='h-4 w-4' />
                <span className='font-medium'>
                  Showing {filteredParts.length} of {parts.length} parts
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Parts Grid */}
      <div>
        <div className='mb-6'>
          <h2 className='text-2xl font-bold text-gray-800'>
            Available Lessons
          </h2>
          <p className='text-gray-600 mt-1'>
            Click on any lesson to start learning with audio and PDF materials
          </p>
        </div>

        {filteredParts.length === 0 ? (
          <div className='text-center py-12 bg-white rounded-xl border border-emerald-100'>
            <div className='text-gray-400 mb-4'>
              <FaMagnifyingGlass className='h-12 w-12 mx-auto' />
            </div>
            <h3 className='text-xl font-semibold text-gray-700 mb-2'>
              No lessons found
            </h3>
            <p className='text-gray-500 max-w-md mx-auto'>
              Try adjusting your search or filter to find what you're looking
              for.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className='mt-4 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors'
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredParts.map((part) => (
              <PartCard key={part.id} part={part} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
