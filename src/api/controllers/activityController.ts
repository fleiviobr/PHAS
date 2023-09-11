import { Request, Response } from "express";
import Activity from "../models/activity";

class activityController {
  async findActivity(req: Request, res: Response) {
    try {
      const activity = await Activity.findAll();
      res.status(200).json(activity);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar atividades." });
    }
  }
  async findActivityByPK(req: Request, res: Response) {
    const ActivityId = Number(req.params.id);

    try {
      const people = await Activity.findByPk(ActivityId);
      if (!people) {
        res.status(404).json({ error: "Atividade não encontrado." });
      } else {
        res.status(200).json(people);
      }
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar Atividade." });
    }
  }

  async createActivity(req: Request, res: Response) {
    try {
      const newActivity = await Activity.create(req.body);
      res.status(201).json(newActivity);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar Atividade." });
    }
  }

  async updateActivity(req: Request, res: Response) {
    const activityId = Number(req.params.id);

    try {
      const [updatedRowsCount] = await Activity.update(req.body, {
        where: { id: activityId },
      });

      if (updatedRowsCount === 0) {
        res.status(404).json({ error: "Atividade não encontrado." });
      } else {
        res.status(200).json({ message: "Atividade atualizado com sucesso." });
      }
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar Atividade." });
    }
  }

  async deleteActivity(req: Request, res: Response) {
    const activityId = Number(req.params.id);

    try {
      const deletedRowCount = await Activity.destroy({
        where: { id: activityId },
      });

      if (deletedRowCount === 0) {
        res.status(404).json({ error: "Atividade não encontrado." });
      } else {
        res.status(204).send();
      }
    } catch (error) {
      res.status(500).json({ error: "Erro ao excluir Atividade." });
    }
  }
}

export default new activityController();
