// 'use client'

// import { useState, useRef, useEffect } from 'react'
// import {
//   FaPlay,
//   FaPause,
//   FaForward,
//   FaBackward,
//   FaVolumeHigh,
//   FaVolumeXmark,
//   FaClock,
// } from 'react-icons/fa6'

// interface AudioPlayerProps {
//   audioUrl: string
//   title: string
// }

// export default function AudioPlayer({ audioUrl, title }: AudioPlayerProps) {
//   const [isPlaying, setIsPlaying] = useState(false)
//   const [currentTime, setCurrentTime] = useState(0)
//   const [duration, setDuration] = useState(0)
//   const [volume, setVolume] = useState(1)
//   const [isMuted, setIsMuted] = useState(false)
//   const audioRef = useRef<HTMLAudioElement>(null)

//   useEffect(() => {
//     const audio = audioRef.current
//     if (audio) {
//       const setAudioData = () => {
//         setDuration(audio.duration)
//       }

//       const setAudioTime = () => {
//         setCurrentTime(audio.currentTime)
//       }

//       audio.addEventListener('loadeddata', setAudioData)
//       audio.addEventListener('timeupdate', setAudioTime)

//       return () => {
//         audio.removeEventListener('loadeddata', setAudioData)
//         audio.removeEventListener('timeupdate', setAudioTime)
//       }
//     }
//   }, [])

//   const togglePlay = () => {
//     if (audioRef.current) {
//       if (isPlaying) {
//         audioRef.current.pause()
//       } else {
//         audioRef.current.play()
//       }
//       setIsPlaying(!isPlaying)
//     }
//   }

//   const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = parseFloat(e.target.value)
//     setCurrentTime(value)
//     if (audioRef.current) {
//       audioRef.current.currentTime = value
//     }
//   }

//   const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = parseFloat(e.target.value)
//     setVolume(value)
//     if (audioRef.current) {
//       audioRef.current.volume = value
//       setIsMuted(value === 0)
//     }
//   }

//   const toggleMute = () => {
//     if (audioRef.current) {
//       audioRef.current.muted = !isMuted
//       setIsMuted(!isMuted)
//       if (!isMuted) {
//         // Store current volume before muting
//         setVolume(audioRef.current.volume)
//         audioRef.current.volume = 0
//       } else {
//         // Restore volume when unmuting
//         audioRef.current.volume = volume
//       }
//     }
//   }

//   const formatTime = (time: number) => {
//     if (isNaN(time)) return '0:00'
//     const minutes = Math.floor(time / 60)
//     const seconds = Math.floor(time % 60)
//     return `${minutes}:${seconds.toString().padStart(2, '0')}`
//   }

//   const skipForward = () => {
//     if (audioRef.current) {
//       audioRef.current.currentTime = Math.min(currentTime + 10, duration)
//     }
//   }

//   const skipBackward = () => {
//     if (audioRef.current) {
//       audioRef.current.currentTime = Math.max(currentTime - 10, 0)
//     }
//   }

//   const handleEnded = () => {
//     setIsPlaying(false)
//     setCurrentTime(0)
//   }

//   return (
//     <div className='bg-white rounded-xl shadow-lg p-6 border border-emerald-100'>
//       <div className='flex items-center justify-between mb-6'>
//         <div className='flex items-center space-x-3'>
//           <div className='bg-gradient-to-r from-emerald-500 to-green-500 p-2 rounded-lg'>
//             <FaClock className='h-6 w-6 text-white' />
//           </div>
//           <div>
//             <h3 className='text-xl font-bold text-gray-800'>Audio Lesson</h3>
//             <p className='text-sm text-gray-600'>{title}</p>
//           </div>
//         </div>
//         <div className='flex items-center space-x-2 text-emerald-600'>
//           <span className='text-sm font-medium'>Duration:</span>
//           <span className='font-bold'>{formatTime(duration)}</span>
//         </div>
//       </div>

//       <audio
//         ref={audioRef}
//         src={audioUrl}
//         className='hidden'
//         onEnded={handleEnded}
//       />

//       {/* Progress Bar */}
//       <div className='mb-6'>
//         <div className='flex items-center justify-between mb-2'>
//           <span className='text-sm text-emerald-700 font-medium'>
//             {formatTime(currentTime)}
//           </span>
//           <span className='text-sm text-gray-500'>{formatTime(duration)}</span>
//         </div>
//         <input
//           type='range'
//           min='0'
//           max={duration || 0}
//           value={currentTime}
//           onChange={handleSeek}
//           className='w-full h-2 bg-emerald-100 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-emerald-600 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-lg'
//         />
//       </div>

//       {/* Controls */}
//       <div className='flex items-center justify-between'>
//         <div className='flex items-center space-x-4'>
//           <button
//             onClick={skipBackward}
//             className='p-3 rounded-full hover:bg-emerald-50 text-emerald-600 transition-colors'
//             aria-label='Skip backward 10 seconds'
//           >
//             <FaBackward className='h-6 w-6' />
//           </button>

//           <button
//             onClick={togglePlay}
//             className='p-5 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:from-emerald-700 hover:to-green-700 transition-all shadow-lg hover:shadow-xl'
//             aria-label={isPlaying ? 'Pause' : 'Play'}
//           >
//             {isPlaying ? (
//               <FaPause className='h-7 w-7' />
//             ) : (
//               <FaPlay className='h-7 w-7 ml-1' />
//             )}
//           </button>

//           <button
//             onClick={skipForward}
//             className='p-3 rounded-full hover:bg-emerald-50 text-emerald-600 transition-colors'
//             aria-label='Skip forward 10 seconds'
//           >
//             <FaForward className='h-6 w-6' />
//           </button>
//         </div>

//         {/* Volume Control */}
//         <div className='flex items-center space-x-3'>
//           <button
//             onClick={toggleMute}
//             className='p-2 rounded-full hover:bg-emerald-50 text-emerald-600 transition-colors'
//             aria-label={isMuted ? 'Unmute' : 'Mute'}
//           >
//             {isMuted ? (
//               <FaVolumeXmark className='h-5 w-5' />
//             ) : (
//               <FaVolumeHigh className='h-5 w-5' />
//             )}
//           </button>

//           <div className='flex items-center space-x-2'>
//             <input
//               type='range'
//               min='0'
//               max='1'
//               step='0.01'
//               value={isMuted ? 0 : volume}
//               onChange={handleVolumeChange}
//               className='w-24 h-2 bg-emerald-100 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-emerald-600'
//             />
//             <span className='text-sm text-gray-500 w-10'>
//               {Math.round((isMuted ? 0 : volume) * 100)}%
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Status and Features */}
//       <div className='mt-8 pt-6 border-t border-emerald-100'>
//         <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
//           <div className='flex items-center space-x-3'>
//             <div
//               className={`h-3 w-3 rounded-full ${
//                 isPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
//               }`}
//             />
//             <div>
//               <span className='text-sm font-medium text-gray-700'>
//                 {isPlaying ? 'Playing' : 'Paused'}
//               </span>
//               <p className='text-xs text-gray-500'>
//                 {isPlaying ? 'Lesson in progress' : 'Click play to start'}
//               </p>
//             </div>
//           </div>

//           <div className='flex items-center justify-between md:justify-end space-x-4'>
//             <button
//               onClick={() => {
//                 if (audioRef.current) {
//                   audioRef.current.currentTime = 0
//                   setCurrentTime(0)
//                   if (!isPlaying) togglePlay()
//                 }
//               }}
//               className='text-sm text-emerald-600 hover:text-emerald-800 font-medium'
//             >
//               Restart
//             </button>
//             <button
//               onClick={() => {
//                 if (audioRef.current) {
//                   audioRef.current.playbackRate =
//                     audioRef.current.playbackRate === 1.5 ? 1 : 1.5
//                 }
//               }}
//               className='text-sm text-emerald-600 hover:text-emerald-800 font-medium'
//             >
//               1.5x Speed
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Keyboard Shortcuts Info */}
//       <div className='mt-6 pt-6 border-t border-emerald-100'>
//         <h4 className='text-sm font-medium text-gray-700 mb-2'>
//           Keyboard Shortcuts:
//         </h4>
//         <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
//           <div className='bg-gray-50 px-3 py-2 rounded text-center'>
//             <kbd className='text-xs font-mono bg-white px-2 py-1 rounded border'>
//               Space
//             </kbd>
//             <p className='text-xs text-gray-600 mt-1'>Play/Pause</p>
//           </div>
//           <div className='bg-gray-50 px-3 py-2 rounded text-center'>
//             <kbd className='text-xs font-mono bg-white px-2 py-1 rounded border'>
//               →
//             </kbd>
//             <p className='text-xs text-gray-600 mt-1'>+10 sec</p>
//           </div>
//           <div className='bg-gray-50 px-3 py-2 rounded text-center'>
//             <kbd className='text-xs font-mono bg-white px-2 py-1 rounded border'>
//               ←
//             </kbd>
//             <p className='text-xs text-gray-600 mt-1'>-10 sec</p>
//           </div>
//           <div className='bg-gray-50 px-3 py-2 rounded text-center'>
//             <kbd className='text-xs font-mono bg-white px-2 py-1 rounded border'>
//               M
//             </kbd>
//             <p className='text-xs text-gray-600 mt-1'>Mute/Unmute</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

'use client'

import { useState, useRef } from 'react'
import { FaPlay, FaPause } from 'react-icons/fa6'

interface SimpleAudioPlayerProps {
  audioUrl: string
  title: string
}

export default function SimpleAudioPlayer({
  audioUrl,
  title,
}: SimpleAudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.error('Audio playback error:', error)
          alert(
            `Failed to play audio: ${error.message}\n\nTry: \n1. Check if file exists\n2. Try different browser\n3. Convert to MP3 format`
          )
        })
    }
  }

  return (
    <div className='bg-white rounded-xl shadow-lg p-6 border border-emerald-100'>
      {/* <div className='flex items-center justify-between mb-6'>
        <div>
          <h3 className='text-xl font-bold text-gray-800'>Audio Lesson</h3>
          <p className='text-sm text-gray-600'>{title}</p>
          <p className='text-xs text-gray-500 mt-2'>
            Testing audio: {audioUrl.split('/').pop()}
          </p>
        </div>
      </div> */}

      <audio
        ref={audioRef}
        controls
        className='w-full'
        onError={(e) => {
          console.error('Audio element error:', e)
          const audio = e.currentTarget
          console.error('Audio error details:', audio.error)
        }}
      >
        <source src={audioUrl} type='audio/mp4' />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}
