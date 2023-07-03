## 📃 Scripts Overview

The following scripts are available in the `package.json`:

- `dev`: Starts the development server with colorized output
- `build`: Builds the app for production
- `start`: Starts the production server
- `lint`: Lints the code using ESLint
- `lint:fix`: Automatically fixes linting errors
- `prettier`: Checks the code for proper formatting
- `prettier:fix`: Automatically fixes formatting issues
- `analyze`: Analyzes the bundle sizes for Client, Server and Edge environments
- `postinstall`: Applies patches to external dependencies
- `preinstall`: Ensures the project is installed with Yarn

## 🎨 Styling and Design System

We Tailwind CSS for styling and CVA for creating a powerful, easy-to-use design system. If you want
to learn more about the setup, check out this fantastic video by Vercel:

[![Styling and Design System](https://img.youtube.com/vi/T-Zv73yZ_QI/0.jpg)](https://www.youtube.com/watch?v=T-Zv73yZ_QI&ab_channel=Vercel)

We are using CVA to create a design system that is easy to use and maintain. It allows us to create a set of reusable
components that are easy to customise based on provided props. It also provides a set of utility functions that can be
used to create custom components. More information available at [CVA docs](https://cva.style/docs).

## 💻 Environment Variables

[T3 Env](https://env.t3.gg/) is a library that provides environmental variables checking at build time, type validation
and transforming. It ensures that your application is using the correct environment variables and their values are of
the expected type. You’ll never again struggle with runtime errors caused by incorrect environment variable usage.

Config file is located at `env.mjs`. Simply set your client and server variables and import `env` from any file in your
project.
