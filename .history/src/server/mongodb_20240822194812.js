mport mongoose from 'mongoose'; 

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
  },
  likedStores: {
    type: [String],
    default: []
  },
  dislikedStores: {
    type: [String],
    default: []
  }
});

const StoreSchema = new mongoose.Schema({
  storeId: {
    type: String,
    required: true,
    unique: true
  },
  likes: {
    type: Number,
    default: 0
  },
  dislikes: {
    type: Number,
    default: 0
  }
});

const User = mongoose.model('User03', UserSchema);
const Store = mongoose.model('Store', StoreSchema);

export { User, Store };