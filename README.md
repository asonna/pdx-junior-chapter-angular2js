# Portland Junior Chapter Site:

This application is purpose to be used to run an engineering children club. We expect two types of members: Chaperones or teachers and collegiates or students.
This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.

## Requirements / user stories
1- *List:* As a user, I'd like to visit a page to see a list of all team or club members.
2- *details of single member:* As a user, I'd like to click a team or club member's entry in the list to visit their profile page, which should include more details about them.
3- *About page:* As a user, I'd like the option to visit an "About" page that explains what the club is, and what they do.
4- *Data hosted in Firebase db:* As a user, I'd like all data persisted in a database, so it's always there when I need it.
5- *Filtering functionality:* As a user, I'd like to filter the list of users by their particular role in the group, or some other information/category.
6- *Admin adds:* As an administrator, I want to add new users to the club. (User authentication is not required).
7- *Admin updates:* As an administrator, I want to edit user profiles, in case I make a mistake, or need to update their details.
8- *Admin deletes:* As an administrator, need the option to delete a user, in case they leave the club or team.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <https://github.com/asonna/question-answers-js.git>` this repository
* `cd pdx-junior-chapter-angular2js`
* `npm install`
* `bower install`
* Create src/app/api-keys.ts file to place in our following firebase credential replacing xxxx with true credential from your firebase.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
