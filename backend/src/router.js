const express = require('express');
const { listTasks, createTask, deleteTask, updateTask } = require('./controllers/tasksController');
const validateBody = require('./middlewares/tasksMiddleware');
const schemaTasks = require('./schemas/schemaTasks');
const schemaUpdateTasks = require('./schemas/schemaUpdateTasks');

const router = express.Router();

router.get('/tasks', listTasks);
router.post('/tasks', validateBody(schemaTasks),createTask);
router.delete('/tasks/:id', deleteTask);
router.put('/tasks/:id', validateBody(schemaUpdateTasks), updateTask);

module.exports = router;