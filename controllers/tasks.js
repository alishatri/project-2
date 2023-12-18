const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const setTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = await prisma.task.create({
      data: {
        title,
        description,
      },
    });
    res.json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Interval server error, ${error}` });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Interval server error, ${error}` });
  }
};
const getTask = async (req, res) => {
  try {
    const taskId = parseInt(req.params.id);
    const task = await prisma.task.findUnique({
      where: {
        id: taskId,
      },
    });
    res.json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Interval server error, ${error}` });
  }
};

const updateTask = async (req, res) => {
  try {
    const taskId = parseInt(req.params.id);
    const { title, description, assignedUsers } = req.body;
    const task = await prisma.task.update({
      where: {
        id: taskId,
      },
      data: {
        title,
        description,
        assignedUsers,
      },
    });
    res.json(task);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Interval server error, ${error}` });
  }
};
const deleteTask = async (req, res) => {
  try {
    const taskId = parseInt(req.params.id);
    const task = await prisma.task.delete({
      where: {
        id: taskId,
      },
    });
    task
      ? res.status(200).json({ message: `Task with id ${taskId} is deleted` })
      : res.status(404).json({ message: `Task with id ${taskId} not found` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Interval server error, /n${error}` });
  }
};

module.exports = {
  getTasks,
  getTask,
  setTask,
  updateTask,
  deleteTask,
};
