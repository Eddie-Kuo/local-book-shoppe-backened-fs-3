# Template for Backend Express

The Golden Rule:
🦸 🦸‍♂️ Stop starting and start finishing. 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Scripts

| command                | description                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------- |
| `npm start`            | starts the app - should only be used in production as changes will not get reloaded |
| `npm run start:watch`  | runs the app using `nodemon` which watches for changes and reloads the app          |
| `npm test`             | runs the tests once                                                                 |
| `npm run test:watch`   | continually watches and runs the tests when files are updated                       |
| `npm run setup-db`     | sets up the database locally                                                        |
| `npm run setup-heroku` | sets up the database on heroku                                                      |

1. Setup.sql - get tables set up
   - many to many relationship so there needs to be an id to link both tables of data
   - Author table - authors can have written many books
     R = required data to have
     {
     name: <name RS>,
     dob: <date-of-birth D>,
     pob: <place-of-birth S>
     }
   - Books table - books can have many authors contributing to the book
     {
     title: <title of book RS>,
     released: <4-digit year RN>
     }
2. npm run setup-db to link with beekeeper
3. Test 1 /books route to return list of books
4. Model
5. Controller
6. App.js
7. Repeat for all routes
8. Total 4 routes

psuedo code:
setup.sql -
drop table if exists
create table.. setting up table columns
insert into.. column names with values in the same order

Tests:

- need pool, setup, request, app, hardcoded data?? try to implement post and send this time

Module:

- need pool
- create a class + constructor
- SQL joins

Controller:

- need router and class
- set the route and http verb to relay data in app
