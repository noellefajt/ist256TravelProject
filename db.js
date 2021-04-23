//copied from zybooks figure 11.8.7
//database connection
// const mongoose = require("mongoose");
// mongoose.set("useUnifiedTopology", true);
// //connection string
// mongoose.connect("mongodb+srv://travelProject256:Apple123@cluster0.5jzjt.mongodb.net/mydb?retryWrites=true&w=majority", 
//    { useNewUrlParser: true });
// module.exports = mongoose;

//copied from class video
const mongoose = require("mongoose");

//connection string
mongoose.connect("mongodb+srv://travelProject256:Apple123@cluster0.5jzjt.mongodb.net/mydb?retryWrites=true&w=majority", {
   useNewUrlParser: true
}).then(() =>{
   console.log("successfully connected to the atlas mongodb database");
}).catch(err => {
   console.log('could not connect to the db.', err);
   process.exit();
});
 
module.exports = mongoose;
