"use client"
import React from 'react'
import { HoverEffect } from "../ui/card-hover-effect";


function ProjectsSection() {
  return (
    <section id='ProjectSection'>
      <h1 className='heading-lg text-[#D2F220]'>PERSONAL PROJECTS</h1>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} onClick={() => {
        }} />
      </div>
    </section>
  )
}

export default ProjectsSection

export const projects = [
  {
    "title": "LifeTrek – A Flutter Social Media App like Instagram",
    "short_description": "LifeTrek is a Flutter-based social media app with login, posts, profile updates, comments, user search, dark mode, and responsive web UI.",
    "full_description": "LifeTrek is a modern social media app built with Flutter that replicates core features of Instagram, offering a seamless user experience across mobile and web platforms.\\n\\n✨ Features:\\n\\n 🔐 User Authentication (Login / Registration) – Firebase Auth\\n 📸 Add, Delete Posts with Captions – Firebase Firestore + Cloudinary for media\\n 👤 Profile Updates – Change profile picture, bio, and view stats\\n 💬 Comment System – Add/Delete comments\\n 🌙 Light/Dark Theme Switch\\n 🔍 Search Users by Name\\n 🌐 Fully Responsive – Mobile + Web UI\\n\\n🧠 Architecture & Stack:\\n\\nFlutter with Cubit for state management\\nClean Architecture for scalable and maintainable code\\nFirebase Authentication & Cloud Firestore for backend\\nCloudinary* for media hosting\\nFully Responsive UI using Flutter's layout tools",
    "image_url": "",
    "gitHubUrl": "https://github.com/adityapandey-102/Life-Trek-Social-Media-App",
    "host_serverUrl": "https://socialmediaapp-d4ef7.web.app"
  },
  {
    "title": "YourCart - E-commerce Website (MERN App)",
    "short_description": "Developed a feature-rich e-commerce platform with authentication, product listings, filters, cart, and wishlist management.",
    "full_description": "Developed a feature-rich e-commerce website with user authentication for secure data management, product listings, filters, and cart and wishlist management. Designed an intuitive user interface, including responsive design and search functionality. Implemented advanced filtering options, including price range, category, customer ratings, and product availability. Utilized technologies like React, Redux Toolkit, Tailwind, and MongoDB for seamless user experiences. Demonstrated strong web development skills and problem-solving abilities.",
    "image_url": "",
    "gitHubUrl": "https://github.com/adityapandey-102/YourCartFrontend",
    "host_serverUrl": "https://yourcart-ecom.netlify.app"
  },
  {
    "title": "TaskTracker - Task Management Website",
    "short_description": "Created a task management platform with task categorization, easy updates, and an intuitive interface for enhanced productivity.",
    "full_description": "Developed TaskTracker, a user-friendly and efficient task management website. Key Features: Task Categorization: Categorized tasks into 'To-Do,' 'Doing,' and 'Done' for easy prioritization. Task Creation: Streamlined task creation with detailed information and labels/tags for organization. Task Updates: Enabled easy task updates including status, due dates, and categories. User-Friendly Interface: Designed an intuitive, visually appealing interface. Ideal for individuals, teams, and businesses seeking productivity and organization enhancement.",
    "image_url": "",
    "gitHubUrl": "https://github.com/adityapandey-102/taskmanagerFrontend",
    "host_serverUrl": "https://task-tracker000.netlify.app"
  },
  {
    "title": "MyNoteBook - A MERN App",
    "short_description": "Built a secure note-saving MERN app allowing users to add, update, delete, and categorize notes with authentication.",
    "full_description": "MyNoteBook is a MERN app designed for securely saving important notes, allowing users to access them anytime. Features include adding, updating, and deleting notes, assigning meaningful titles and tags for better organization, and secure authentication and authorization for data privacy.",
    "image_url": "",
    "gitHubUrl": "https://github.com/adityapandey-102/mynotebook_frontend",
    "host_serverUrl": "https://mynotebook00.netlify.app"
  },
  {
    "title": "MyWeatherApp",
    "short_description": "A live weather forecasting app displaying real-time weather, AQI, and 5-day forecasts for any location worldwide.",
    "full_description": "LIVE Weather forecast Vanilla JS app. Displays weather of the user's current location, Air Quality Index, 5 Days Forecast, and Sunrise & Sunset. Users can also search for weather forecasts around the world.",
    "image_url": "",
    "gitHubUrl": "https://github.com/adityapandey-102/my-weather-app",
    "host_serverUrl": "https://myweathercheck21.netlify.app/"
  },
  {
    "title": "TextUtils - Text Editor",
    "short_description": "An online text editor built with React.js that allows users to manipulate and copy text, featuring a dark mode.",
    "full_description": "TextUtils is a React-based text editor that allows users to edit text according to their needs. It includes features such as text transformation, copying the edited text, and a dark mode for better usability.",
    "image_url": "",
    "gitHubUrl": "https://github.com/adityapandey-102/textUtils",
    "host_serverUrl": "https://adityapandey-102.github.io/textUtils"
  }
]
