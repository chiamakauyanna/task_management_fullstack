import express from 'express';
import cors from 'cors'
import Taskroute from './routes/tasks.js';
const PORT = 5000;
const app = express()

app.use(cors())
app.use(express.json())
app.use('/tasks', Taskroute)


app.listen(PORT, () => console.log('Server running...'))