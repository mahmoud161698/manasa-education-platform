# 🎓 Manasa Education Platform

<div align="center">
  <img src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" alt="Manasa Education Platform" width="1200" height="475" />
</div>

## 📖 Overview

Manasa Education Platform is a comprehensive educational solution that connects students and administrators through an intuitive interface with AI-powered tutoring capabilities. Built with modern web technologies, it provides a seamless learning experience with intelligent chatbot assistance powered by Google's Gemini AI.

## ✨ Features

### 👨‍🎓 Student Features
- **AI-Powered Chatbot**: Get instant help with your studies using Gemini AI
- **Course Management**: Browse and enroll in courses
- **Assignment Tracking**: View and submit assignments
- **Grade Monitoring**: Track your academic progress
- **Interactive Dashboard**: User-friendly interface for all learning activities

### 👨‍💼 Admin Features
- **Course Creation**: Create and manage educational content
- **Student Management**: Monitor student progress and enrollment
- **Assignment Management**: Create, distribute, and grade assignments
- **Analytics Dashboard**: View platform statistics and insights
- **Content Organization**: Structure courses and materials efficiently

### 🤖 AI Tutoring
- Intelligent responses using Google Gemini AI
- Context-aware conversations
- Multi-turn dialogue support
- Educational content assistance

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.2.0
- **Language**: TypeScript 5.8.2
- **Build Tool**: Vite 6.2.0
- **AI Integration**: Google Generative AI (Gemini) 1.30.0
- **Icons**: Lucide React 0.554.0
- **Styling**: Modern CSS with responsive design

## 📋 Prerequisites

Before running this project, ensure you have:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Gemini API Key** from [Google AI Studio](https://makersuite.google.com/app/apikey)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/mahmoud161698/manasa-education-platform.git
cd manasa-education-platform
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

**Important**: Never commit your `.env.local` file to version control!

### 4. Run the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 5. Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### 6. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
manasa-education-platform/
├── src/
│   ├── App.tsx                 # Main application component
│   ├── index.tsx               # Application entry point
│   ├── types.ts                # TypeScript type definitions
│   ├── geminiService.ts        # AI service integration
│   ├── ChatBot.tsx             # AI chatbot component
│   ├── LoginPage.tsx           # Authentication interface
│   ├── StudentDashboard.tsx    # Student portal
│   └── AdminDashboard.tsx      # Admin portal
├── index.html                  # HTML template
├── package.json                # Project dependencies
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite build configuration
├── metadata.json               # Project metadata
└── README.md                   # This file
```

## 🔐 Authentication

The platform includes a login system with role-based access:

- **Students**: Access to learning materials, assignments, and AI tutor
- **Admins**: Full platform management capabilities

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

Developed by [Mahmoud Matrawy](https://github.com/mahmoud161698)

## 🔗 Links

- [GitHub Repository](https://github.com/mahmoud161698/manasa-education-platform)
- [AI Studio App](https://ai.studio/apps/drive/1qXeJ8lVJ8KQdtAO6T1z3cygceXZKGl7G)
- [Google Gemini AI](https://ai.google.dev/)

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

<div align="center">
  Made with ❤️ for education
</div>