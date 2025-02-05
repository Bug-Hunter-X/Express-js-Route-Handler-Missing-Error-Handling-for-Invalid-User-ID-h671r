# Express.js Route Handler Missing Error Handling

This repository demonstrates a common error in Express.js route handlers:  missing error handling for invalid input.  Specifically, this example shows a route that fetches a user by ID, but fails to handle cases where the ID is not a valid number.  The `parseInt()` function is used, but no check is made to see if the result is a valid number.

## Bug

The `bug.js` file contains the flawed code. When a non-numeric ID is passed to the `/users/:id` route, a server-side error occurs.

## Solution

The `bugSolution.js` file provides a corrected version of the code.  This version includes checks to ensure the ID is a valid number before attempting to use it.

## How to reproduce the bug

1. Clone this repository.
2. Run `npm install express` to install the dependencies.
3. Run `node bug.js`.
4. Send a GET request to `/users/abc` (or any other non-numeric ID).  Observe the server error.

## How to test the solution

1. Run `node bugSolution.js`.
2. Send a GET request to `/users/abc`.  Observe the 404 response indicating that the user was not found.  The server does not crash.