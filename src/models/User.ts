import {Schema, model, Document} from 'mongoose';

export interface IUser extends Document {
  username: string,
  email: string,
  password: string
}

const userSquema = new Schema({
  username: {
    type: String,
    required: true,
    min: 4,
    lowercase: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  }
});

export default model<IUser>('user', userSquema);