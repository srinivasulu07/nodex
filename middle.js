const express = require('express')
const app = express()

app.use(loggingMiddleware)

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/users', authorizeUsersAccess, (req, res) => {
  res.send('Users Page')
})

function loggingMiddleware(req, res, next) {
  console.log(`${new Date().toISOString()}: ${req.originalUrl}`)
  next()
}

function authorizeUsersAccess(req, res, next) {
  /*console.log('authorizeUsersAccess Middleware')
  next()*/
  if (req.query.admin === 'true') {
    next()
  } else {
    res.send('ERROR: You must be an admin')
  }
}

app.listen(3000, () => console.log('Server Started'))
