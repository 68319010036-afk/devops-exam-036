const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>DevOps Exam Submission</h1><p>Student ID: 036</p><p>Status: CI/CD Pipeline Running Successfully!</p>');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});