const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getUsers = async (req, res) => {
  try {
    const user = await prisma.user.findMany({
      include: {
        tasks: true,
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
        name,
        role,
      },
    });
    res.json(user);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `Interval server error. Error : ${error}` });
  }
};

module.exports = { getUsers, setUser };
