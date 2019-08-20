const express = require('express');
const app = express();
const Task = require('../models/task');

const common = require('../utils/common');


// ================================================
// 	LIST-TASKS (GET)
// ================================================
app.post('/tasks/findAll' ,(req, res) => {
    const {type, status, order} = req.body; 
    let filters = {};
    if(type !== undefined){  filters.type = type; }
    if(status !== undefined){  filters.status = status; }

    const orderFilter = order || 'asc'

    Task.find(filters)
    .sort({description: orderFilter})
    .exec( (err, tasksDB)=> {

        if(err) return common.commonError(res, 500, err);

        common.success(res, tasksDB)
    })
})

// ================================================
// 	GET TASK BY ID (GET)
// ================================================
app.get('/tasks/:id' , (req, res) => {
    let id = req.params.id;

    Task.findById(id).exec( (err, taskDB) => {

        if(err) return common.error(res, 500, err);

        if(!taskDB) return common.error(res, 400, 'ID not exists');

        common.success(res, taskDB);

    })
})

// ================================================
// 	CREATE TASK (POST)
// ================================================
app.post('/tasks' ,(req, res) => {
    let {description, notes, type, status } = req.body;

    let task = new Task({
        description,
        notes,
        type,
        status
    });

    task.save( (err, taskDB)=> {

        if(err) return common.error(res, 400, err);

        common.success(res, taskDB);
    })
})
// ================================================
// 	UPDATE TASK (PUT)
// ================================================
app.put('/tasks/:id' ,(req, res) => {
    let id = req.params.id;
    let {description, notes, status, type} = req.body;

    Task.findById(id, (err, taskDB) => {

        if(err) return common.error(res, 500, err);

        if(!taskDB) return common.error(res, 400, 'ID not exists');
        

        taskDB.description = description || taskDB.description;
        taskDB.notes = notes || taskDB.notes;
        taskDB.status = status || taskDB.status;
        taskDB.type = type || taskDB.type;

        taskDB.save( (err, taskSaved) => {

            if(err) return common.error(res, 500, err)

            common.success(res, taskSaved)
        })
    })
})

// ================================================
// 	DELETE TASK(DELETE)
// ================================================
app.delete('/tasks/:id' ,(req, res)=> {
    let id = req.params.id;

    Task.findByIdAndDelete(id, (err, taskDeleted) => {

        if(err) return common.error(res, 500, 'An error occurred when trying to delete the item ')

        if(!taskDeleted) return common.error(res, 404, 'There is not a task with the ID')

        common.success(res, taskDeleted)
    })
})


module.exports = app;