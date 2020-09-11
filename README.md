# Chess Challenge

# Author: Thiago de Campos - thiagocamposde@gmail.com

A Node + React project for the knight chess piece movement challenge.

# Architecture

The application architecture was decided around two concerns: be simple because of the scope and short time and yet be flexible to future scale and improvements.

For this challenge, to make things easy for deployment and presentation I decided to put both frontend and backend together at the same repository. The frontend application are inside the /client folder and can be easily separeted if wanted.

## Frontend:

To bootstrap the application I used create-react-app.

The components are separated in two subfolder:

1. screens: Components that correspondents to a entire screen, normally assossiated with a route.
2. base: Presentional only components that don't do any side effects and can be reused in diferent screens.

Each module/screen has it's own api file located at /api, wich is responsible for fetching data for that especificaly module.

## Backend:

I tried to use the most basic structure I could, using express to handle the API. In the future this structure would probably change, with entities, services and controllers been introduced.

# Third-party libraries

## Material-ui

Used in frontend for basic style and couple of components, grid system and responsive concerns

## Axios

Axios is a great tool to use with react and node, providing easy ways to handle and manipulate requests

Other libraries and tools worth to mention are:

- Standard: for linting purposes
- React Router: Essential for routing components in react
- Nodemon: Usefull for auto refresh the server
- Moment: Usefull to manipulate and format dates

# Installing and running

1. in root directory: 'npm install';
2. cd /client;
3. npm install;

After install, in root directory run:

4. 'npm run dev' (this will run back and front together
