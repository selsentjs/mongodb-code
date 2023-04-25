require('dotenv').config()
const express = require('express');
const studentRouter = require('./routes/studentRouter');
const teacherRouter = require('./routes/teacherRouter');
const marksRouter = require('./routes/marksRouter');
require('./database/db')

const app = express();

const port = 3000;

app.use(express.json())
app.use('/api/student',studentRouter);
app.use('/api/teacher', teacherRouter);
app.use('/api/mark', marksRouter);


app.get('/', (req,res) => {
    res.send('welcome to school')
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})