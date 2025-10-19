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