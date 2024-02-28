import  Express  from 'express';  
const app = Express();

let students = [
  { id: 1, name: 'Aman', age: 22 },
  { id: 2, name: 'Aditya', age: 21 },
  { id: 3, name: 'Anurag', age: 22 }
]

app.use(Express.json())


// Get all students
app.get('/students', (req, res) => {
    res.json(students)
});
  
  // Getting a single student by ID
app.get('/students/:id', (req, res) => {
    const student = students.find(student => student.id === parseInt(req.params.id))
    if (!student) return res.send('Student not found')
    res.json(student)
})
  
  // Adding a new student
app.post('/students', (req, res) => {
    const student = {
      id: students.length + 1,
      name: req.body.name,
      age: req.body.age
    }
    students.push(student)
    res.json(student)
})

app.get('/students', (req, res) => {
    res.json(students)
});
  
  // Updating a student by ID
app.put('/students/:id', (req, res) => {
    const student = students.find(student => student.id === parseInt(req.params.id))
    if (!student) return res.send('Student not found')
  
    student.name = req.body.name
    student.age = req.body.age
    res.json(student)
})
app.get('/students', (req, res) => {
    res.json(students)
});


  // Deleting a student by ID
app.delete('/students/:id', (req, res) => {
    const student = students.find(student => student.id === parseInt(req.params.id))
    if (!student) return res.send('Student not found')
  
    students = students.filter(student => student.id !== parseInt(req.params.id))
  
    res.json(student)
});
app.get('/students', (req, res) => {
    res.json(students)
});

app.listen(3000,()=>{
    console.log("Server is running on the port", 3000)
})