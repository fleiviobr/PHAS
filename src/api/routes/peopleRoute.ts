import express from "express";
import peopleController from "../controllers/peopleController";

const router = express.Router();

// router.get("/", peopleController.findPeople);
router.get("/:id?", peopleController.findPersonByPk);
router.delete("/:id?", peopleController.deletePerson);
router.put("/update/:id?", peopleController.updatePerson);


router.post("/", peopleController.createPerson);
router.get("/", (req, res) => {
  res.send("Pessoas");
});



export default router;
