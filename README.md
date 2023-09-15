# Note app

## What is this?

“Note app” is an application similar to Microsoft sticky notes. The user can create a new note, edit a published note, archived a completed note, unarchived a note and fitler the notes.

It is a project based on React + Vite language and it used the concepts of DOM, fetch, styled components, Modal.

![homepage](https://github.com/Angelinis/Frontend/blob/main/src/assets/Mynotes_1.JPG?raw=yes)

![details1](https://github.com/Angelinis/Frontend/blob/main/src/assets/Mynotes_2.JPG?raw=yes)

![details2](https://github.com/Angelinis/Frontend/blob/main/src/assets/Mynotes_3.JPG?raw=yes)

## React + Vite

This webpage was coded using React + Vite. The docummentation can be seen [here][vite].

[vite]: https://vitejs.dev/guide/

## Libraries

This is the list of libraries installed during the development:

- @emotion/styled: For creating components with style and css
- @emotion/react: For creating components with style and css
- react-icons: For obtaining icons without the need of downloading
- formik: For making easier the creation of forms
- react-router-dom: For the creation of routes in the webpage

## Getting Started

After you have cloned this repo, run this setup script to set up your machine
with the necessary dependencies to run and test this app:

    npm install

Also run the next script in the terminal for running the webpage:

    npm run dev

> There is an easier way to do both commands at the same time. If you would like to run the webpage from the beginning and install all the dependencies, you can run the next command:

    npm run install-and-start

Choose the best command for you!

## Configuration

The Frontend is configured to work with a deployed API host in render. Please, click on the API link to start the service before doing any test with the Frontend!!!

> "[https://backend-e9fx.onrender.com/][api]"

[api]: https://backend-e9fx.onrender.com/

The BASEURI can be changed depending on the user. If the user wants to run the backend locally, it can be changed to a local port - example: "localhost:3000". To change the BASEURI, please go to the file

    .env

Later, change the VITE_DOMAIN to your preference (locally or through another API)


