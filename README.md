## Set Up

```
fork/clone
npm install
nodemon
```

## How to Submit

Afer all 3 branches have working CRUD that uses RESTful routes and knex migrations, __submit a PR__ to this repo.

## Description
Welcome to __Books Bugs__!

This app contains 3 branches, `bug-1`, `bug-2`, `bug-3`. Your mission is to `git checkout` each branch, one at a time, and fix the bugs so that each branch has the app working with full CRUD. As you fix each bug, `git add, commit` your work
(use concise, clear commit messages that communicate what you fixed).

The stories below can be used as a guideline for how a user should be able to move through the app.

__The app should use RESTful routes and knex migrations to set up your schema.__

## Stories

__#1__

```
When I click 'Add a Book'
Then I should see a form to add a new book
```

__#2__

```
When I submit the form for a new book
Then I should return to my list of all books
And I should see my new book listed with all books
```

__#3__

```
When I click on the title of a book
Then I should be taken to a 'show' page
And on that page I should see all of the information for that book
And I should see a link to 'Edit' the book
And I should see a link to 'Delete' the book
```
__#4__

```
When I click 'Edit'
Then I should see a form
And the form should be pre-filled with the current book information
When I change information for that book
And I click "Update"
Then I should see my updated book
```
__#5__

```
When I click 'Delete'
Then I should see a list of all books
And the deleted book should not be listed
```
