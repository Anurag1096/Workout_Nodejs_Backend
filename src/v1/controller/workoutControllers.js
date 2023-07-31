const WorkoutService=require("../services/workoutService")
// Get
const getAllWorkout= (req,res)=>{
    const allworkout= WorkoutService.getAllWorkout()
    res.send({status:"200",data:allworkout});
};
// Get
const getOneWorkout=(req,res)=>{
    const id = req.params.workoutId
    console.log(id)
    const workout=WorkoutService.getOneWorkout(id);
    res.send({status:"200",data:workout});
}
// post
const createNewWorkout=(req,res)=>{
    const createWorkout=WorkoutService.createNewWorkout();
    res.send(`create a single workout for the user`);
}
// patch
const updateOneWorkout=(req,res)=>{
    const update=WorkoutService.updateOneWorkout();
    res.send(`To edit the desired resourse`);
}
// delete
const deleteOneWorkout=(req,res)=>{
    WorkoutService.deleteOneWorkout()
    res.send(`To delete a pirticular resourse`);
}


module.exports={
    getAllWorkout,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}