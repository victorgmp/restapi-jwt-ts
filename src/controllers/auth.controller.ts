import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import User, { IUser } from '../models/User';

export const signup = async (req: Request, res: Response) => {
  // saving a new user
  const user: IUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });
  const savedUser = await user.save();
  // token
  const token = jwt.sign({_id: savedUser._id}, process.env.TOKEN_SECRET || 'tokentest')

  res.header('auth-token', token).json(savedUser);
};

export const signin = (req: Request, res: Response) => {
  res.send('signin');
};

export const profile = (req: Request, res: Response) => {
  res.send('profile');
};