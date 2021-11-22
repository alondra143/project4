const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://alondra143:nikkibby1@cluster0.ii8wy.mongodb.net/project2?retryWrites=true&w=majority", // < replace with your database name!
)

const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on('error', function(err){
  console.log(`Mongodb error: ${err}`)
})