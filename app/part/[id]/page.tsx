'use client'

import { useState, useEffect } from 'react'
import { notFound } from 'next/navigation'
import { parts } from '@/data/parts'
import AudioPlayer from '@/components/AudioPlayer'
import PdfViewer from '@/components/PdfViewer'
import Link from 'next/link'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

interface PartPageProps {
  params: Promise<{
    id: string
  }>
}

export default function PartPage({ params }: PartPageProps) {
  const [part, setPart] = useState<any>(null)
  const [prevPart, setPrevPart] = useState<any>(null)
  const [nextPart, setNextPart] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true)
      try {
        const resolvedParams = await params
        const { id } = resolvedParams
        const partId = parseInt(id)

        const foundPart = parts.find((p) => p.id === partId)
        if (!foundPart) {
          notFound()
        }

        setPart(foundPart)
        setPrevPart(parts.find((p) => p.id === foundPart.id - 1))
        setNextPart(parts.find((p) => p.id === foundPart.id + 1))
      } catch (error) {
        console.error('Error loading part:', error)
        notFound()
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [params])

  if (isLoading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4'></div>
          <p className='text-gray-600'>Loading lesson...</p>
        </div>
      </div>
    )
  }

  if (!part) {
    notFound()
  }

  return (
    <div className='min-h-screen flex flex-col'>
      {/* Minimal Top Bar */}
      <div className='bg-white border-b border-gray-200'>
        <div className='container mx-auto px-4 py-3'>
          <div className='flex items-center justify-between'>
            <Link
              href='/'
              className='flex items-center space-x-2 text-emerald-700 hover:text-emerald-800 font-medium'
            >
              <FaArrowLeft className='h-5 w-5' />
              <span className='hidden sm:inline'>All Lessons</span>
              <span className='sm:hidden'>Back</span>
            </Link>
            <div className='text-center'>
              <div className='text-lg font-bold text-gray-800'>
                Part {part.id}
              </div>
              <div className='text-sm text-gray-500 hidden sm:block'>
                {part.title.split(':')[1]?.trim()}
              </div>
            </div>
            <div className='w-10'></div> {/* Spacer for balance */}
          </div>
        </div>
      </div>

      {/* Main Content - PDF Only */}
      <main className='flex-1'>
        <div className='container mx-auto px-4 py-6'>
          <PdfViewer
            pdfUrl={part.pdfUrl}
            title={part.title}
            partNumber={part.id}
          />
        </div>
      </main>

      {/* Fixed Audio Player at Bottom */}
      <div className='sticky bottom-0 z-50 bg-white border-t border-gray-200 shadow-lg'>
        <div className='container mx-auto px-4 py-4'>
          <div className='mb-3'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-3'>
                <div className='bg-emerald-100 p-2 rounded-lg'>
                  <div className='h-4 w-4 bg-emerald-600 rounded-full'></div>
                </div>
                <div>
                  <h3 className='font-bold text-gray-800'>
                    Audio Lesson {part.id}
                  </h3>
                  <p className='text-sm text-gray-600'>
                    {part.title.split(':')[1]?.trim() || part.title}
                  </p>
                </div>
              </div>
              <div className='text-sm text-gray-500 hidden md:block'>
                Duration: {part.duration}
              </div>
            </div>
          </div>

          <AudioPlayer audioUrl={part.audioUrl} title={part.title} />
        </div>
      </div>

      {/* Simple Next/Previous Navigation */}
      <div className='bg-gray-50 border-t border-gray-200'>
        <div className='container mx-auto px-4 py-6'>
          <div className='flex justify-between gap-4'>
            {prevPart ? (
              <Link
                href={`/part/${prevPart.id}`}
                className='flex items-center justify-center space-x-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:border-emerald-400 hover:bg-emerald-50 transition-colors flex-1'
              >
                <FaArrowLeft className='h-4 w-4' />
                <span>Previous</span>
              </Link>
            ) : (
              <div className='flex-1'></div>
            )}

            {nextPart ? (
              <Link
                href={`/part/${nextPart.id}`}
                className='flex items-center justify-center space-x-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex-1'
              >
                <span>Next Lesson</span>
                <FaArrowRight className='h-4 w-4' />
              </Link>
            ) : (
              <div className='flex items-center justify-center space-x-2 px-6 py-3 bg-emerald-100 text-emerald-800 rounded-lg border border-emerald-200 flex-1'>
                <span>Course Complete</span>
              </div>
            )}
          </div>

          {/* Simple Progress Indicator */}
          <div className='mt-4 text-center'>
            <div className='inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-lg border border-gray-200'>
              <span className='text-sm text-gray-600'>Progress:</span>
              <span className='font-medium'>
                {part.id} / {parts.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
