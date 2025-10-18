import Link from "next/link";

export default function ChallengeCard({ challenge, isCompleted, isLocked }) {
  const difficulty = {
    Easy: "text-green-500",
    Medium: "text-yellow-500",
    Hard: "text-red-500",
  };

  return (
    <div
      className={`
      bg-gray-800 rounded-lg p-6 border-2 transition-all
      ${
        isLocked
          ? "border-gray-700 opacity-60"
          : "border-gray-700 hover:border-blue-500"
      }
      ${isCompleted ? "border-green-500" : ""}
    `}
    >
      <div className="flex items-start justify-between mb-4">
        // Title Div
        <div>
          <h3 className="text-xl font-bold mb-1">{challenge.title}</h3>
          <span className={`text-sm ${difficultyColors[challenge.difficulty]}`}>
            {challenge.difficulty}
          </span>
        </div>
        // Tag Div
        <div>
          {isCompleted && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
              ✓ Solved
            </span>
          )}
          {isLocked && (
            <span className="bg-gray-700 text-gray-400 text-xs px-2 py-1 rounded">
              🔒 Locked
            </span>
          )}
        </div>
      </div>
      //Desc
      <p className="text-gray-400 mb-4 text-sm">{challenge.description}</p>
      //Action
      {isLocked ? (
        <button
          disabled
          className="bg-gray-700 text-gray-500 px-4 py-2 rounded cursor-not-allowed"
        >
          Locked
        </button>
      ) : isCompleted ? (
        <Link
          href={"/challenges/{$challenges.id}"}
          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition"
        >
          View Again
        </Link>
      ) : (
        <Link
          href={`/challenges/${challenge.id}`}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
        >
          Attempt
        </Link>
      )}
    </div>
  );
}
