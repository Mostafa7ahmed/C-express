const express = require("express");
const app = express();
const port = 3005;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
const User = require("./Models/AddUserSchema");
app.use(express.static('public'))
app.set("view engine", "ejs");
// Auto ref
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

//End 
app.get("/", (req, res) => {

  User.find()
    .then(results => {

      res.render("index", { arrUsers: results });

    })
    .catch(err => { })


});

app.get("/user/edit.html", (req, res) => {

  res.render("user/edit");

});

app.get("/user/view.html", (req, res) => {

  res.render("user/view");

}); 

app.get("/user/add.html", (req, res) => {

  res.render("user/add");

});





// post Request
 
app.post("/user/add.html", (req, res) => {

  console.log(req.body);
  const user = new User(req.body);

   user.save()
    .then( result => {
      res.redirect("/");
    })
    .catch( err => {
      console.log(err); 
    });
});





mongoose
  .connect(
    "mongodb+srv://Mostafa:sBmKCieTDlV6zeSf@cluster0.xr7ev.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port} /`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
