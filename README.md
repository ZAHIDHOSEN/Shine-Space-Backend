Shine Space - Backend

This is the backend API for Shine Space, a property listing platform. It handles data management, business logic, and serves REST API endpoints consumed by the Shine Space frontend.

🚀 Live API

https://shine-space-backend.vercel.app/

🛠️ Tech Stack


Runtime: Node.js
Framework: Express.js
Database: [MongoDB / your DB — update as applicable]
ODM: [Mongoose — update if used]
Deployment: Vercel (Serverless)


✨ Features


RESTful API for property listings (CRUD operations)
[Search & filter endpoints — update with actual routes]
[User authentication / authorization — if applicable]
Environment-based configuration for local and production
CORS-enabled API for secure frontend-backend communication



⚙️ Environment Variables

Create a .env file in the root directory with:

PORT=5000
DATABASE_URL=your_database_connection_string


🧑‍💻 Getting Started


Clone the repository


bashgit clone https://github.com/ZAHIDHOSEN/shine-space-backend.git
cd shine-space-backend


Install dependencies


bashnpm install


Set up environment variables (see above)
Run the development server


bashnpm run dev

The API will be running at http://localhost:5000

🐛 Notable Engineering Challenge

Deployment on Vercel's serverless environment initially caused connection timeout issues, since traditional persistent database connections don't behave the same way in a serverless context. This was resolved by properly managing environment variables and ensuring the database connection is handled correctly per serverless function invocation, rather than relying on a single long-lived connection.

🔗 Related Repository


Frontend: shine-space-frontend


👤 Author

Zahid Hosen


GitHub: github.com/ZAHIDHOSEN
Portfolio: my-portfolio-lovat-beta-19.vercel.app
