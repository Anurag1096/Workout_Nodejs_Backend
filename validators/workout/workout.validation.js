
const {workout} =require("./workout.schema");

module.exports={
    addWorkoutValidation:async (req,res,next)=>{
        let value;
        try {
            value=await workout.validate(req.body);
            next()
        }catch(error){
            console.log("there is an error")
          res.json({
            status:0,
            message:"wrong input",
          })
        }
    }
}