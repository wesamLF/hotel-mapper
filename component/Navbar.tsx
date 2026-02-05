import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="w-full bg-base-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <div className="shrink-0">
            <Link prefetch={false} href="/" className="text-gray-700 hover:text-primary font-medium">
              HotelFinder
            </Link>        
              </div>

          {/* Links */}
          <div className="hidden md:flex space-x-4">

            <Link prefetch={false} href="/hotels" className="text-gray-700 hover:text-primary font-medium">
              Hotels
            </Link>
            <Link href="/#features" className="text-gray-700 hover:text-primary font-medium scroll-smooth">
              Features
            </Link>
            <Link href="/#htu" className="text-gray-700 hover:text-primary font-medium scroll-smooth">
              How to use
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="btn btn-ghost btn-circle">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar