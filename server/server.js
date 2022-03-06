require("dotenv").config();
require("./DB/Zoo-DB");
require("./models/animals-model")
require("./models/workers-model")
require("./models/users-model")

const AnimalRouter = require("./routes/animals-router")
const WorkerRouter = require("./routes/workers-router")
const UserRouter = require("./routes/users-router")
const express = require("express");
const cors = require("cors");
const passport = require("passport");
require("./config/user-passport")(passport);


const PORT = process.env.PORT ;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended:true }))
app.use(passport.initialize())
app.use(cors());

app.use("/animals" , passport.authenticate("jwt" , {session:false}) , AnimalRouter);
app.use("/workers", passport.authenticate("jwt" , {session:false}) , WorkerRouter);
app.use("/users" , UserRouter);




app.listen(PORT , () => {
    console.log(`server is on air at port:${PORT}`);
});
