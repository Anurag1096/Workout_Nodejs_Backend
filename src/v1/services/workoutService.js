const db_Workout =require("../database/workout")

const getAllWorkout=()=>{
    const getAllWorkouts=db_Workout.getAllWorkouts();
    
    return getAllWorkouts
};
const getOneWorkout=(workoutId)=>{
    
    return
}
const  createNewWorkout=()=>{
    return
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