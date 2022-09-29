# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup
- [Install Docker](https://docs.docker.com/get-docker/)
  - Open Docker and verify it is ready by running the following commands in your terminal: 
   `docker -v` and `docker-compose -v`
- From the project root directory Run `docker-compose up`
- Once the Docker containers are compiled you will be prompted to go to http://localhost:3001
  - Click on the header: Anythink Marketplace
- In terminal run: `bin/rails db:migrate RAILS_ENV=development`
- Check backend Go to http://localhost:3000/api/ping
  - If you get pending migration error click on run migration
  - You should get successs message
- Create a new user on http://localhost:3001/register
