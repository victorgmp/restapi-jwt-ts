import { Router, Request, Response } from 'express';
const router: Router = Router();

import { signup, signin, profile } from '../controllers/auth.controller'

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/profile', profile);

export default router;