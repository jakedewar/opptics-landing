import Footer from './footer'
import NavBar from './navbar'

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="relative min-h-screen pt-[4rem] dark:bg-black bg-white">
        {/* Background layer */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="bg-dot-pattern" aria-hidden="true" />
        </div>
        
        {/* Content layer */}
        <div className="relative z-10">
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}