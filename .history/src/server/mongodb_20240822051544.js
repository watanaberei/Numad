import mongoose from 'mongoose'; 

mongoose.connect("mongodb+srv://user:sshkey@cluster0.bgd0ike.mongodb.net/")
.then(() => {
    console.log("MongoDB connected");
})  
.catch(() => {
  console.log("MongoDB connection failed");
})

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: false
  },
  lastName: {
    type: String,
    required: false
  },
  birthdate: {
    type: Date,
    required: false
  },
  savedStores: {
    type: [String],
    default: []
  },
  checkedInStores: {
    type: [String],
    default: []
  }
});

const User = mongoose.model('User03', UserSchema);

export default User;