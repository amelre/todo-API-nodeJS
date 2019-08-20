# NodeJS API Example To-do List

This is an example of an **API** in Express NodeJS with MongoDB. We use this API for the react and angular app.


## Routes

### LIST-TASKS   (POST)  
/tasks/findAll

*body* 
 - type 
 - status 
 - order

### GET TASK BY ID (GET)
 /tasks/:id

### CREATE TASK (POST) 
/tasks

*body* 
- description
- notes
- type
- status 

### UPDATE TASK (PUT) 
/tasks/:id

### DELETE TASK(DELETE) 
/tasks/:id


## Getting Started

1.  Clone repository
2.  Run command
```bash
npm install 
```
3.  start MongoDB
4.  Run Command
```bash
nodemon server/server
```
