import mongoose from "mongoose";
import { Request, Response } from 'express';
import final from '../models/final'
import partial from '../models/partial'
export default {
  async todasPropostas(req: Request, res: Response) {
    res.status(201).send(await final.find()); //rota para testes
  },
  async gravaProposta(req: Request, res: Response) {
    var propostaFinal = new final(req.body);
    var session = await final.db.startSession();
    var { token } = req.body;
    session.startTransaction();
    if (token)
      await partial.findByIdAndRemove(token, async function (err) {
        if (err) {
          await session.abortTransaction();
          session.endSession();
          return res.status(401).send({
            'message': 'Erro ao gravar a proposta',
            'Data': err
          });
        }
      }).session(session);
    await propostaFinal.save(async function (err) {
      if (err) {
        await session.abortTransaction();
        session.endSession();
        return res.status(401).send({
          'message': 'Erro ao cadastrar a proposta final',
          'data': err
        });
      }
      await session.commitTransaction();
      session.endSession();
      return res.status(201).send({
        'message': 'Proposta gravada com sucesso'
      });
    });


  },

}