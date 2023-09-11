import express from "express";
import activityController from "../controllers/activityController";

const router = express.Router();

router.get("/", activityController.findActivity);
router.get("/:id?", activityController.findActivityByPK);

router.put("/update/:id?", activityController.updateActivity);
router.get("/update", (req, res) => {
  res.send("Atualizar atividade");
});

router.post("/create", activityController.createActivity);
router.get("/create", (req, res) => {
  res.send("Cadastrar atividade");
});

router.delete("/delete/:id?", activityController.deleteActivity);
router.get("/delete", (req, res) => {
  res.send("Deletar atividade");
});

export default router;
