    const express = require('express'); // Import the Express module
    const app = express(); // Create an Express application instance
    const PORT = 3001; // Define the port for the server

    // Define a route for the root URL
    app.get('/', (req, res) => {
      res.send('<h1>Hello from your Express Server!</h1>');
    });

    // Start the server and listen on the specified port
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });