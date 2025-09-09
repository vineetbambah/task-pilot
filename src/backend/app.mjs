import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
const app = express();
const prisma = new PrismaClient();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3001;


app.post('/tp/post', async (req, res) => {
  try {
    const { title, status,description,priority,dueDate } = req.body;
    const post = await prisma.task.create({
      data: {
        title,
        status,
        description,
        priority,
        dueDate: new Date(dueDate), 
        createdAt: new Date(),
      },
    });
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating your task'});
  }
});
app.post('/tp/update/:id', async (req, res) => {
  try {
    const { title, status, description, priority, dueDate } = req.body;
    const updatedTask = await prisma.task.update({
      where: {
        id: req.params.id
      },
      data: {
        title,
        status,
        description,
        priority,
        dueDate: new Date(dueDate),
      },
    });
    res.status(200).json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the task' });
  }
});
app.get('/tp/posts', async (_req,res) => {
  try {
    const posts = await prisma.task.findMany();
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching tasks' });
  }
  
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
