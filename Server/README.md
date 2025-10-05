# RocketFlow Backend API

A complete backend boilerplate for a multi-user, role-based web application with OAuth authentication.

## Features

- 🔐 **Authentication**: Email/password + Google & Facebook OAuth
- 👥 **Role-based Access Control**: Admin, Team Member, User roles
- 🛡️ **Security**: JWT tokens, bcrypt hashing, rate limiting, helmet
- 🗄️ **Database**: PostgreSQL with Prisma ORM
- 📝 **Validation**: Express-validator for input validation
- 🚀 **Performance**: Optimized queries and error handling

## Tech Stack

- **Runtime**: Node.js with ES Modules
- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: Passport.js (Google, Facebook OAuth)
- **Security**: JWT, bcrypt, helmet, CORS, rate limiting

## Quick Start

### 1. Installation

```bash
npm install
```

### 2. Environment Setup

Copy `.env.example` to `.env` and configure your environment variables:

```bash
cp .env.example .env
```

Update the following variables in `.env`:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/rocketflow?schema=public"

# JWT
JWT_SECRET="your-super-secret-jwt-key"
JWT_EXPIRES_IN="7d"

# OAuth - Google
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# OAuth - Facebook
FACEBOOK_APP_ID="your-facebook-app-id"
FACEBOOK_APP_SECRET="your-facebook-app-secret"

# Server
PORT=3001
CLIENT_URL="http://localhost:3000"
```

### 3. Database Setup

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Optional: Open Prisma Studio
npm run db:studio
```

### 4. OAuth Setup

#### Google OAuth Setup:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `http://localhost:3001/api/auth/google/callback`

#### Facebook OAuth Setup:
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app
3. Add Facebook Login product
4. Configure Valid OAuth Redirect URIs: `http://localhost:3001/api/auth/facebook/callback`

### 5. Start Server

```bash
# Development
npm run dev

# Production
npm start
```

## API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/register` | Register new user | Public |
| POST | `/login` | Login user | Public |
| GET | `/google` | Google OAuth login | Public |
| GET | `/google/callback` | Google OAuth callback | Public |
| GET | `/facebook` | Facebook OAuth login | Public |
| GET | `/facebook/callback` | Facebook OAuth callback | Public |
| GET | `/me` | Get current user | Protected |
| PUT | `/profile` | Update profile | Protected |
| PUT | `/change-password` | Change password | Protected |
| POST | `/logout` | Logout user | Protected |

### User Routes (`/api/users`)

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/dashboard` | User dashboard | User+ |
| GET | `/team/dashboard` | Team dashboard | Team+ |
| GET | `/admin/dashboard` | Admin dashboard | Admin |
| GET | `/admin/users` | Get all users | Admin |
| GET | `/admin/users/:id` | Get user by ID | Admin |
| PUT | `/admin/users/:id/role` | Update user role | Admin |
| DELETE | `/admin/users/:id` | Delete user | Admin |

## User Roles

- **USER**: Basic user access
- **TEAM_MEMBER**: Team-level access + all user permissions
- **ADMIN**: Full system access + all permissions

## Request/Response Examples

### Register User

```bash
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePass123",
  "mobile": "01812345678"
}
```

### Login User

```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "SecurePass123"
}
```

### Protected Request

```bash
GET /api/auth/me
Authorization: Bearer your-jwt-token
```

## Error Handling

The API uses consistent error response format:

```json
{
  "success": false,
  "message": "Error description",
  "errors": [] // Validation errors (if any)
}
```

## Rate Limiting

- **General API**: 100 requests per 15 minutes
- **Auth endpoints**: 5 requests per 15 minutes
- **Password reset**: 3 requests per hour

## Security Features

- JWT token authentication
- Password hashing with bcrypt
- CORS protection
- Helmet security headers
- Rate limiting
- Input validation and sanitization
- SQL injection protection (Prisma)

## Database Schema

```prisma
model User {
  id          Int      @id @default(autoincrement())
  name        String?
  email       String?  @unique
  password    String?
  googleId    String?  @unique
  facebookId  String?  @unique
  role        Role     @default(USER)
  avatar      String?
  isVerified  Boolean  @default(false)
  lastLogin   DateTime?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

enum Role {
  ADMIN
  TEAM_MEMBER
  USER
}
```

## Development

### Project Structure

```
Server/
├── config/
│   ├── database.js      # Prisma client
│   └── passport.js      # Passport strategies
├── controllers/
│   ├── authController.js
│   └── userController.js
├── middlewares/
│   ├── authMiddleware.js
│   ├── roleMiddleware.js
│   ├── rateLimitMiddleware.js
│   └── errorMiddleware.js
├── routes/
│   ├── authRoutes.js
│   └── userRoutes.js
├── prisma/
│   └── schema.prisma
├── .env.example
├── index.js
└── package.json
```

### Available Scripts

```bash
npm start          # Start production server
npm run dev        # Start development server
npm run db:generate # Generate Prisma client
npm run db:push    # Push schema to database
npm run db:studio  # Open Prisma Studio
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.