const express=require("express");
const router= express.Router();
const WorkoutController=require("../controller/workoutControllers");
const {adWorkoutValidation, addWorkoutValidation}=require("../../../validators/workout/workout.validation")
// for multiple user
router.get("/",WorkoutController.getAllWorkout);
// for single user
router.get("/:workoutId",WorkoutController.getOneWorkout);
router.post("/",addWorkoutValidation,WorkoutController.createNewWorkout);
// api to edit the user profile
router.patch("/:workoutId",WorkoutController.updateOneWorkout)
// to delete the resourse
router.delete("/:workoutId",WorkoutController.deleteOneWorkout);

module.exports = router ;