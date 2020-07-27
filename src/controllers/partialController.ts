import mongoose from "mongoose";
import { Request, Response } from 'express';
import partial from '../models/partial'
export default {
  todasPropostas(req: Request, res: Response) {
    res.status(201).send("ok partial");
  },
  async gravaProposta(req: Request, res: Response) {
    const { token } = req.body;

    if (token) {
      var proposta: any;
      try {
        proposta = await partial.findByIdAndUpdate({ '_id': token }, { $set: req.body });
        var dataSet = proposta.toJSON();
        dataSet.sucess = true;
        dataSet.token = dataSet._id;
        dataSet._id = undefined;
        res.status(200).send(dataSet);
      }
      catch (e) {
        return res.status(404).send({
          Mensagem: "Proposta não encontrada",
          "success": false,
        });
      }
    }
    else {
      const novaProposta = new partial(req.body);
      var dataSet = novaProposta.toJSON();
      dataSet.sucess = true;
      dataSet.token = dataSet._id;
      dataSet._id = undefined;
      await novaProposta.save()
        .then(x => {
          res.status(201).send(dataSet);
        }).catch(e => {
          return res.status(400).send({
            Mensagem: "Erro ao cadastrar a proposta",
            "success": false,
            Data: e
          })
        });
    }
  }
}