import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-slate-200/70 dark:bg-black/80 dark:border-slate-800/70">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link 
          href="#top" 
          className="flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white hover:opacity-90 transition-opacity cursor-pointer"
        >
          <Image 
            src="/assets/logo.svg" 
            alt="Opptics Logo" 
            width={32} 
            height={32} 
            className="text-[#4f46e5]" 
          />
          <span>Opptics</span>
        </Link>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors dark:text-gray-300 dark:hover:text-indigo-400">Features</Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-indigo-600 transition-colors dark:text-gray-300 dark:hover:text-indigo-400">How it works</Link>
            <Link href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors dark:text-gray-300 dark:hover:text-indigo-400">Pricing</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#download" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-4 py-2 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Install Extension
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
