const tasksModel = require('../models/tasksModel');

const listTasks = async (request, response) =>{
  try {
    const tasks = await tasksModel.listTasks();

    return response.status(200).json(tasks);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

const createTask = async (request, response) =>{
  try {
    const createdTask = await tasksModel.createTask(request.body);

    return response.status(201).json({id: createdTask[0].id});
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

const deleteTask = async (request, response) =>{
  const {id} = request.params;
  try {
    const removeTask = await tasksModel.deleteTask(id);

    if (!removeTask){
      return response.status(400).json({message: 'Task does not exist'});
    }

    return response.status(204).json();
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

const updateTask = async (request, response) =>{
  const {id} = request.params;

  const task = request.body;

  try {
    await tasksModel.updateTask(id, task);

    return response.status(204).json();
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

module.exports = {
  listTasks,
  createTask,
  deleteTask,
  updateTask
};