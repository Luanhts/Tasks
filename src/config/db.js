import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose 
    .connect(`...`) //lembra de configura o .env e aqui
    .then(() => console.log('MongoDb connected with sucess'))
    .catch(err => console.log(err));
}

export default connectDB;