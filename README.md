## Getting started

The project is broken down into a client and server folder.

# How To Setup Database

This Application requires mongodb database server. Please follow the following steps,

1. You can Install and run mongodb server locally
2. Create a folder C:\data\db if you are running mongodb locally

3. To run this application properly, you need to set two environment variables (jwtPrivateKey and mongodb).

For windows, you can set the variables in the command prompt as follows

If you are running mongodb on localhost, set mongodb variable to localhost.
set mongodb=localhost

An example of setting jwtPrivateKey is given below
set jwtPrivateKey=myprivatekey

# How To Run Server

You need npm to install node packages

Run the following commands to install packages and run the server

1. npm install
2. npm run dev

Following two api endpoints are available:

localhost:3001/api/register

localhost:3001/api/login

localhost:3001/api/login/me

