const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getTasks = async (req, res) => {
  try {
    const tasks = prisma.task.findMany();
    res.json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Interval server error, ${error}` });
  }
};
const getTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = prisma.task.findUnique({
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

const setTask = async (req, res) => {
  try {
    const { userId, title, description, status } = req.body;
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const task = await prisma.task.create({
      data: {
        title,
        description,
        status,
        user: {
          connect: {
            id: userId,
          },
        },
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
    res.status(500).json({ message: `Interval server error, ${error}` });
  }
};

module.exports = {
  getTasks,
  getTask,
  setTask,
  updateTask,
  deleteTask,
};
