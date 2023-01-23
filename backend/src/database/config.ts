import mongoose from "mongoose";

mongoose.set('strictQuery', false);

/*
* Conexão com o banco de dados para fins de teste
*/
const MONGO_URI =
  "mongodb+srv://dbUserAdmin:teste123@apicluster.jvgqq.mongodb.net/?retryWrites=true&w=majority";

const connectDB: () => Promise<void> = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
