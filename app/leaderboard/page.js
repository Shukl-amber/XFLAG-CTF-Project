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
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-6xl font-bold mb-5 mt-10 bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent">
          Leaderboard
        </h1>
        <p className="text-xl text-gray-300">Top Performers in the Arena</p>
      </div>
      {/* User Rank */}
      {!userRank && (
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-6 mb-8 border-2 border-blue-500">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                className="w-16 h-16 rounded-full border-2 border-blue-400"
                src={userRank?.photoURL || Default_PFP}
                alt={"Error"}
                width={64}
                height={64}
                unoptimized
              />
              <div>
                <p className="text-sm text-gray-400">Your Rank</p>
                <h2 className="text-2xl font-bold text-white">
                  #{userRank.rank ?? "-"}
                </h2>
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-blue-400">
                {userRank.score || "-"} Points
              </p>
              <p className="text-3xl font-bold text-blue-400">
                {userRank.solvedChallenges || "-"} Flags Captured
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Ladder */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        {/* Header */}
        <div className="bg-gray-900 px-6 py-4 border-b border-gray-700">
          <div className="grid grid-cols-12 gap-4 font-semibold text-gray-400 text-sm">
            <div className="col-span-1 text-center">Rank</div>
            <div className="col-span-5 text-center">Player</div>
            <div className="col-span-3 text-center">Score</div>
            <div className="col-span-3 text-center">Solved</div>
          </div>
        </div>

        {/* Body */}
        <div className="divide-y divide-gray-700">
          {leaderboard.map((user, index) => {
            const isUser = user.id === userRank.id;
            const isTop3 = user.rank <= 3;

            return (
              <div
                key={user.id}
                className={`px-6 py-4 transition ${
                  isUser
                    ? "bg-blue-900/30 border-l-4 border-l-blue-500"
                    : "hover:bg-gray-750"
                }`}
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Rank */}
                  <div className="col-span-1">
                    <div
                      className={`text-2xl font-bold text-center ${
                        user.rank == 1
                          ? "text-yellow-400"
                          : user.rank == 2
                          ? "text-white"
                          : user.rank == 3
                          ? "text-orange-400"
                          : "text-gray-300"
                      }`}
                    >
                      {isTop3 &&
                        (user.rank == 1
                          ? "🥇"
                          : user.rank == 2
                          ? "🥈"
                          : "🥉")}{" "}
                      {user.rank}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="col-span-5 flex items-center gap-10">
                    <Image
                      className="w-12 h-12 rounded-full border-2 border-gray-600"
                      src={user?.photoURL || Default_PFP}
                      alt={"Error"}
                      width={64}
                      height={64}
                      unoptimized
                    />
                    <div>
                      <p className="text-xl font-semibold text-white">
                        {user.displayName}
                        {isUser && (
                          <span className="ml-2 text-xs bg-blue-600 px-2 py-1 rounded">
                            You
                          </span>
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Score */}
                  <div className="col-span-3 text-center">
                    <p className="text-xl font-bold text-blue-400">
                      {user.score}
                    </p>
                    <p className="text-s text-gray-500">Points</p>
                  </div>

                  {/* Challenges SOlved */}
                  <div className="col-span-3 text-center">
                    <p className="text-xl font-bold text-blue-400">
                      {user.solvedChallenges}
                    </p>
                    <p className="text-s text-gray-500">Flags Captured</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Summary */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <StatCard icon="👥" label="Total Players" value={leaderboard.length} />
        <StatCard
          icon="🎯"
          label="Average Score"
          value={Math.round(
            leaderboard.reduce((sum, u) => sum + u.score, 0) /
              leaderboard.length
          )}
        />
        <StatCard icon="👥" label="Total Players" value={leaderboard.length} />
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }) {
  return (
    <div className="bg-gray-800 rounded-lg mb-6 p-6 border border-gray-700 text-center">
      <div className="text-4l mb-2">{icon}</div>
      <p className="text-gray-400 text-xl mb-1">{label}</p>
      <p className="text-4xl font-bold text-white">{value}</p>
    </div>
  );
}
