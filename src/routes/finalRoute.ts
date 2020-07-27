import express from 'express';
import controller from '../controllers/finalController';

const router = express.Router();
router.get('/', controller.todasPropostas);
router.post('/', controller.gravaProposta);

export default router;