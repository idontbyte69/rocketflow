# RocketFlow

RocketFlow is a modern web application that provides AI chatbots, auto-reply systems, website development, and mobile application services to various industry sectors.

## Project Structure

The project is structured as a monorepo with two main components:
- `client`: Frontend Next.js application
- `Server`: Backend server application

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher recommended)

## Installation

### Clone the repository

```bash
git clone https://github.com/idontbyte69/rocketflow.git
cd rocketflow
```

### Setting up the Client

```bash
cd client
npm install
```

### Setting up the Server

```bash
cd ../Server
npm install
```

## Running the Application

### Development Mode

#### Client

```bash
cd client
npm run dev
```

The client application will be available at [http://localhost:3000](http://localhost:3000).

#### Server

*Note: The server is currently in development and doesn't have a dev script configured yet.*

```bash
cd Server
# Server setup is in progress
```

### Production Mode

#### Client

```bash
cd client
npm run build
npm start
```

#### Server

*Note: Production scripts for the server are currently being set up.*

## Features

- **AI Chatbots**: Intelligent conversational AI to engage customers 24/7
- **Auto Reply Systems**: Automated response systems for seamless customer communication
- **Website Development**: Modern, responsive websites tailored to business needs
- **Mobile Applications**: Native and cross-platform mobile solutions

## Target Industries

- Photography
- Education
- Hotels & Resorts
- Restaurants
- Study Abroad
- Corporate Office
- Travel Booking
- Event Management
- Salon & Parlor
- E-commerce

## Technology Stack

### Frontend
- Next.js 15.5.4 (with Turbopack)
- React 19.1.0
- TailwindCSS 4.x
- ESLint for code quality

### Backend
- Node.js
- *Backend framework to be determined*

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE).

## Project Status

- ✅ Client: Next.js application with modern React and TailwindCSS
- 🚧 Server: Backend development in progress
- 🚧 API endpoints: To be implemented
- 🚧 Database integration: To be implemented

## Available Scripts

### Client Scripts
- `npm run dev`: Start development server with Turbopack
- `npm run build`: Build the application for production
- `npm start`: Start the production server
- `npm run lint`: Run ESLint for code quality checks

## Troubleshooting

### Common Issues

1. **Port already in use**: If port 3000 is already in use, Next.js will automatically use the next available port.
2. **Node version compatibility**: Ensure you're using Node.js 18.0.0 or higher for optimal compatibility.
3. **Clear cache**: If you encounter build issues, try deleting `node_modules` and running `npm install` again.

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Contact

Project Link: [https://github.com/idontbyte69/rocketflow](https://github.com/idontbyte69/rocketflow)
