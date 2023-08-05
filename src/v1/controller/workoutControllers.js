const WorkoutService=require("../services/workoutService")
// Get
const getAllWorkout= (req,res)=>{
    const allworkout= WorkoutService.getAllWorkout()
    res.send({status:"201",data:allworkout});
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
  
    try{
        let newWorkout={
            name:req.body.name,
            mode:req.body.mode,
            exercises:req.body.exercises,
            equipment:req.body.equipment,
        }
        const createWorkout= WorkoutService.createNewWorkout(newWorkout);
        res.status(201).send({status:"ok created",message:"created workout succesfully",data:createWorkout});
    }catch(error){
        res.status(200).send({status:"failed",error:"cannot create new workout" })
    }
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