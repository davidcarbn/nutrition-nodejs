# nutrition-nodejs - the nutrition tracking app
This project started as a one-man / one-week hackathon project to dive deeper into React.
The project has simple jwt authentication **(!!self implemented!!)** and may shouldn't be used in production at this stage.
## Tech Stack
- React
- Node JS
- MongoDB Atlas
## Setup
Clone the repo and do the following steps:
- create a mongodb atlas database
- create a heroku app
- setup environemnt variables: MONGO_URI= ... JWT_SECRET= ... (for the dev environemnt you can use dotEnv to provide the environemnt variables)
- At the moment you need to call **POST https://<yourdomain>/api/v1/user** with **email** and **password** in the body to create a user
- now you can log in to your nutrition tracking app.

