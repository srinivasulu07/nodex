const Joi = require('joi')
  const express = require('express')
  const app = express()

 app.use(express.json())

 const courses = [
       { id : 1, name : 'course1'},
       { id : 2, name : 'course2'},
       { id : 3, name : 'course3'}
 ]
  app.get('/', (req,res) => {inde

        res.send("Hello people");
  })

  app.get('/api/courses', (req,res) =>
  {
        res.send(courses)
  })

   app.get('/api/courses/:id', (req,res)=>
   {
        const course = courses.find(c => c.id === parseInt(req.params.id))
        if(!course) return res.status(404).send("The course is not available...")
        res.send(course)
   })

   //handling post request
    app.post('/api/courses', (req,res)=>
    {
           const { error } = validateCourse(req.body) //object disstructuring === result.error
           if(error) return res.status(400).send(error.details[0].message);

           const course = {
                 id : courses.length + 1,
                 name : req.body.name
           };
           courses.push(course);
           res.send(course);
    })

    //handling post request
    app.put("/api/courses/:id", (req,res) =>
    {
      //finding the course
      const course = courses.find(c => c.id === parseInt(req.params.id))
      if(!course) return res.status(404).send("The course is not available...")

      //validating the course
       const { error } = validateCourse(req.body) //object disstructuring === result.error
       if(error) return res.status(400).send(error.details[0].message);

        //updating the course
         course.name = req.body.name;
         res.send(course)
    })

//   //request parameters
//   app.get('/api/courses/:year/:month', (req,res) => {
//          res.send(req.params)
//   })

//   //query
//   app.get('/api/courses/',(req,res) => {
//          res.send(req.query)
// })

//validation function
function validateCourse(course)
{
      const schema = {
            name : Joi.string().min(3).required()
      };
       return Joi.validate(course, schema)
}

   //deleting a course

   app.delete('/api/courses/:id', (req,res)=>
   {
        //finding the course
      const course = courses.find(c => c.id === parseInt(req.params.id))
      if(!course) return res.status(404).send("The course is not available...")

      //delete
      const index = courses.indexOf(course)
      courses.splice(index,1)

      //returning response
      res.send(course)
   });

const port = process.env.port || 3000
  app.listen(port, ()=>
  {
        console.log(`Node server is running at ${port}....`)
  })
