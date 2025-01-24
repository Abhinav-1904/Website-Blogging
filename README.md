# Blogging Website

A scalable full-stack blogging platform with a React.js frontend and a Hono backend, designed for seamless user experience and global accessibility.

## Features

- **User Authentication**: Secure user login and registration using JWT.
- **Blog Management**: Create, read, update, and delete (CRUD) blog posts.
- **Rich Text Editing**: Format blog content with an intuitive text editor.
- **Data Validation**: Input validation using Zod to ensure data integrity.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Global Deployment**:
  - Frontend hosted on [Vercel](https://vercel.com).
  - Backend deployed using [Cloudflare Workers](https://workers.cloudflare.com) for low latency worldwide.
- **PostgreSQL Database**: Reliable data storage for users and blog content.

## Tech Stack

### Frontend

- React.js
- TypeScript
- Tailwind CSS (if used for styling)

### Backend

- Hono
- TypeScript
- Zod
- PostgreSQL
- JWT for authentication

### Deployment

- Vercel for frontend
- Cloudflare Workers for backend

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Abhinav-1904/Website-Blogging.git
   cd Website-Blogging
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a .env file in the backend directory with the following variables:
   DATABASE_URL=<your-postgresql-database-url>
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Access the app:
   Open http://localhost:3000 in your browser.
