import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-100">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <Link href="/" className="text-2xl font-bold text-white-500">
            XFLAG
          </Link>

          <div className="flex space-x-4">
            <Link 
              href="/challenges" 
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition"
            >
              Challenges
            </Link>
            <Link 
              href="/leaderboard" 
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition"
            >
              Leaderboard
            </Link>
            <Link 
              href="/profile" 
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition"
            >
              Profile
            </Link>
            
            <Link 
              href="/login" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}