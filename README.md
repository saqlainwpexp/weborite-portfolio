# HeroHarbor

A modern web application built with React, TypeScript, and Node.js.

## Project Structure

```
heroharbor/
├── client/          # Frontend React application
├── server/          # Backend Node.js application
├── package.json     # Root package.json for monorepo
└── vercel.json      # Vercel configuration
```

## Tech Stack

- **Frontend**: React, TypeScript, Vite, Tailwind CSS
- **Backend**: Node.js, Express, TypeScript, PostgreSQL
- **Authentication**: JWT
- **Deployment**: Vercel

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL database
- Vercel account

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/heroharbor.git
cd heroharbor
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
# Database
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=your_db_host
DB_NAME=your_db_name
DB_PORT=5432

# JWT
JWT_SECRET=your_jwt_secret

# API
VITE_API_URL=http://localhost:5000
```

4. Start the development servers:
```bash
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## Deployment to Vercel

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Deploy the backend:
```bash
cd server
vercel
```

3. Deploy the frontend:
```bash
cd client
vercel
```

4. Set up environment variables in Vercel:
   - For the backend project, add all the environment variables from your `.env` file
   - For the frontend project, add `VITE_API_URL` pointing to your deployed backend URL

5. Update CORS settings in the backend to allow requests from your frontend URL.

## Environment Variables

### Backend (.env)
```
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=your_db_host
DB_NAME=your_db_name
DB_PORT=5432
JWT_SECRET=your_jwt_secret
FRONTEND_URL=your_frontend_url # e.g., https://your-app.vercel.app
```

### Frontend (.env)
```
VITE_API_URL=your_backend_url
```

## License

MIT 