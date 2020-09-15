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

I tried to use a basic structure approach, using express to handle the API.
I split the structure in 4 main folders:

1. Routes: define the routers of the application. Here I avoid business logic code.
2. Controllers: Controllers are responsible for validation, call services when needed and prepare the response to return
3. Services: Services is were the business logic are placed. In this case is were the next movement calculation was placed
4. Shared: Contains any constants or utility that could be potentially used through the application

# Third-party libraries

Some libraries and tools worth to mention:

- React Router: Essential for routing components in react
- Nodemon: Usefull for auto refresh the server
- Lodash: Utility for array and object manipulation
- express-validator: For api params validation purposes
- Jest: A JavaScript testing framework designed to ensure correctness of code

# Installing and running

In order to run this application you should:

1. in root directory type: 'npm install';
2. cd /client;
3. npm install;

After installing the front end dependences, in root directory run:

4. 'npm run dev' (this will run back and front together)

At this point you should be able to see the application running at http://localhost:3000/

# Running tests

to run backend tests type:

'npm run test-dev'
