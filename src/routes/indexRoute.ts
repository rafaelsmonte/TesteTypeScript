import { Router, Request, Response } from 'express';

const routes = Router();
routes.get('/',(req: Request, res:Response)=> {
  return res.send({ Por: 'Rafael Santos Monte 2'
  });
  
});
export default routes;