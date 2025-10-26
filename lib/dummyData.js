// Simulated data 

export const dummyChallenges = [
  {
    id: '1',
    title: 'First Blood',
    description: 'Your first challenge to get started',
    difficulty: 'Easy',
    points: 100,
    order: 1,
    locked: false,
    category: 'Web',
    hint: 'Look for the flag in the page metadata or comments',
    link: 'https://example.com/'
  },
  {
    id: '2',
    title: 'Hidden Message',
    description: 'Find the hidden flag in the source code',
    difficulty: 'Easy',
    points: 150,
    order: 2,
    locked: true, // Unlocked after C1
    category: 'Web',
    hint: 'Try inspecting the HTML source code using browser dev tools',
    link: 'https://example.com/'
  },
  {
    id: '3',
    title: 'SQL Injection Basics',
    description: 'Exploit a vulnerable login form',
    difficulty: 'Medium',
    points: 250,
    order: 3,
    locked: true,
    category: 'Web',
    hint: 'Try using SQL operators like OR in the username field',
    link: 'https://example.com/'
  },
  {
    id: '4',
    title: 'XSS Attack',
    description: 'Execute a cross-site scripting attack',
    difficulty: 'Medium',
    points: 300,
    order: 4,
    locked: true,
    category: 'Web',
    hint: 'Try injecting a script tag in the input field',
    link: 'https://example.com/'
  },
  {
    id: '5',
    title: 'Privilege Escalation',
    description: 'Gain admin access to the system',
    difficulty: 'Hard',
    points: 500,
    order: 5,
    locked: true,
    category: 'System',
    hint: 'Check for misconfigured permissions or exposed admin endpoints',
    link: 'https://example.com/'
  },
]

export const dummyUser = {
  id: 'user123',
  email: 'test@example.com',
  displayName: 'Test User',
  score: 250, // Solved challenges 1 & 2
  completedChallenges: ['1', '2'], 
  photoURL: 'https://example.com/'
}

// Dummy leaderboard data
export const dummyLeaderboard = [
  {
    id: 'user1',
    rank: 1,
    displayName: 'Alice Johnson',
    email: 'alice@example.com',
    score: 1250,
    solvedChallenges: 5,
  },
  {
    id: 'user2',
    rank: 2,
    displayName: 'Bob Smith',
    email: 'bob@example.com',
    score: 950,
    solvedChallenges: 4,
  },
  {
    id: 'user3',
    rank: 3,
    displayName: 'Charlie Brown',
    email: 'charlie@example.com',
    score: 850,
    solvedChallenges: 4,
  },
  {
    id: 'user4',
    rank: 4,
    displayName: 'Diana Prince',
    email: 'diana@example.com',
    score: 600,
    solvedChallenges: 3,
  },
  {
    id: 'user5',
    rank: 5,
    displayName: 'Eve Wilson',
    email: 'eve@example.com',
    score: 450,
    solvedChallenges: 3,
    photoURL: 'https://i.pravatar.cc/150?img=5'
  },
  {
    id: 'user6',
    rank: 6,
    displayName: 'Frank Miller',
    email: 'frank@example.com',
    score: 350,
    solvedChallenges: 2,
    photoURL: 'https://i.pravatar.cc/150?img=6'
  },
  {
    id: 'user7',
    rank: 7,
    displayName: 'Grace Lee',
    email: 'grace@example.com',
    score: 250,
    solvedChallenges: 2,
    photoURL: 'https://i.pravatar.cc/150?img=7'
  },
  {
    id: 'user8',
    rank: 8,
    displayName: 'Henry Clark',
    email: 'henry@example.com',
    score: 150,
    solvedChallenges: 1,
    photoURL: 'https://i.pravatar.cc/150?img=8'
  },
  {
    id: 'user123',  // This is "you" (current user from dummyUser)
    rank: 9,
    displayName: 'Test User',
    email: 'test@example.com',
    score: 250,
    solvedChallenges: 2,
    photoURL: 'https://i.pravatar.cc/150?img=9'
  },
  {
    id: 'user9',
    rank: 10,
    displayName: 'Ivy Martinez',
    email: 'ivy@example.com',
    score: 100,
    solvedChallenges: 1,
    photoURL: 'https://i.pravatar.cc/150?img=9'
  }
]