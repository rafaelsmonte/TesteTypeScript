import mongoose from "mongoose";
import { Request, Response } from 'express';
import partial from '../models/partial'
export default {
  async todasPropostas(req: Request, res: Response) {
    res.status(201).send(await partial.find()); //rota só para testes
  },
  async deletaProposta(req: Request, res: Response) {
    try {
      const { _id } = req.body;
      var proposta = await partial.findByIdAndDelete(_id);
      if (proposta) {
        res.status(200).send({
          'message': 'Proposta deletada com sucesso',
          'sucess': true,
        });
      } else {
        res.status(404).send({
          'message': 'Proposta não encontrada',
          'sucess': false,
        });
      }
    } catch (e) {
      res.status(400).send({
        'message': 'Erro ao deletar a proposta',
        'sucess': false,
      });
    }
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