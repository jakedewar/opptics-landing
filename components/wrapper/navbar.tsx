"use client"

import Link from 'next/link'
import * as React from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { Button } from "../ui/button"
import { SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { UserProfile } from "../user-profile"
import ModeToggle from "../mode-toggle"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu"
import config from "@/config"
import { useAuth } from "@clerk/nextjs"
import { Dialog, DialogClose } from "@radix-ui/react-dialog"
import { OppticsLogo } from "@/components/ui/icons"

export default function NavBar() {
    let userId = null
    /* eslint-disable react-hooks/rules-of-hooks */
    if (config?.auth?.enabled) {
        const user = useAuth()
        userId = user?.userId
    }

    return (
        <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-slate-200/70 dark:bg-black/80 dark:border-slate-800/70">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link 
                    href="#top"
                    className="flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white hover:opacity-90 transition-opacity cursor-pointer"
                >
                    <OppticsLogo />
                    <span>Opptics</span>
                </Link>
                <div className="hidden md:flex items-center gap-8">
                    <NavigationMenu>
                        <NavigationMenuList className="gap-6">
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link 
                                        href="#features" 
                                        className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 text-sm font-medium px-2.5 py-1.5 rounded-md transition-all duration-200 hover:bg-indigo-50 dark:hover:bg-indigo-500/10"
                                    >
                                        Features
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link 
                                        href="#how-it-works" 
                                        className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 text-sm font-medium px-2.5 py-1.5 rounded-md transition-all duration-200 hover:bg-indigo-50 dark:hover:bg-indigo-500/10"
                                    >
                                        How it works
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild>
                                    <Link 
                                        href="#pricing" 
                                        className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 text-sm font-medium px-2.5 py-1.5 rounded-md transition-all duration-200 hover:bg-indigo-50 dark:hover:bg-indigo-500/10"
                                    >
                                        Pricing
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex items-center gap-4">
                    {!userId ? (
                        <>
                            <Link 
                                href="#"
                                className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 text-sm font-medium"
                            >
                                Log In
                            </Link>
                            <Link 
                                href="#"
                                className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-4 py-2 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
                            >
                                Sign Up Free
                            </Link>
                        </>
                    ) : (
                        <>
                            <UserProfile />
                            <Link 
                                href="/dashboard"
                                className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-4 py-2 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
                            >
                                Dashboard
                            </Link>
                        </>
                    )}
                    <ModeToggle />
                    <Dialog>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="ghost" className="md:hidden w-8 h-8" aria-label="Open menu">
                                <GiHamburgerMenu />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <SheetHeader>
                                <SheetTitle>Menu</SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col space-y-3 mt-[1rem]">
                                <DialogClose asChild>
                                    <Link href="#features" className="w-full">
                                        <div className="w-full text-left px-4 py-2 hover:bg-accent rounded-md transition-colors">
                                            Features
                                        </div>
                                    </Link>
                                </DialogClose>
                                <DialogClose asChild>
                                    <Link href="#how-it-works" className="w-full">
                                        <div className="w-full text-left px-4 py-2 hover:bg-accent rounded-md transition-colors">
                                            How it works
                                        </div>
                                    </Link>
                                </DialogClose>
                                <DialogClose asChild>
                                    <Link href="#pricing" className="w-full">
                                        <div className="w-full text-left px-4 py-2 hover:bg-accent rounded-md transition-colors">
                                            Pricing
                                        </div>
                                    </Link>
                                </DialogClose>
                                <DialogClose asChild>
                                    <Link 
                                        href="https://chrome.google.com/webstore"
                                        className="w-full"
                                    >
                                        <div className="w-full text-center px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md transition-colors">
                                            Get Started Free
                                        </div>
                                    </Link>
                                </DialogClose>
                            </div>
                        </SheetContent>
                    </Dialog>
                </div>
            </nav>
        </header>
    )
}

