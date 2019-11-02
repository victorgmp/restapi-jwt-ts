import { Router } from 'express';
const router: Router = Router();

import { tokenValidation } from '../libs/verifyToken';
import { signup, signin, profile } from '../controllers/auth.controller';

router.post('/signup', signup);
router.post('/signin', signin);

router.get('/profile', tokenValidation , profile);

export default router;