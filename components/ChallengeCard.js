import Link from "next/link";

export default function ChallengeCard({ challenge, isCompleted, isLocked }) {
  const difficulty = {
    Easy: "text-emerald-400",
    Medium: "text-amber-400",
    Hard: "text-rose-400",
  };

  const borderColor = {
    Easy: "border-emerald-400",
    Medium: "border-amber-400",
    Hard: "border-rose-400",
  };

  const shadowColor = {
    Easy: "shadow-emerald-400/20",
    Medium: "shadow-amber-400/20",
    Hard: "shadow-rose-400/20",
  };

  return (
    <div
      className={`
      bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border-2 transition-all shadow-md
      ${
        isLocked
          ? "border-slate-700 opacity-60"
          : `${borderColor[challenge.difficulty]} hover:shadow-lg ${shadowColor[challenge.difficulty]}`
      }
      ${isCompleted ? "border-emerald-500 shadow-emerald-500/20" : ""}
    `}
    >
      <div className="flex items-start justify-between mb-4">
        {/* Title Div */}
        <div>
          <h3 className="text-xl font-bold mb-1 text-white">{challenge.title}</h3>
          <span className={`text-sm font-semibold ${difficulty[challenge.difficulty]}`}>
            {challenge.difficulty}
          </span>
        </div>
        {/* Tag Div */}
        <div>
          {isCompleted && (
            <span className="bg-emerald-500 text-white text-xs px-3 py-1 rounded-full font-medium">
              ✓ Solved
            </span>
          )}
          {isLocked && (
            <span className="bg-slate-700 text-slate-400 text-xs px-3 py-1 rounded-full font-medium">
              🔒 Locked
            </span>
          )}
        </div>
      </div>
      {/* Desc */}
      <p className="text-gray-300 mb-4 text-sm">{challenge.description}</p>
      {/* Action */}
      {isLocked ? (
        <button
          disabled
          className="bg-slate-700 text-slate-500 px-4 py-2 rounded-lg cursor-not-allowed font-medium"
        >
          Locked
        </button>
      ) : isCompleted ? (
        <Link
          href={`/challenges/${challenge.id}`}
          className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition font-medium inline-block"
        >
          View Again
        </Link>
      ) : (
        <Link
          href={`/challenges/${challenge.id}`}
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg transition font-medium inline-block shadow-md hover:shadow-lg"
        >
          Attempt
        </Link>
      )}
    </div>
  );
}