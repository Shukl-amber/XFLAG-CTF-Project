🚩 XFLAG - CTF - Capture The Flag Challenge System

A modern, progressive Capture-the-Flag (CTF) web platform built with Next.js and Firebase. Designed to provide a structured, gamified learning experience for cybersecurity enthusiasts.

📋 Overview
This platform allows users to solve sequential cybersecurity challenges, compete on real-time leaderboards, and track their progress through various difficulty levels. Challenges unlock progressively as users solve them, creating a guided learning path from beginner to advanced security concepts.
✨ Key Features

🔐 Secure Authentication: Google OAuth with optional domain restrictions (e.g., university emails only)
🎯 Sequential Challenge System: Challenges unlock progressively - solve one to access the next
🏆 Real-time Leaderboard: Live rankings with score tracking and user statistics
📊 User Dashboard: Personal progress tracking, solved challenges, and achievement metrics
⚡ Optimized Performance: Firestore caching and snapshot optimizations for smooth real-time updates
🎨 Modern UI: Built with Tailwind CSS for a responsive, dark-themed interface
🔒 Security-First: Protected routes, domain restrictions, and Firestore security rules

🛠️ Tech Stack

Frontend: Next.js 14 (App Router), React, Tailwind CSS
Backend: Next.js API Routes
Database: Firebase Firestore (NoSQL)
Authentication: Firebase Auth (Google OAuth)
Hosting: Vercel

🎮 How It Works

Sign In: Users authenticate with Google (optionally restricted to specific domains)
Start Challenges: Begin with the first unlocked challenge
Submit Flags: Enter the correct flag format (e.g., FLAG{...}) to complete challenges
Earn Points: Each challenge awards points based on difficulty
Climb Leaderboard: Compete with others in real-time rankings
Unlock New Challenges: Sequential progression keeps learning structured

📁 Project Structure
ctf-platform/
├── app/                    # Next.js App Router pages
│   ├── challenges/        # Challenge list and detail pages
│   ├── leaderboard/       # Rankings and scores
│   ├── dashboard/         # User stats and progress
│   ├── profile/           # User profile page
│   └── api/               # Backend API routes
├── components/            # Reusable React components
├── lib/                   # Firebase config and utility functions
├── context/               # React Context for global state
└── public/                # Static assets


🚀 Getting Started
bash# Clone the repository
git clone https://github.com/Shukl-amber/XFLAG-CTF-Project.git

# Install dependencies
npm install

# Set up environment variables
# Create .env.local and add Firebase config

# Run development server
npm run dev
Visit http://localhost:3000 to see the app.
🎯 Challenge Categories

Web Exploitation: XSS, SQL Injection, CSRF
Cryptography: Encoding, hashing, cipher breaking
Forensics: Hidden data, file analysis
Reverse Engineering: Binary analysis, decompilation
System Security: Privilege escalation, misconfigurations

📈 Future Enhancements

Admin panel for challenge management
Futher Backend Optimisation

🎓 Built For
This platform is ideal for:

University cybersecurity courses
Corporate security training
CTF competition hosting
Self-paced security learning

📄 License
MIT License - feel free to use this for educational purposes!