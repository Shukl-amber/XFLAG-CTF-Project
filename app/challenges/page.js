"use client";

import { useState, useEffect } from "react";
import ChallengeCard from "@/components/ChallengeCard";
import { dummyChallenges, dummyUser } from "@/lib/dummyData";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function ChallengesPage() {
  const [challenges, setChallenges] = useState([]);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setChallenges(dummyChallenges);
      setUser(dummyUser);
      setLoading(false);
    }, 500);
  }, []);

  const totalPoints = user?.score || 0;
  const solvedCount = user?.completedChallenges?.length || 0;
  const totalChallenges = challenges.length;

  const processedChallenges = challenges.map((challenge) => {
    const isCompleted = user?.completedChallenges?.includes(challenge.id);

    const prevChallenge = challenges.find(
      (c) => c.order === challenge.order - 1
    );

    const isLocked =
      challenge.order > 1 &&
      (!prevChallenge || !user.completedChallenges?.includes(prevChallenge.id));

    return { ...challenge, isCompleted, isLocked };
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mt-8 mb-8">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight pb-2">Challenges</h1>
        <p className="text-xl text-lg">
          Complete Challenges Sequentially To Unlock New Ones!
        </p>
      </div>
      {/* User Status */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 mb-8 border border-slate-700 shadow-lg">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-400">
              {totalPoints}
            </div>
            <div className="text-sm text-gray-400 font-medium">Total Points</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-400">
              {solvedCount}
            </div>
            <div className="text-sm text-gray-400 font-medium">Challenges Solved</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400">
              {totalChallenges - solvedCount}
            </div>
            <div className="text-sm text-gray-400 font-medium">Remaining</div>
          </div>
        </div>
      </div>
      {/* Challenges */}
      <div className="grid md:grid-cols-2 gap-6">
        {processedChallenges.map((challenge) => (
          <ChallengeCard
            key={challenge.id}
            challenge={challenge}
            isCompleted={challenge.isCompleted}
            isLocked={challenge.isLocked}
          />
        ))}
      </div>
    </div>
  );
}
