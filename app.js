const express = require("express");
const v1router=require("./src/v1/routes/workoutRoutes")
const app = express();
const bodyParser=require("body-parser")
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use("/api/v1/",v1router)

app.listen(port,()=>{
    console.log(`The app is listening on the ${port}`)
});
