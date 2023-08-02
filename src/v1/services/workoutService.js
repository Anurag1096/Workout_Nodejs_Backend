const db_Workout =require("../database/workout")
const { v4: uuid } = require("uuid");
const getAllWorkout=()=>{
    const getAllWorkouts=db_Workout.getAllWorkouts();
    
    return getAllWorkouts
};
const getOneWorkout=(workoutId)=>{
    
    return
}
const  createNewWorkout=(newWorkout)=>{
    // console.log("newe",newWorkout)
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
      };
     
      const createdWorkout = db_Workout.createNewWorkout(workoutToInsert);
      return createdWorkout;    
}
const updateOneWorkout=()=>{
    return
}

const deleteOneWorkout=()=>{
    return
}

module.exports={
    getAllWorkout,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}