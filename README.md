# Social-Media-API
  
  ![badge](https://img.shields.io/badge/license-MIT-brightgreen)



  ## Description
  
  - What was your motivation?

    MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data.

    This challenge is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This uses Express.js for routing, a MongoDB database, and the Mongoose ODM as well as the [Express.js](https://www.npmjs.com/package/express) and [Mongoose](https://www.npmjs.com/package/mongoose) packages.

  - What did you learn?
    
    Since most of the foundation of social media applications is data, I learned how to understand, build, and structure the API for it.
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  run "npm i" to download required packages which include express and mongoose.
  
  ## Usage
  run "node server.js".  Open Insomnia for paths:

  User

  Get all users: GET /api/users

  Create a user: POST /api/users

  Get user by ID: GET /api/users/:id

  Update a user: PUT /api/users/:id

  Delete a user: DELETE /api/users/:id

  Add a friend: PUT /api/users/:userId/friends/:friendId

  Delete a friend: DELETE /api/users/:userId/friends/:friendId

  
  Thought

  Get all thoughts: GET /api/thoughts

  Create a thought: POST /api/thoughts

  Get thought by ID: GET /api/thoughts/:id

  Update a thought: PUT /api/thoughts/:id

  Delete a thought: DELETE /api/thoughts/:id
  
  
  Reaction

  Add a reaction: PUT /api/thoughts/:id/reactions
  Delete a reaction: DELETE /api/thoughts/:id/reactions

  
  ## License

  This application is covered by the MIT license. 
  
  License Link: <a href="https://choosealicense.com/licenses/MIT/">MIT</a>
     
  
  ## How to Contribute
  free to contribute

  ## Tests
  NA

  ## Any Questions?
  -Please contact me through:
  GitHub:  <a href="https://github.com/bgrinthal">bgrinthal</a><br>
  Email:   <a href="mailto:bgrinthal@gmail.com">bgrinthal@gmail.com</a>
