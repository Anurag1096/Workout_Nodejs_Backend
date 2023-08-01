const DB = require("./db.json")

const getAllWorkouts=()=>{
    return DB.workouts
}
const createNewWorkout=(newWorkout)=>{
    const isAlreadyAdded =
    DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
  if (isAlreadyAdded) {
    return;
  }
  DB.workouts.push(newWorkout);
//   This can be a util function
  fs.writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2), {
    encoding: "utf-8",
  });
  return newWorkout;
}

module.exports={getAllWorkouts}