const express = require('express');
const router = express.Router();
const {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');
const { protect } = require('../middleware/auth');

router.route('/')
  .get(getTasks)
  .post(protect, createTask);

router.route('/:id')
  .get(getTaskById)
  .put(protect, updateTask)
  .delete(protect, deleteTask);

module.exports = router;