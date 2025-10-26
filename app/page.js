import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center text-center px-4 md:px-8 py-20 md:py-24">
      <div className="space-y-8 max-w-5xl w-full flex-1 flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">
          Welcome To XFLAG
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-gray-200">
          Test Your CyberSec Skills And Put Them To Use Against The World!
          <br />
          Compete Worldwide, Capture Flags, Climb The LeaderBoards And Become An
          Expert.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link
            href="/challenges"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 rounded-lg text-base md:text-lg font-semibold transition"
          >
            Start Challenges!
          </Link>
          <Link
            href="/leaderboard"
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 md:px-8 py-3 rounded-lg text-base md:text-lg font-semibold transition"
          >
            Checkout The LeaderBoards!
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-20 max-w-5xl w-full text-white px-4">
        <FeatureCard
          title="Sequential Challenges"
          description="Unlock challenges progressively as you solve them"
          icon="🔓"
        />
        <FeatureCard
          title="Real-time Leaderboard"
          description="Compete with others and track your ranking"
          icon="🏆"
        />
        <FeatureCard
          title="Secure Platform"
          description="Google Auth with domain restrictions"
          icon="🔐"
        />
      </div>
    </div>
  );
}

function FeatureCard({ title, description, icon }) {
  return (
    <div className="p-4 md:p-6 rounded-lg border-5 border-gray-100 hover:border-red-500 transition transform hover:scale-105">
      <div className="text-3xl md:text-4xl mb-4">{icon}</div>
      <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm md:text-base">{description}</p>
    </div>
  );
}
