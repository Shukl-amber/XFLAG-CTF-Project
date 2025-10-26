import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-grey-100 border-b border-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <Link href="/" className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-300 to-red-600 bg-clip-text text-transparent">
            XFLAG
          </Link>

          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
            <Link 
              href="/challenges" 
              className="text-gray-100 hover:text-white px-2 md:px-3 py-2 rounded-md transition text-xs sm:text-sm md:text-base"
            >
              <span className="hidden sm:inline">Challenges</span>
              <span className="sm:hidden">🎯</span>
            </Link>
            <Link 
              href="/leaderboard" 
              className="text-gray-100 hover:text-white px-2 md:px-3 py-2 rounded-md transition text-xs sm:text-sm md:text-base"
            >
              <span className="hidden sm:inline">Leaderboard</span>
              <span className="sm:hidden">🏆</span>
            </Link>
            <Link 
              href="/profile" 
              className="text-gray-100 hover:text-white px-2 md:px-3 py-2 rounded-md transition text-xs sm:text-sm md:text-base"
            >
              <span className="hidden sm:inline">Profile</span>
              <span className="sm:hidden">👤</span>
            </Link>
            
            <Link 
              href="/login" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 md:px-4 py-2 rounded-md transition text-xs sm:text-sm md:text-base font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}