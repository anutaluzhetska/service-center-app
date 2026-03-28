const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Service-Center App')
})


app.use('/auth', require('./routes/auth'));
app.use('/client', require('./routes/client'));
app.use('/master', require('./routes/master'));
app.use('/admin', require('./routes/admin'));


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})