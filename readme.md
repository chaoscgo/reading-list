# READING LIST

![Screenshot of landing page](./wsl.localhost_Ubuntu_home_chaoscgo_code_ga_projects_reading-list_Landing-Page-screenshot.png)

## Description of Project

The project was to build a Node/Express/MongoDB application with full CRUD that manages or tracks things of personal interest to us.  Once completed, we were to present our application to the class.  This was the second project we completed in this course.

## Brief

The type of application to build was entirely up to us and we were encouraged to choose something of personal interest to us.  The following minimum requirements were to be met:

* The app must utilize EJS templates to render views to users.

* The app must use session based authentication.

* The app's files must be organized according to the conventions taught in our lectures.

* The app must have at least one data entity in addition to the User model and at least one entity must have a relationship with the User model.  

* The app must have full CRUD functionality.

* Authorization must be implemented in the app.  Guests who are not signed in must not be able to create, update or delete data or access functionality allowing those actions.

* The app must be deployed online.

## Timeframe & Working Team

We worked alone on this project.  We had one week to complete and present.

## Getting Started/Code Installation

The code for this project can be found in my public GitHub repository [here](https://github.com/chaoscgo/reading-list.git).

# How to use Reading List

The Reading List is an app designed for people who love to read (like me!).  It is a way to keep track of the books that you have read and those that you want to read in the future.

Anytime you hear of a good book, whether from a friend, in the news or even on social media, you can enter it into the Reading List for future reference.

You can sign up for a free account and start your list by entering the title and the author of the book (required). You also have the option of entering notes about the book as well as recording if you have finished reading this book and most importantly, whether you would recommend the book!

You are able to manage your Reading List by adding new books, editing information about books already in the list and deleting any books you no longer wish to keep in your list.

## Deployment Link



## Planning Materials

I started planning this project on Trello.  I created the User Stories first and then sketched out the ERD for my data entities.  We had the choice of using an embedded relationship or a referenced relationship.  I chose the embedded model.  I also sketched out wireframes of how I wanted certain pages to look.  My planning materials can be accessed [here](https://trello.com/b/6PRrMTHF/reading-list).

I also created todos on Trello to keep me on track with this project.  Then I started coding!

## Build/Code Process

First I created a node project and installed the dependencies I needed, including Express which allowed me to build the server.  I then built the auth controller to handle signing up and signing in to the app.  I created a dotenv file to hold my environmental variables, inclduing my MongoDB connection string and my Express Session secret.  I added these files to a git ignore file so they wouldn't be uploaded to gitHub.

I created a session storage in MongoDB so I wouldn't have to keep signing in to the app during production.

I built my user schema and my book schema.  I embedded the book schema into the user schema.

I then built a landing page using ejs and built the route in server.js.  I added route middleware to check if user is signed in and to pass the user view to all pages.

I built the books controller to handle the rest of the routes.  I then proceeded to build the pages and the routes for the rest of the pages (index, new, create, show, delete, edit and update).  I built a partial nav bar to be used on all pages.  I added the books data to the index page so that the user could see all of their books listed there.

I tested the application after each step and once I was sure everything was working correctly, I styled the app with CSS.

## Challenges

I find it challenging to organize all the moving parts of a full stack CRUD application.  The more I do it, the easier it becomes, but it's definitely not second nature yet!  

## Wins

I was happy that I was able to get all the routes in the right place and have everything work out without too much error handling.

I did implement session storage in MongoDB so that I wouldn't have to keep signing in each time I changed something.

## Key Learnings/Takeaways

I have learned that even though it seems like a project this big and encompassing is impossible, breaking it into small steps and testing each step along the way makes it much less stressful.  I do feel like it's starting to come together a little more.

I also am excited about being introduced to Trello.  I love staying organized, and Trello is very intuitive.

## Bugs

## Attributions

The background image was provided by [FreePic](https://www.freepik.com).

## Technologies used:

HTML, CSS, Javascript, Markdown, Express, Node, MongoDB, Connect-Mongo, Morgan, Bcrypt, EJS, Method-Override, Mongoose, Express-Session, dotenv.

## Future plans/improvements

* The ability to see a list of users
* The ability to see other users' reading lists
* The ability to have a community space where users can share notes on books.
