const express = require('express')
const app = express()
const port = 3005
const mongoose = require('mongoose');

app.get('/', (req, res) => {
    res.sendFile("./Views/index.html", {root: __dirname});
})



mongoose.connect("mongodb+srv://Mostafa:sBmKCieTDlV6zeSf@cluster0.xr7ev.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    app.listen(port, () => {
        console.log(`http://localhost:${port}/`)
      })
      
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });
