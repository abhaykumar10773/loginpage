import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';


const app = express();
const prisma = new PrismaClient();


app.use(express.json());
app.use(cors({
   origin: 'http://localhost:5173',
   credentials:true 
  })
); // Adjust the origin as needed

app.post('/login', async (req, res) => {
  const { id, password } = req.body;
  if(!id || !password){
      return res.status(404,'Missing id or password');
  }
  try {
      const user = await prisma.user.findUnique({ where: { id } });
       if(!user){
          return res.status(404).json({ message: 'User not found' }); 
      }
      // Check if user exists and password matches
      if (user && user.password === password) {
      res.status(200).json({ message: 'Login successful', user });
      } else {
      res.status(401).json({ message: 'Invalid email or password' });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
  });

app.get('/', (req, res) => {
  res.send('Hello World!');
});


const PORT = 5000;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});