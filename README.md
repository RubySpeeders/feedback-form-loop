# Project Name

Feedback Form

## Description

I built a feedback form on a single page application using a hash router. There are four pages of questions - feeling, understanding, support, and comments. Before submitting, users can review the information they put in and go back and change their answers. The first three pages require an input, but the comments are optional. After submitting, the answers are saved in a database.

## Prerequisites

Node.js
React
Redux
Postgresql
Express
Axios
pg
React-Redux
Sweetalert
Material-UI

## Installation

1. Create a database named `prime_feedback`.
2. The queries in the `data.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. I recommend using Postico to run those queries as that was used to create the queries.
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

1. User begins at a Start page and clicks the Start button to begin the survey
2. First page asks the user to rate how they are feeling on a scale of 1 to 5. After choosing a number, click next to go to next page. This step is required.
3. Second page asks the user to rate their understanding on a scale of 1 to 5. After choosing a number, click next to go to next page. This step is required.
4. Third page asks the user to rate the support they have received on a scale of 1 to 5. After choosing a number, click next to go to next page. This step is required.
5. Fourth page asks the user for any additional comments. Click next to go to review page. This step is optional.
6. The last page lists the information the user inputted. If desired, user can go back and edit their information by clicking the back button.
7. After clicking the submit button, user is taken to a successful page and can click the Back to Start button to start the survey again.

## Built With

Node.js
React
Redux
Postgresql
Express
Axios
pg
React-Redux
Sweetalert
Material-UI

## Acknowledgement

Thank you to Lara Komosa for helping me with server and router side, and Brad Loudis for being a great partner to sit beside!
