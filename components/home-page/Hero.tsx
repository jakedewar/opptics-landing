"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { VideoPlayer } from "@/components/video-player"
import { useState } from "react"

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span>🚀</span> Your last-minute demo's secret weapon
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 bg-clip-text text-transparent">
                AI-Powered Demo<br />Personalization
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Our AI analyzes your prospect's website and content to auto-generate perfect terminology mappings. No code changes, no complex setup - just install our extension and start closing more deals.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link 
                  href="#"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
                >
                  Sign Up Free
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </Link>
                <button 
                  onClick={() => setShowVideo(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Watch Demo
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </button>
              </div>
              
              {/* Added: Quick Benefits List */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { icon: "🤖", text: "AI-Powered Mapping" },
                  { icon: "⚡", text: "Zero Code Changes" },
                  { icon: "🎯", text: "Works Everywhere" },
                  { icon: "🔒", text: "Full AE Control" }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span>{benefit.icon}</span>
                    <span>{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Updated demo preview to show AI analysis */}
            <div className="relative mt-8 lg:mt-0">
              <div className="w-full max-w-lg mx-auto transform transition-all duration-500 hover:scale-[1.02]">
                <div className="overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-2xl border border-gray-200 dark:border-gray-700">
                  <div className="bg-gray-100 dark:bg-gray-900 px-4 py-2 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      {[
                        'bg-red-400 dark:bg-red-500',
                        'bg-yellow-400 dark:bg-yellow-500',
                        'bg-green-400 dark:bg-green-500'
                      ].map((color, index) => (
                        <div key={index} className={`w-3 h-3 rounded-full ${color}`} />
                      ))}
                    </div>
                    <div className="flex-grow">
                      <div className="mx-auto w-full max-w-[200px] h-6 px-3 py-1 rounded bg-gray-50 dark:bg-gray-800 flex items-center">
                        <div className="w-4 h-4 text-indigo-500">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 10v4a5 5 0 0 0 5 5h4v-7h4v7h4a5 5 0 0 0 5-5v-4H3z" />
                          </svg>
                        </div>
                        <span className="ml-2 text-sm text-indigo-600 dark:text-indigo-400">AI Analysis Active</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded w-3/4" />
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 dark:text-gray-500 line-through">Placed Order</span>
                        <svg className="w-4 h-4 text-gray-400 dark:text-gray-500" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                        <span className="text-indigo-600 dark:text-indigo-400 font-medium">Started Subscription</span>
                      </div>
                      <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded w-1/2" />
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 dark:text-gray-500 line-through">Added to Cart</span>
                        <svg className="w-4 h-4 text-gray-400 dark:text-gray-500" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                        <span className="text-indigo-600 dark:text-indigo-400 font-medium">Started Trial</span>
                      </div>
                      <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded w-5/6" />
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 dark:text-gray-500 line-through">Abandoned Cart</span>
                        <svg className="w-4 h-4 text-gray-400 dark:text-gray-500" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                        <span className="text-indigo-600 dark:text-indigo-400 font-medium">Paused Account</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={showVideo} onOpenChange={setShowVideo}>
        <DialogContent className="sm:max-w-[900px]">
          <DialogTitle className="sr-only">
            Product Demo Video
          </DialogTitle>
          <VideoPlayer videoSrc="https://utfs.io/f/08b0a37f-afd7-4623-b5cc-e85184528fce-1f02.mp4" />
        </DialogContent>
      </Dialog>

      {/* Updated social proof section */}
      <section className="py-12 px-4 md:px-8 w-full bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-lg font-medium text-gray-600 dark:text-gray-300">
              While you read this, your competitors are already using it
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-2 px-4 py-3 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 shadow-lg backdrop-blur-sm transition duration-300 hover:shadow-xl hover:-translate-y-0.5">
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">82%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 text-center">Higher Demo-to-Close Rate</div>
            </div>
            <div className="flex flex-col items-center gap-2 px-4 py-3 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 shadow-lg backdrop-blur-sm transition duration-300 hover:shadow-xl hover:-translate-y-0.5">
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">3.2x</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 text-center">Faster Sales Cycles</div>
            </div>
            <div className="flex flex-col items-center gap-2 px-4 py-3 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 shadow-lg backdrop-blur-sm transition duration-300 hover:shadow-xl hover:-translate-y-0.5">
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">1000+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 text-center">Active Users</div>
            </div>
            <div className="flex flex-col items-center gap-2 px-4 py-3 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 shadow-lg backdrop-blur-sm transition duration-300 hover:shadow-xl hover:-translate-y-0.5">
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">40+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 text-center">AI-Powered Templates</div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
