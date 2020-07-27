import mongoose from "mongoose";
import { Request, Response } from 'express';
import partial from '../models/partial'
export default {
  todasPropostas(req:Request, res:Response){
    res.status(201).send("ok partial");
  },
  gravaProposta(req:Request, res:Response){
    const { token } = req.body;

    if(token)
      res.status(201).send("update");
    else
    {
      const novaProposta = new partial(req.body);
      
      var dataSet =novaProposta.toJSON();
      dataSet.sucess = true ;
      dataSet.token = dataSet._id;
      dataSet._id=undefined;
      novaProposta.save()
      .then(x=> { res.status(201).send(dataSet);
      }).catch(e=> {
        return res.status(400).send({
            Mensagem: "Erro ao cadastrar a proposta",
            "success": false,
            Data: e
        })
      });
    }
  }
}