import mongoose from "mongoose";
import { Router, Request, Response } from 'express';
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
      novaProposta.save()
      .then(x=> {
        res.status(201).send({
          novaProposta,
          "success": true,
        });
      })
      .catch(e => {
        return res.status(400).send({
            Mensagem: "Erro ao cadastrar a proposta",
            Data: e
        });

    }


  }

}