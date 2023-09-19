import express from "express";
import userController from "../controllers/userController";
const router = express.Router();

// router.get("/", userController.findUsers);

router.patch("/:id?", userController.updateUser);
router.delete("/:id?", userController.deleteUser);
router.get("/:id?", userController.findUserByPk);

router.post("/", userController.createUser);
router.get("/create", (req, res) => {
  res.send("Usuários");
});

export default router;
