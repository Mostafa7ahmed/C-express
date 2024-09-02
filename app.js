const express = require('express')
const app = express()
const port = 3005
const mongoose = require('mongoose');
app.use(express.urlencoded({ extended: true }));
const MyData = require("./Models/myDataSchema")

app.get('/', (req, res) => {
    res.sendFile("./Views/index.html", {root: __dirname});
})



app.get("/send.html", (req, res) => {
    res.send("<h1>تم الارسال </h1>");
})

mongoose.connect("mongodb+srv://Mostafa:sBmKCieTDlV6zeSf@cluster0.xr7ev.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    app.listen(port, () => {
        console.log(`http://localhost:${port} /`)
      })
      
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });



app.post("/", (req, res) => {
    const mydata = new MyData(req.body);
     console.log(req.body )
    mydata .save()
    .then( () => {
      res.redirect("/send.html");
    })
    .catch( err => {
      console.log(err);
    });

  })
