import mongoose from "mongoose";
import { Request, Response } from 'express';
import final from '../models/final'
export default {
  async todasPropostas(req: Request, res: Response) {
    res.status(201).send(await final.find()); //rota para testes
  },
  async gravaProposta(req: Request, res: Response) {
    var propostaFinal = new final(req.body);
    propostaFinal.save().then(x => {
      res.status(201).send({
        'message': 'Proposta gravada com sucesso'
      });
    }).catch(e => {
      res.status(401).send({
        'message': 'erro ao cadastrar a proposta final',
        'data': e
      });
    });
  },
  
}