# RocketFlow - Frontend Application

A modern digital marketing platform frontend built with Next.js 15.5.4 and React 19.

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
