"use client";

import { useState, useEffect } from "react";
import { dummyLeaderboard, dummyUser } from "@/lib/dummyData";
import LoadingSpinner from "@/components/LoadingSpinner";
import Image from "next/image";
import Default_PFP from "@/public/images/Default_PFP.webp";

export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLeaderboard(dummyLeaderboard);
      setCurrentUser(dummyUser);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) return <LoadingSpinner />;

  const userRank = leaderboard.find((user) => user.id === currentUser?.id);

  return (
    <div className="w-full min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-8">
      {/* Header */}
      <div className="mb-6 md:mb-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-5 bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">
          Leaderboard
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-300">Top Performers in the Arena</p>
      </div>
      {/* User Rank */}
      {userRank && (
        <div className="bg-gradient-to-r from-blue-900 to-gray-900 rounded-lg p-4 md:p-6 mb-6 md:mb-8 border-2 border-blue-500">
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
            <div className="flex items-center gap-3 md:gap-4">
              <Image
                className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-blue-400"
                src={userRank?.photoURL || Default_PFP}
                alt={"Error"}
                width={64}
                height={64}
                unoptimized
              />
              <div>
                <p className="text-xs md:text-sm text-gray-300">Your Rank</p>
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  #{userRank.rank ?? "-"}
                </h2>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-100">
                {userRank.score || "-"} Points
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-100">
                {userRank.solvedChallenges || "-"} Flags Captured
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Ladder */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        {/* Header */}
        <div className="hidden md:block bg-gray-900 px-4 md:px-6 py-3 md:py-4 border-b border-gray-700">
          <div className="grid grid-cols-12 gap-2 md:gap-4 font-semibold text-gray-400 text-xs md:text-sm">
            <div className="col-span-1 text-center">Rank</div>
            <div className="col-span-5 text-left pl-2">Player</div>
            <div className="col-span-3 text-center">Score</div>
            <div className="col-span-3 text-center">Solved</div>
          </div>
        </div>

        {/* Body */}
        <div className="divide-y divide-gray-700">
          {leaderboard.map((user, index) => {
            const isUser = user.id === userRank?.id;
            const isTop3 = user.rank <= 3;

            return (
              <div
                key={user.id}
                className={`px-3 md:px-6 py-3 md:py-4 transition ${
                  isUser
                    ? "bg-blue-900/30 border-l-4 border-l-blue-500"
                    : "hover:bg-gray-750"
                }`}
              >
                <div className="grid grid-cols-12 gap-2 md:gap-4 items-center">
                  {/* Rank */}
                  <div className="col-span-2 md:col-span-1">
                    <div
                      className={`text-lg md:text-xl lg:text-2xl font-bold text-center ${
                        user.rank == 1
                          ? "text-yellow-400"
                          : user.rank == 2
                          ? "text-white"
                          : user.rank == 3
                          ? "text-orange-400"
                          : "text-gray-300"
                      }`}
                    >
                      <span className="block md:inline">
                        {isTop3 &&
                          (user.rank == 1
                            ? "🥇"
                            : user.rank == 2
                            ? "🥈"
                            : "🥉")}
                      </span>
                      <span className="block md:inline md:ml-1">{user.rank}</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="col-span-6 md:col-span-5 flex items-center gap-2 md:gap-4 pl-1 md:pl-2">
                    <Image
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-600"
                      src={user?.photoURL || Default_PFP}
                      alt={"Error"}
                      width={48}
                      height={48}
                      unoptimized
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm md:text-base lg:text-lg font-semibold text-white truncate">
                        {user.displayName}
                        {isUser && (
                          <span className="ml-1 md:ml-2 text-xs bg-blue-600 px-1.5 md:px-2 py-0.5 md:py-1 rounded">
                            You
                          </span>
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Score */}
                  <div className="col-span-2 md:col-span-3 text-center">
                    <p className="text-base md:text-base lg:text-lg font-bold text-blue-400">
                      {user.score}
                    </p>
                    <p className="text-s text-gray-200 hidden md:block">Points</p>
                  </div>

                  {/* Challenges Solved */}
                  <div className="col-span-2 md:col-span-3 text-center">
                    <p className="text-sm md:text-base lg:text-lg font-bold text-blue-400">
                      {user.solvedChallenges}
                    </p>
                    <p className="text-s text-gray-200 hidden md:block">Flags Captured</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
        <StatCard icon="👥" label="Total Players" value={leaderboard.length} />
        <StatCard
          icon="🎯"
          label="Average Score"
          value={Math.round(
            leaderboard.reduce((sum, u) => sum + u.score, 0) /
              leaderboard.length
          )}
        />
        <StatCard icon="🏆" label="Top Score" value={leaderboard[0]?.score || 0} />
      </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 text-center">
      <div className="text-3xl md:text-4xl mb-2">{icon}</div>
      <p className="text-gray-400 text-sm md:text-base lg:text-lg mb-1">{label}</p>
      <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{value}</p>
    </div>
  );
}
