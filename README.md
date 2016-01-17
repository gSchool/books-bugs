## Set Up

```
fork/clone
npm install
nodemon
```

## Description


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
