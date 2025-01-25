# Blogging Website

A scalable full-stack blogging platform with a React.js frontend and a Hono backend, designed for seamless user experience and global accessibility.

## Features

- **User Authentication**: Secure user login and registration using JWT.
- **Blog Management**: Create, read and update blog posts.
- **Data Validation**: Input validation using Zod to ensure data integrity.
- **Global Deployment**:
  - Frontend hosted on [Vercel](https://website-blogging.vercel.app/).
  - Backend deployed using [Cloudflare Workers](https://backend.abhipandey1904.workers.dev/) for low latency worldwide.
- **PostgreSQL Database**: Reliable data storage for users and blog content.

## Tech Stack

### Frontend

- React.js
- TypeScript
- Tailwind CSS

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
3. Set up environment variables in backend folder:
   ```bash
   DATABASE_URL=<your-postgresql-database-url>
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Access the app:
   Open http://localhost:3000 in your browser.
