import { Request, Response } from "express";
import User from "../models/user";

class UserController {
  async findUsers(req: Request, res: Response) {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar usuários." });
    }
  }
  async findUserByPk(req: Request, res: Response) {
    const userId = Number(req.params.id);

    try {
      const user = await User.findByPk(userId);
      if (!user) {
        res.status(404).json({ error: "Usuário não encontrado." });
      } else {
        res.status(200).json(user);
      }
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar usuário." });
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar usuário." });
    }
  }

  async updateUser(req: Request, res: Response) {
    const idUser = Number(req.params.id);

    try {
      const [updatedRowsCount] = await User.update(req.body, {
        where: { idUser: idUser },
      });

      if (updatedRowsCount === 0) {
        res.status(404).json({ error: "Usuário não encontrado." });
      } else {
        res.status(200).json({ message: "Usuário atualizado com sucesso." });
      }
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar usuário." });
    }
  }

  async deleteUser(req: Request, res: Response) {
    const userId = Number(req.params.id);

    try {
      const deletedRowCount = await User.destroy({
        where: { id: userId },
      });

      if (deletedRowCount === 0) {
        res.status(404).json({ error: "Usuário não encontrado." });
      } else {
        res.status(204).send();
      }
    } catch (error) {
      res.status(500).json({ error: "Erro ao excluir usuário." });
    }
  }
}

export default new UserController();
