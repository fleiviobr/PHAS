import { Request, Response } from "express";
import People from "../models/people";
import Address from "../models/address";

class peopleController {
  async findPeople(req: Request, res: Response) {
    try {
      const people = await People.findAll();
      res.status(200).json(people);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar pessoas." });
    }
  }
  async findPersonByPk(req: Request, res: Response) {
    const personId = Number(req.params.id);

    try {
      const people = await People.findByPk(personId);
      if (!people) {
        res.status(404).json({ error: "pessoa não encontrado." });
      } else {
        res.status(200).json(people);
      }
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar pessoa." });
    }
  }

  async createPerson(req: Request, res: Response) {
    const { name, phone, email, address } = req.body;
    //const userId = req.user.idUser; nao sei como q eu pego o ID
    try {
      const newAddress = await Address.create(address);

      const newPerson = await People.create({
        name,
        phone,
        email,
        addressId: newAddress.idAddress,
        // userId: userId,
      });

      res.status(201).json(newPerson);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar pessoa." });
    }
  }

  async updatePerson(req: Request, res: Response) {
    const personId = Number(req.params.id);

    try {
      const [updatedRowsCount] = await People.update(req.body, {
        where: { id: personId },
      });

      if (updatedRowsCount === 0) {
        res.status(404).json({ error: "pessoa não encontrado." });
      } else {
        res.status(200).json({ message: "pessoa atualizado com sucesso." });
      }
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar pessoa." });
    }
  }

  async deletePerson(req: Request, res: Response) {
    const personId = Number(req.params.id);

    try {
      const deletedRowCount = await People.destroy({
        where: { id: personId },
      });

      if (deletedRowCount === 0) {
        res.status(404).json({ error: "pessoa não encontrado." });
      } else {
        res.status(204).send();
      }
    } catch (error) {
      res.status(500).json({ error: "Erro ao excluir pessoa." });
    }
  }
}

export default new peopleController();
