"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { dummyChallenges, dummyUser } from "@/lib/dummyData";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function ChallengePage() {
  const params = useParams();
  const router = useRouter();
  const challengeId = params.id;

  const [challenge, setChallenge] = useState(null);
  const [user, setUser] = useState(null);
  const [flagInput, setFlagInput] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [showHint, setShowHint] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundChallenge = dummyChallenges.find((c) => c.id === challengeId);

    setChallenge(foundChallenge);
    setUser(dummyUser);
    setLoading(false);

    return () => {};
  }, [challengeId, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage({ text: "", type: "" });

    setTimeout(() => {
      const correctFlag = `FLAG{${challengeId}}`;
      console.log(correctFlag);

      if (flagInput.trim() === correctFlag) {
        setMessage({
          text: `🎉 Correct Flag!! Challenge ${challenge.order} Captured Successfully!`,
          type: "success",
        });
      } else {
        setMessage({
          text: "❌ Incorrect Flag. Try Again!",
          type: "error",
        });
      }
      setSubmitting(false);
    }, 1000);
  };

  if (challenge && challenge.locked) {
    const prevChallenge = dummyChallenges.find(
      (c) => c.order === challengeId - 1
    );

    if (dummyUser.completedChallenges.includes(prevChallenge?.id)) {
      challenge.locked = false;
    }
  }

  const isCompleted = user?.completedChallenges?.includes(challengeId);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!challenge) {
    return (
      <div className="max-w-4xl mx-auto text-center py-20">
        <h1 className="text-2xl font-bold text-red-500 mb-4">
          Challenge Not Found
        </h1>
        <button
          onClick={() => router.push("/challenges")}
          className="text-blue-500 hover:text-blue-400"
        >
          ← Back to Challenges
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/*Back Button*/}
      <button
        onClick={() => router.push("/challenges")}
        className="text-blue-400 hover:text-blue-300 mb-8 flex items-center gap-2 transition-colors duration-200 font-medium"
      >
        <span className="text-xl">←</span> Back to Challenges
      </button>

      {/*Header*/}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 shadow-lg mb-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-white">
              {challenge.title}
            </h1>
            <div className="flex gap-4 text-sm">
              <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full">
                📁 {challenge.category}
              </span>
              <span
                className={`px-3 py-1 rounded-full font-medium ${
                  challenge.difficulty === "Easy"
                    ? "bg-green-900/40 text-green-400 border border-green-700"
                    : challenge.difficulty === "Medium"
                    ? "bg-yellow-900/40 text-yellow-400 border border-yellow-700"
                    : "bg-red-900/40 text-red-400 border border-red-700"
                }`}
              >
                {challenge.difficulty}
              </span>
              <span className="px-3 py-1 bg-blue-900/40 text-blue-400 rounded-full border border-blue-700 font-semibold">
                🏆 {challenge.points} pts
              </span>
            </div>
          </div>

          {isCompleted && (
            <span className="bg-gradient-to-r from-green-600 to-green-500 text-white px-5 py-2.5 rounded-lg shadow-md font-semibold">
              ✓ Completed
            </span>
          )}
        </div>

        {/* Challenge Details Section */}
        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700 mb-6 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
            <span className="text-blue-400">📋</span> Challenge Details
          </h2>
          <div className="bg-gray-950/60 rounded-lg p-6 border border-gray-800">
            <p className="text-gray-300 font-mono text-sm leading-relaxed">
              {challenge.description}
            </p>
            <div className="mt-4 pt-4 border-t border-gray-800">
              <p className="text-gray-400 text-sm">
                <span className="text-blue-400 font-semibold">
                  Flag Format:
                </span>{" "}
                FLAG&#123;...&#125;
              </p>
            </div>
          </div>
        </div>

        {/* Challenge Link Section */}
        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700 mb-6 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
            <span className="text-purple-400">🔗</span> Challenge Link
          </h2>
          <a
            href={challenge.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 font-mono text-sm bg-gray-950/60 px-4 py-3 rounded-lg border border-gray-800 hover:border-blue-700"
          >
            <span>🌐</span>
            <span>{challenge.link}</span>
            <span className="ml-2">→</span>
          </a>
        </div>

        {/* Flag Submission Section */}
        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700 backdrop-blur-sm">
          {/*Hint Div*/}
          <div className="mb-6">
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors duration-200 bg-yellow-900/20 px-4 py-2 rounded-lg border border-yellow-700/50 hover:border-yellow-600"
            >
              <span>{showHint ? "▼" : "▶"}</span>
              <span>💡 {showHint ? "Hide" : "Show"} Hint</span>
            </button>

            {showHint && (
              <div className="mt-4 bg-yellow-900/30 border border-yellow-600 rounded-lg p-5 shadow-lg animate-fadeIn">
                <p className="text-yellow-100 text-sm leading-relaxed">
                  <span className="font-semibold text-yellow-300">
                    💡 Hint:
                  </span>{" "}
                  {challenge.hint}
                </p>
              </div>
            )}
          </div>

          {/*Submission*/}
          <form onSubmit={handleSubmit}>
            <label className="block text-lg font-semibold mb-3 text-white flex items-center gap-2">
              <span>🚩</span> Submit Flag:
            </label>

            <div className="flex gap-3">
              <input
                type="text"
                value={flagInput}
                onChange={(e) => setFlagInput(e.target.value)}
                placeholder={!challenge.locked ? "FLAG{...}" : "Challenge Locked"}
                disabled={isCompleted || challenge.locked}
                className="flex-1 bg-gray-950/60 border border-gray-700 rounded-lg px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              />

              <button
                type="submit"
                disabled={submitting || isCompleted || !flagInput.trim() || challenge.locked}
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 disabled:from-gray-700 disabled:to-gray-700 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-blue-500/20"
              >
                {submitting
                  ? "Checking..."
                  : isCompleted
                  ? "✓ Completed"
                  : "Submit"}
              </button>
            </div>
          </form>

          {/* Feedback Message */}
          {message.text && (
            <div
              className={`mt-5 p-5 rounded-lg shadow-lg animate-fadeIn ${
                message.type === "success"
                  ? "bg-green-900/30 border border-green-600 text-green-100"
                  : "bg-red-900/30 border border-red-600 text-red-100"
              }`}
            >
              <p className="font-medium">{message.text}</p>
            </div>
          )}
        </div>

        {/* Navigation*/}
        <div className="flex justify-between mt-8 pt-6 border-t border-gray-700">
          {challenge.order > 1 ? (
            <button
              onClick={() => router.push(`/challenges/${challenge.order - 1}`)}
              className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg font-medium flex items-center gap-2"
            >
              <span>←</span> Previous Challenge
            </button>
          ) : (
            <div></div>
          )}

          {challenge.order < dummyChallenges.length && (
            <button
              onClick={() => router.push(`/challenges/${challenge.order + 1}`)}
              className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg font-medium flex items-center gap-2 ml-auto"
            >
              Next Challenge <span>→</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
