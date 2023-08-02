const DB = require("./db.json")
const fs = require("fs")
const getAllWorkouts=()=>{
    return DB.workouts
}
const createNewWorkout=async (newWorkout)=>{
    const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
  if (isAlreadyAdded) {
    return;
  }
  DB.workouts.push(newWorkout);
  console.log(DB)
//   This can be a util function
   fs.writeFileSync("./src/v1/database/db.json", JSON.stringify(DB, null, 2), {
    encoding: "utf-8",
  });
  return newWorkout;
}

module.exports={getAllWorkouts,createNewWorkout}