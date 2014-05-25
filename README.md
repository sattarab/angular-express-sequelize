#Angular Express Sequelize Seed

This seed is a great starting place for people using Angular on the front end, NodeJs + Express on the backend with ability to use socketio and using sequelize as an ORM.
A model and service for user has been used just for sake of demonstration in this seed. 

##Directory Structure

```
├── README.md
├── app.js
├── bower.json
├── client
│   ├── components
│   ├── images
│   ├── javascripts
│   │   ├── app.js
│   │   ├── controllers
│   │   │   └── controllers.js
│   │   ├── directives
│   │   │   └── directives.js
│   │   ├── filters
│   │   │   └── filters.js
│   │   └── services
│   │       ├── services.js
│   │       └── socket.js
│   ├── stylesheets
│   │   └── style.css
│   └── views
│       ├── index.ejs
│       └── partials
│           └── home.html
├── package.json
├── routes.js
├── server
│   ├── models
│   │   ├── index.js
│   │   └── user.js
│   ├── routes
│   │   ├── index.js
│   │   ├── socket.js
│   │   └── user.js
│   └── services
│       ├── index.js
│       └── userService.js
└── test
    └── userTestSuite.js
```

###Installation Steps

1. Install NodeJs
2. Install MySQL (by default the application assumes there is a database named "app" and mysql has a user "root" having password "password". This default behaviour could be change in server->models->index.js file).
3. To run the application you have to type npm start. By default it connects on port 8000 if there is no port defined in the config file.
4. To run the mocha unit tests you have to type npm start in one terminal window and npm test in the other terminal window.

##Tests

To run the mocha tests defined under the test folder type npm test. The test assumes that there is an instance of app running in a different terminal on the same computer which the test sends the request to.(check out point 4 for details)
##Example App

Check out an example app : http://angular-express-chatroom.herokuapp.com

##License

MIT
