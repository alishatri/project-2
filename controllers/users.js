const { PrismaClient } = require("@prisma/client");
const { updateLanguageServiceSourceFile } = require("typescript");

const prisma = new PrismaClient();

const getUsers = async (req, res) => {
  try {
    const user = await prisma.user.findMany();
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Interval server error, ${error}` });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Interval server error, ${error}` });
  }
};

const setUser = async (req, res) => {
  try {
    const { name, role } = req.body;
    const user = await prisma.user.create({
      data: {
        name: name,
        role: role,
      },
    });
    res.json(user);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `Interval server error , Error : ${error}` });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const { name } = req.body;
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        name,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error!");
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const user = await prisma.user.delete({
      where: {
        id: userId,
      },
    });
    user
      ? res.status(200).json({ message: `User with id ${userId} is deleted` })
      : res.status(404).json({ message: `User with id ${userId} not found` });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Interval server error, Error: ${error}`,
    });
  }
};

module.exports = { getUsers, getUser, setUser, updateUser, deleteUser };
