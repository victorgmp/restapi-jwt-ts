import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://jwt_usr:jwt123456.@cluster0-i17re.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(db => console.log('Database is connected'))
  .catch(err => console.log(err));