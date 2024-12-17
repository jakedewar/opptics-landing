"use client"
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="relative z-50 border-t bg-white dark:bg-black">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                    <div>
                        <p className="font-medium">Product</p>
                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <Link href="#features" className="transition hover:opacity-75">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="#how-it-works" className="transition hover:opacity-75">
                                    How it works
                                </Link>
                            </li>
                            <li>
                                <Link href="#pricing" className="transition hover:opacity-75">
                                    Pricing
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-medium">Resources</p>
                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <Link href="#templates" className="transition hover:opacity-75">
                                    Templates
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="transition hover:opacity-75">
                                    Documentation
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-medium">Legal</p>
                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <Link href="#" className="transition hover:opacity-75">
                                    Terms
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="transition hover:opacity-75">
                                    Privacy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t pt-8">
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                        &copy; 2024 Opptics. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
