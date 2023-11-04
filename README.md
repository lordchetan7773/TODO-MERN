Building a Todo List App with User Authentication
=========================================

### A todo list made using MERN stack with user authentication.

<br>
<p>
<img alt="MongoDB" src="https://img.shields.io/badge/-MongoDB-13aa52?style=flat-square&logo=mongodb&logoColor=white" /> <img alt="Nodejs" src="https://img.shields.io/badge/-Express-43853d?style=flat-square&logo=Express&logoColor=white" /> <img alt="Nodejs" src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=white" /> <img alt="Nodejs" src="https://img.shields.io/badge/-Node.js-43853d?style=flat-square&logo=Node.js&logoColor=white" />
</p>

Features
--------------

- User authentication with persistent Todos
- Responsive TailwindCSS design
- RESTful API
- Body / Params type checking
Getting Started
----------

1. Clone / Download the repository

1. Install dependencies

   ```bash
   yarn install
   ```

1. Build the project

   ```bash
   yarn build
   ```

1. Run the project

   ```bash
   yarn start
   ```

1. (Run only client)

   Navigate to `/client`
   ```bash
   yarn install
   yarn dev
   ```
# User Authentication Workflow

This README outlines the user authentication workflow for the Todo List web application. Users can sign up for an account, log in, manage tasks, and log out.

## User Registration (Signup)

To register an account, follow these steps:

1. Click on the "Sign Up" button to access the registration form.
2. Fill in your details, including a unique username and password.
3. Click the "Sign Up" button to create your account.

## User Login

To log in to your account, follow these steps:

1. Click on the "Log In" button to access the login form.
2. Enter your username and password.
3. Click the "Log In" button to access your account.

## Authentication State

User authentication state is managed within the application using React state. When you successfully log in, your authentication state is set to indicate that you are authenticated.

## Protected Routes

Certain parts of the application, such as the todo list, are protected. Only authenticated users can access these protected routes. Unauthorized users will be redirected to the login page.

## Logout

To log out of your account, follow these steps:

1. Click the "Logout" button.
2. This action clears your authentication state, ensuring that you are securely logged out.
3. You will be redirected to the login page.

This user authentication workflow provides secure access to your account and ensures that your tasks are associated with your account. Enjoy managing your tasks with confidence!

## Contributing

Feel free to contribute to this project or customize it further to meet your specific requirements.

## License

This project is licensed under the [Your License Name](LICENSE.md).
