//copied from zybooks figure 11.8.7
//database connection
const mongoose = require("mongoose");
mongoose.set("useUnifiedTopology", true);
//connection string
mongoose.connect("mongodb+srv://travelProject256:Apple123@cluster0.5jzjt.mongodb.net/mydb?retryWrites=true&w=majority", 
   { useNewUrlParser: true });
module.exports = mongoose;