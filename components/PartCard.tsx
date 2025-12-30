// import { Part } from '@/types'
// import Link from 'next/link'
// import { FaClock, FaPlayCircle, FaBook } from 'react-icons/fa6'

// interface PartCardProps {
//   part: Part
// }

// export default function PartCard({ part }: PartCardProps) {
//   return (
//     <Link href={`/part/${part.id}`}>
//       <div className='bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-emerald-100 hover:border-emerald-300 h-full flex flex-col'>
//         <div className='p-6 flex-grow'>
//           <div className='flex justify-between items-start mb-4'>
//             <div className='bg-gradient-to-r from-green-600 to-emerald-500 text-white px-4 py-2 rounded-full font-bold'>
//               Part {part.id}
//             </div>
//             <span className='flex items-center text-gray-500 text-sm'>
//               <FaClock className='mr-1' />
//               {part.duration}
//             </span>
//           </div>

//           <h3 className='text-xl font-bold text-gray-800 mb-3 line-clamp-2'>
//             {part.title}
//           </h3>

//           <p className='text-gray-600 mb-6 line-clamp-3'>{part.description}</p>

//           <div className='flex items-center justify-between mt-auto'>
//             <div className='flex items-center space-x-4'>
//               <div className='flex items-center text-green-600'>
//                 <FaPlayCircle className='mr-2' />
//                 <span className='text-sm'>Audio</span>
//               </div>
//               <div className='flex items-center text-blue-600'>
//                 <FaBook className='mr-2' />
//                 <span className='text-sm'>PDF</span>
//               </div>
//             </div>

//             <div className='bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg font-semibold text-sm'>
//               Start Learning
//             </div>
//           </div>
//         </div>

//         <div className='bg-gradient-to-r from-emerald-50 to-green-50 px-6 py-3 border-t border-emerald-100'>
//           <p className='text-sm text-gray-500'>
//             Added:{' '}
//             {part.createdAt.toLocaleDateString('en-US', {
//               year: 'numeric',
//               month: 'long',
//               day: 'numeric',
//             })}
//           </p>
//         </div>
//       </div>
//     </Link>
//   )
// }

import { Part } from '@/types'
import Link from 'next/link'
import { FaClock, FaCirclePlay, FaBook } from 'react-icons/fa6'

interface PartCardProps {
  part: Part
}

export default function PartCard({ part }: PartCardProps) {
  return (
    <Link href={`/part/${part.id}`}>
      <div
        className='bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-emerald-100 hover:border-emerald-300 h-full flex flex-col'
        data-part-id={part.id}
      >
        <div className='p-6 flex-grow'>
          <div className='flex justify-between items-start mb-4'>
            <div className='bg-gradient-to-r from-green-600 to-emerald-500 text-white px-4 py-2 rounded-full font-bold'>
              Part {part.id}
            </div>
            <span className='flex items-center text-gray-500 text-sm'>
              <FaClock className='mr-1' />
              {part.duration}
            </span>
          </div>

          {/* <h3 className='text-xl font-bold text-gray-800 mb-3 line-clamp-2'>
            {part.title}
          </h3> */}

          <p className='text-gray-600 mb-6 line-clamp-3'>{part.description}</p>

          <div className='flex items-center justify-between mt-auto'>
            <div className='flex items-center space-x-4'>
              <div className='flex items-center text-green-600'>
                <FaCirclePlay className='mr-2' />
                <span className='text-sm'>Audio</span>
              </div>
              <div className='flex items-center text-blue-600'>
                <FaBook className='mr-2' />
                <span className='text-sm'>PDF</span>
              </div>
            </div>

            <div className='bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg font-semibold text-sm'>
              Start Learning
            </div>
          </div>
        </div>

        <div className='bg-gradient-to-r from-emerald-50 to-green-50 px-6 py-3 border-t border-emerald-100'>
          <p className='text-sm text-gray-500'>
            Added:{' '}
            {part.createdAt.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </div>
    </Link>
  )
}
