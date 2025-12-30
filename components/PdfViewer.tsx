// 'use client'

// import { useState } from 'react'
// import {
//   FaDownload,
//   FaExpand,
//   FaCompress,
//   FaArrowLeft,
//   FaArrowRight,
// } from 'react-icons/fa6'

// interface PdfViewerProps {
//   pdfUrl: string
//   title: string
//   partNumber: string
// }

// export default function PdfViewer({
//   pdfUrl,
//   title,
//   partNumber,
// }: PdfViewerProps) {
//   const [pageNumber, setPageNumber] = useState(1)
//   const [isFullscreen, setIsFullscreen] = useState(false)

//   const handleDownload = () => {
//     const link = document.createElement('a')
//     link.href = pdfUrl
//     link.download = `${title}.pdf`
//     document.body.appendChild(link)
//     link.click()
//     document.body.removeChild(link)
//   }

//   const toggleFullscreen = () => {
//     setIsFullscreen(!isFullscreen)
//   }

//   return (
//     <div
//       className={`bg-white rounded-xl shadow-lg border border-emerald-100 overflow-hidden ${
//         isFullscreen ? 'fixed inset-0 z-50 m-0 rounded-none' : ''
//       }`}
//     >
//       {/* PDF Viewer Header */}
//       <div className='bg-gradient-to-r from-emerald-50 to-green-50 px-6 py-4 border-b border-emerald-100 flex justify-between items-center'>
//         {/* <div className='flex items-center space-x-3'>
//           <div className='bg-emerald-600 text-white p-2 rounded-lg'>
//             <FaDownload className='h-5 w-5' />
//           </div>
//           <div>
//             <h3 className='font-bold text-gray-800'>Study Material</h3>
//             {/* <p className='text-sm text-gray-600'>{title}</p> *
//           </div>
//         </div> */}

//         <div className='w-full flex justify-between items-center space-x-3'>
//           <button
//             onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
//             disabled={pageNumber === 1}
//             className='p-2 rounded-lg hover:bg-emerald-100 disabled:opacity-50 disabled:cursor-not-allowed text-emerald-700'
//             aria-label='Previous page'
//           >
//             <FaArrowLeft className='h-5 w-5' />
//           </button>

//           <div className='flex items-center space-x-2'>
//             <span className='page text-sm text-gray-600'>Page</span>
//             <span className='font-bold text-emerald-700'>{pageNumber}</span>
//           </div>

//           <button
//             onClick={() => setPageNumber(pageNumber + 1)}
//             className='p-2 rounded-lg hover:bg-emerald-100 text-emerald-700'
//             aria-label='Next page'
//           >
//             <FaArrowRight className='h-5 w-5' />
//           </button>

//           <button
//             onClick={handleDownload}
//             className='p-3 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors flex items-center space-x-2'
//           >
//             <FaDownload className='h-4 w-4' />
//             <span className='hidden sm:inline'>Download PDF</span>
//           </button>

//           <button
//             onClick={toggleFullscreen}
//             className='p-3 rounded-lg border border-emerald-300 text-emerald-700 hover:bg-emerald-50 transition-colors'
//             aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
//           >
//             {isFullscreen ? (
//               <FaCompress className='h-4 w-4' />
//             ) : (
//               <FaExpand className='h-4 w-4' />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* PDF Viewer */}
//       <div
//         className={`${
//           isFullscreen ? 'h-[calc(100vh-80px)]' : 'h-[600px]'
//         } relative`}
//       >
//         <iframe
//           src={`${pdfUrl}#page=${pageNumber}`}
//           className='w-full h-full border-0'
//           title={`PDF Viewer - ${title}`}
//         />

//         {/* Overlay Instructions */}
//         {/* <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg text-sm'>
//           Use arrow buttons or keyboard arrows to navigate pages
//         </div> */}
//       </div>
//     </div>
//   )
// }

'use client'

import { useState } from 'react'
import { FaDownload, FaExpand, FaCompress, FaBook } from 'react-icons/fa6'

interface PdfViewerProps {
  pdfUrl: string
  title: string
  partNumber: number
}

export default function PdfViewer({
  pdfUrl,
  title,
  partNumber,
}: PdfViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = `islamic_education_part_${partNumber}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div
      className={`bg-white rounded-xl shadow-lg border border-emerald-100 overflow-hidden ${
        isFullscreen ? 'fixed inset-0 z-50 m-0 rounded-none' : ''
      }`}
    >
      {/* PDF Viewer Header */}
      <div className='bg-gradient-to-r from-emerald-50 to-green-50 px-4 py-3 border-b border-emerald-100'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <div className='bg-emerald-100 p-2 rounded-lg'>
              <FaBook className='h-5 w-5 text-emerald-600' />
            </div>
            <div>
              <h3 className='font-bold text-gray-800'>
                Study Material - Part {partNumber}
              </h3>
              <p className='text-sm text-gray-600'>{title}</p>
            </div>
          </div>

          <div className='flex items-center space-x-2'>
            <button
              onClick={handleDownload}
              className='p-2.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors flex items-center space-x-2'
              title='Download PDF'
            >
              <FaDownload className='h-4 w-4' />
              <span className='hidden sm:inline text-sm'>Download</span>
            </button>

            <button
              onClick={toggleFullscreen}
              className='p-2.5 rounded-lg border border-emerald-300 text-emerald-700 hover:bg-emerald-50 transition-colors'
              title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            >
              {isFullscreen ? (
                <FaCompress className='h-4 w-4' />
              ) : (
                <FaExpand className='h-4 w-4' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className={`${isFullscreen ? 'h-[calc(100vh-80px)]' : 'h-[600px]'}`}>
        <iframe
          src={pdfUrl}
          className='w-full h-full border-0'
          title={`PDF Viewer - ${title}`}
        />
      </div>

      {/* Simple Instructions */}
      <div className='bg-gray-50 px-4 py-3 border-t border-gray-200 text-center'>
        <p className='text-sm text-gray-600'>
          Scroll to navigate • Browser controls available at top/bottom of PDF
        </p>
      </div>
    </div>
  )
}
