import express from "express";
import userController from "../controllers/userController";

const router = express.Router();

router.get("/", userController.findUsers);
router.get("/:id?", userController.findUserByPk);

router.put("/update/:id?", userController.updateUser);
router.get("/update", (req, res) => {
  res.send("Atualizar user");
});

router.post("/create", userController.createUser);
router.get("/create", (req, res) => {
  res.send("Cadastrar user");
});

router.delete("/delete/:id?", userController.deleteUser);
router.get("/delete", (req, res) => {
  res.send("Deletar user");
});

export default router;
