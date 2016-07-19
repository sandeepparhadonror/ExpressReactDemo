# ExpressReactDemo
Node Express.js and React Demo

How to Start the application
1 . Get clone from GitHub :  https://github.com/sandeepparhadonror/ExpressReactDemo
2 . After the please install the Node and npm
3 . Go to the root Dir of the project the performed the 'npm install' command
4 . Start the Node server with Command : node app.js


How to depoly the Node.js and Express.js & React.js App on Heroku
1 . First set the Heroku in your machine with HEROKU TOOLBELT.
2 . Do heroku login
3 . heroku create  YouAppName
4 . git push heroku master
5 . DEFINING A SPECIFIC RUN COMMAND : By default, Heroku will look into our package.json file under
    the scripts section and grab start
    eg :
     "scripts": {
       "start": "node app.js"
      },
6 . check your application on your browser by tying 'heroku open' from console
