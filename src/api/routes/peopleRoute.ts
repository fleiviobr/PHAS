import express from "express";
import peopleController from "../controllers/peopleController";

const router = express.Router();

router.get("/", peopleController.findPeople);
router.get("/:id?", peopleController.findPersonByPk);

router.put("/update/:id?", peopleController.updatePerson);
router.get("/update", (req, res) => {
  res.send("Atualizar pessoa");
});

router.post("/create", peopleController.createPerson);
router.get("/create", (req, res) => {
  res.send("Cadastrar pessoa");
});

router.delete("/delete/:id?", peopleController.deletePerson);
router.get("/delete", (req, res) => {
  res.send("Deletar pessoa");
});

export default router;
