const express = require('express');
const app = express();

// Sample user data
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
];

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Check if userId is a valid number
  const parsedId = parseInt(userId);
  if (isNaN(parsedId)) {
    return res.status(400).send('Invalid user ID');
  }

  const user = users.find(user => user.id === parsedId);
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});

// ... other routes ...

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));