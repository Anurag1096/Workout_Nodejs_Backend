
const {workout} =require("./workout.schema");

module.exports={
    addWorkoutValidation:async (req,res,next)=>{
        let value;
        try {
            value=await workout.validate(req.body);
            next()
        }catch(error){
            console.log(`Error:${error}` )
          res.json({
            status:2,
            message:"wrong input",
          })
        }
    }
}
