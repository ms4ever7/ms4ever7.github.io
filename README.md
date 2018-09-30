# Prodcut List Page
 
 The project is designed to show most popular shoes categories sorted by categories and colors.

## Link to Github Pages

https://ms4ever7.github.io/plp/

## Getting Started
 
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
 
### Prerequisites

* Node 8.x (preferable LTS) - [instruction](https://nodejs.org/en/download/)
* NPM 5.x - [instruction](https://www.npmjs.com/get-npm)
 
### Installing

1. For install all modules need to do (`npm install`) or (`yarn install`).
2. Than run (`yarn start`) and u're all set up.

## Tests/Lint/Commit
### Tests

1. Fot tests there are using Jest & Enzyme
2. To run tests u can run (`npm run test`)

### Lint 

1. By adding linter u'll provide readability for your code, so i decided to follow https://github.com/airbnb/javascript principles

### Commmit

I've decided to add precommit hooks, so u don't need to run any commands for lint, as while commiting, Husky will check your eslint


### Notes

1. When u click on the color, items that have appropriate colors should be showed
2. Don't get confused if u see dublicateed images on items, as a bi difficult to hardcode that json file with all data
3. By clicking on the category only shoes with this categories will be shown
4. If u choose more than 1 category and don't see your shoes, just scroll down, they will be there ;)

    