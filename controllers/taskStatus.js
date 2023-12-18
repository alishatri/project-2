const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getTasksStatus = async (req, res) => {
  try {
    const taskStatus = await prisma.tasksStatus.findMany();
    res.json(taskStatus);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Interval server error, ${error}` });
  }
};
const getTaskStatus = async (req, res) => {
  try {
    const taskStatusId = parseInt(req.params.id);

    const taskStatus = await prisma.tasksStatus.findUnique({
      where: {
        id: taskStatusId,
      },
    });
    res.json(taskStatus);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Interval server error, ${error}` });
  }
};

const setTaskStatus = async (req, res) => {
  try {
    const { status, userId, taskId } = req.body;

    const userExists = await prisma.user.findUnique({ where: { id: userId } });
    const taskExists = await prisma.task.findUnique({ where: { id: taskId } });

    const taskStatus = await prisma.tasksStatus.create({
      data: {
        status,
        taskId,
        userId,
      },
    });
    userExists || taskExists
      ? res.status(200).json(taskStatus)
      : res.status(404).json({ message: "User or Task does not exist." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Interval server error, ${error}` });
  }
};

const updateTaskStatus = async (req, res) => {
  try {
    const taskStatusId = parseInt(req.params.id);
    const { status, userId, taskId } = req.body;
    const taskStatus = await prisma.tasksStatus.update({
      where: {
        id: taskStatusId,
      },
      data: {
        status,
        taskId,
        userId,
      },
    });
    res.json(taskStatus);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Interval server error, ${error}` });
  }
};

module.exports = {
  getTasksStatus,
  getTaskStatus,
  setTaskStatus,
  updateTaskStatus,
};
