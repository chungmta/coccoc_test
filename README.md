## Prerequisites

- Node.js >= 14
- npm or yarn (package manager)

## Getting Started
1. Install dependencies

```js
npm run install-deps
```

- Or you can navigate to each directory and run the npm install command in each one.


3. Start the frontend and backend servers

```js
npm run start
```
This will start both the frontend (port 3000) and backend (port 9000) concurrently.


## Code-base
This project is divided into three main directories: frontend, backend and scripts. 

- frontend: contains the code for the client-side of the application.
    + Created with ***create-react-app***, the output of the build process is a bundle of JavaScript files that use ES5 syntax.
- backend: contains the code for the server-side of the application.
    + I use nestjs to create an api that handles user authentication with JWT.
- scripts: contains various js scripts.

---
Have a good day!