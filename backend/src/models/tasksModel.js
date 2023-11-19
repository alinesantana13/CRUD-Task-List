const knex = require('./connection');

const listTasks = async (request, response) =>{
  try {
    const tasks = await knex('tasks').select('*');

    return tasks;
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

const createTask = async (task) =>{
  const {title} = task;

  const dateUTC = new Date(Date.now()).toUTCString();

  const createdTask = await knex('tasks').insert({title, status: 'Pendente', created_at: dateUTC}).returning('*');

  return createdTask;
};

const deleteTask = async (id) =>{
  const removeTask = await knex('tasks').del().where({id});

  return removeTask;
};

const updateTask = async (id, task) =>{
  const {title, status} = task;

  const updateTaskId = await knex('tasks').update({title, status}).where({id});

  return updateTaskId;
};

module.exports = {
  listTasks,
  createTask,
  deleteTask,
  updateTask
};