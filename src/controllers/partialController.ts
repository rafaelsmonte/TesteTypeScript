import mongoose from "mongoose";
import { Router, Request, Response } from 'express';


export default {
  todasPropostas(req:Request, res:Response){
    res.status(201).send("ok partial");
  },
  gravaProposta(req:Request, res:Response){
    res.status(201).send("ok");
    
  }

}