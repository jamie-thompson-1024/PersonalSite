
# React Todo App

**Hosted here: [todo.thompson-dev.me](https://todo.thompson-dev.me/)**

A basic todo app built in react with typescript. 
The todo functionality built in a model object and then with a react interface build around it.
The todo model unit tested with jest

## Features

- Data is saved to localstorage when ever a change is made
- Localstorage can be wiped
- can create, view, modify, delete Items
- Items can be searched by name and tags
- Items can be filtered by state (complete / incomplete)
- Items can be sorted by state (complete / incomplete), creation time, last modification time, and name
- Log any changes made
- Allow undo and redo of changes

## Initial Wireframes

![Wireframe](/Assets/projects/images/todoapp-wireframe.png "todo wireframe")

## React Component structure

![React Component Structure](/Assets/projects/images/todoapp-reactdiagram.png "react diagram")

## Model class diagram

![Model Class Diagram](/Assets/projects/images/todoapp-classdiagram.png "class diagram")

## Model test cases

### Item:

- Constructor(): is successful with intact data
- toJson() -> fromJson():  is successful with intact data
- setName(): rejects invalid input accepts valid
- setDesc(): rejects invalid input accepts valid
- setState(): rejects invalid input accepts valid
- addTag(): rejects invalid input accepts valid
- removeTag(): rejects invalid input accepts valid

### Settings:

- setTheme(): sets theme and creates themeChangeEvent
- getThemes(): returns an array of available themes that can all be used with setTheme()
- toJson() -> fromJson(): is successful with intact data

### Change:

- Constructor(): is successful with intact data
- toJson() -> fromJson(): is successful with intact data

### ItemCollection:

- Constructor(): is successful with intact data
- toJson() -> fromJson():  is successful with intact data
- setName(): rejects invalid input accepts valid and creates changeEvent
- setDesc(): rejects invalid input accepts valid and creates changeEvent
- setState(): rejects invalid input accepts valid and creates changeEvent
- addTag(): rejects invalid input accepts valid and creates changeEvent
- removeTag(): rejects invalid input accepts valid and creates changeEvent
- getItem(): returns undefined on incorrect ID otherwise returns item
- getItems(): returns items in order defined by order param, and only items matching filter
- createID(): only returns unique ids
- selectItem(): sets selected id and creates selectEvent
- removeItem(): removes correct item or selected if not given, rejects invalid IDs
- createItem(): creates item with correct data rejects invalid data with array of ValidationMessage enums for each param
- undo(): correctly undos given change and removes from changes adding to undone Changes
- redo(): correctly redos given change and removes from undunChanges if exists adding to changes

### Storage:

- load(): successfully loads data from localstorage and creates loadEvent
- save(): successfully saves data to localstorage and creates saveEvent
- wipe(): clears localstorage data and calls load event

