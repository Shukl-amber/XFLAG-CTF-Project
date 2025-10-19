import Link from "next/link";

export default function Home() {
  return (
    <div className="max-h-screen min-h-screen flex flex-col items-center justify-center text-center">
      <div className="space-y-8 max-w-5xl">
        <h1 className="text-7xl font-bold bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">
          Welcome To XFLAG
        </h1>

        <p className="text-2xl text-gray-200">
          Test Your CyberSec Skills And Put Them To Use Against The World!
          <br />
          Compete Worldwide, Capture Flags, Climb The LeaderBoards And Become An
          Expert.
        </p>

        <div className="flex gap-4 justify-center pt-8">
          <Link
            href="/challenges"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition"
          >
            Start Challenges!
          </Link>
          <Link
            href="/leaderboard"
            className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition"
          >
            Checkout The LeaderBoards!
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-5xl text-white">
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
    <div className="p-6 rounded-lg border-5 border-gray-100 hover:border-red-500 transition transform hover:scale-105">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
