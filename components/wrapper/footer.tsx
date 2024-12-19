"use client"
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="relative z-50 border-t bg-white dark:bg-black">
            <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    {/* Copyright */}
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        &copy; 2024 Opptics. All rights reserved.
                    </p>
                    
                    {/* Legal Links */}
                    <div className="flex gap-6 text-sm">
                        <Link 
                            href="/terms" 
                            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                        >
                            Terms
                        </Link>
                        <Link 
                            href="/privacy" 
                            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                        >
                            Privacy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
